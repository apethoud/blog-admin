import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { InProgressImages, InProgressParagraphs, InProgressPostElements } from "../create-new-post/interfaces"
import { Dispatch, SetStateAction, useEffect, useState } from "react"
import { InProgressImageInfo } from "./types"
import InputLabel from "../_UI-components/InputLabel"

const SUPABASE_STORAGE_BUCKET = process.env.NEXT_PUBLIC_SUPABASE_STORAGE_BUCKET

export default function ImageUploader({ 
  insertionIndex,
  newParagraphs,
  setNewParagraphs,
  newImages,
  setNewImages
}: { 
  insertionIndex: number,
  newParagraphs: InProgressParagraphs,
  setNewParagraphs: Dispatch<SetStateAction<InProgressParagraphs>>,
  newImages: InProgressImages,
  setNewImages: Dispatch<SetStateAction<InProgressImages>>
}) {
  const [ image, setImage ] = useState<File | null>(null);

  useEffect(() => {
    if (image && SUPABASE_STORAGE_BUCKET) {
      const uploadImage = async () => {
        const supabase = createClientComponentClient()
        const name = `image-${Math.floor(Math.random() * Math.pow(10, 10))}`
        const { data, error: uploadError } = await supabase.storage.from(SUPABASE_STORAGE_BUCKET).upload(name, image)
        if (uploadError) {
          console.log(uploadError)
        } else {
          const { data: { publicUrl } } = await supabase.storage.from(SUPABASE_STORAGE_BUCKET).getPublicUrl(name, {
            transform: {
              width: 640,
              height: 480,
              resize: 'contain'
            }
          })
          if (publicUrl) {
            // Update the ui_order for all paragraphs and images to accomodate inserting the new image at a certain index
            // For every paragraph in newParagraphs with a ui_order of insertionIndex or higher, increment its ui_order by 1
            let tempParagraphs = [...newParagraphs]
            tempParagraphs = tempParagraphs.map(p => {
              if (p.ui_order && p.ui_order >= insertionIndex) {
                p.ui_order = p.ui_order + 1
              }
              return p
            })
            setNewParagraphs(tempParagraphs)
            // For every image in newImages with a ui_order of insertionIndex or higher, increment its ui_order by 1
            let tempImages = [...newImages]
            tempImages = tempImages.map(i => {
              if (i.ui_order && i.ui_order >= insertionIndex) {
                i.ui_order = i.ui_order + 1
              }
              return i
            })
            // Add a new image to newImages with a ui_order of insertionIndex
            tempImages.push({ alt_text: "", type: "image", url: publicUrl, ui_order: insertionIndex })
            setNewImages(tempImages)
          }
        }
      }
      uploadImage()
    }
  }, [image, SUPABASE_STORAGE_BUCKET])

  return (
    <div className="border border-dashed border-white p-4 block">
      <InputLabel htmlFor={`imageUpload-${insertionIndex}`}>
        + Add image
        <input
          style={{ display: "none" }}
          id={`imageUpload-${insertionIndex}`}
          type="file"
          onChange={(e) => {
            if (e.target.files) {
              const copiedArray = [...e.target.files]
              setImage(copiedArray[0])
            }
          }}
        />
      </InputLabel>
    </div>
  )
}