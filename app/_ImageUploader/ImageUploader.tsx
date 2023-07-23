import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { InProgressPostElements } from "../create-new-post/interfaces"
import { Dispatch, SetStateAction, useEffect, useState } from "react"
import { InProgressImageInfo } from "./types"
import InputLabel from "../_UI-components/InputLabel"

const SUPABASE_STORAGE_BUCKET = process.env.NEXT_PUBLIC_SUPABASE_STORAGE_BUCKET

export default function ImageUploader({ 
  insertionIndex,
  newPostElements, 
  setNewPostElements
}: { 
  insertionIndex: number,
  newPostElements: InProgressPostElements, 
  setNewPostElements: Dispatch<SetStateAction<InProgressPostElements>> 
}) {
  const [ image, setImage ] = useState(null);

  useEffect(() => {
    if (image && SUPABASE_STORAGE_BUCKET) {
      const uploadImage = async () => {
        const supabase = createClientComponentClient()
        const name = `image-${Math.floor(Math.random() * Math.pow(10, 10))}`
        const { data, error: uploadError } = await supabase.storage.from(SUPABASE_STORAGE_BUCKET).upload(name, image)
        if (uploadError) {
          console.log(uploadError)
        } else {
          const { data: { publicUrl } } = await supabase.storage.from(SUPABASE_STORAGE_BUCKET).getPublicUrl(name)
          if (publicUrl) {
            const tempElements = [...newPostElements]
            tempElements.splice(insertionIndex, 0, { type: "image", url: publicUrl })
            setNewPostElements(tempElements)
          }
        }
      }
      uploadImage()
    }
  }, [image, SUPABASE_STORAGE_BUCKET])

  return (
    <div className="border border-dashed border-white p-4 block">
      <InputLabel htmlFor="imageUpload">
        + Add image
        <input
          style={{ display: "none" }}
          name="imageUpload"
          type="file"
          onChange={(e) => {
            const copiedArray = [...e.target.files]
            setImage(copiedArray[0])
          }}
        />
      </InputLabel>
    </div>
  )
}