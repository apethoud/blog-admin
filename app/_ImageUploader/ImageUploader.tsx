import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { PostElements } from "../create-new-post/interfaces"
import { Dispatch, SetStateAction, useEffect, useState } from "react"
import { InProgressImageInfo } from "./types"

const SUPABASE_STORAGE_BUCKET = process.env.NEXT_PUBLIC_SUPABASE_STORAGE_BUCKET

export default function ImageUploader({ 
  insertionIndex,
  newPostElements, 
  setNewPostElements
}: { 
  insertionIndex: number,
  newPostElements: PostElements, 
  setNewPostElements: Dispatch<SetStateAction<PostElements>> 
}) {
  const [ image, setImage ] = useState(null);

  useEffect(() => {
    if (image) {
      const uploadImage = async () => {
        const supabase = createClientComponentClient()
        const name = `image-${Math.floor(Math.random() * Math.pow(10, 10))}`
        const { data: uploadData, error: uploadError } = await supabase.storage.from(SUPABASE_STORAGE_BUCKET).upload(name, image)
        if (uploadError) {
          // Handle uploadError
          console.log("ImageUploader uploadError: ", uploadError)
        } else {
          // Handle success
          console.log("Image Uploader success! uploadData: ", uploadData)
          // Get a public url for the image
          const { data: { publicUrl }, error: getPublicUrlError } = await supabase.storage.from(SUPABASE_STORAGE_BUCKET).getPublicUrl(name, {
            transform: {
              width: 400,
              height: 300,
            },
          })
          if (getPublicUrlError) {
            // Handle getPublicUrlError
            console.log("image download getPublicUrlError: ", getPublicUrlError)
          } else {
            // Handle success
            console.log("image download success! publicUrl: ", publicUrl);
            // Insert a new image object into newPostElements with data.path as the url.
            const tempElements = [...newPostElements]
            tempElements.splice(insertionIndex, 0, { type: "image", url: publicUrl })
            setNewPostElements(tempElements)
          }
        }
      }
      uploadImage()
    }
  }, [image])

  return (
    <label className="border border-dashed border-white p-4 block">
      + Add image
      <input
        style={{ display: "none" }}
        type="file"
        onChange={(e) => {
          const copiedArray = [...e.target.files]
          setImage(copiedArray[0])
        }}
      />
    </label>
  )
}