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
        const { data, error } = await supabase.storage.from(SUPABASE_STORAGE_BUCKET).upload(name, image)
        if (error) {
          // Handle error
          console.log("ImageUploader error: ", error)
        } else {
          // Handle success
          console.log("Image Uploader success! data: ", data)
          // Insert a new image object into newPostElements with data.path as the url.
          const tempElements = [...newPostElements]
          tempElements.splice(insertionIndex, 0, { type: "image", url: data.path })
          setNewPostElements(tempElements)
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