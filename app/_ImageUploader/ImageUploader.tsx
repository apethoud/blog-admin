import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { PostElements } from "../create-new-post/interfaces"
import { Dispatch, SetStateAction, useEffect, useState } from "react"
import { InProgressImageInfo } from "./types"

const SUPABASE_STORAGE_BUCKET = process.env.NEXT_PUBLIC_SUPABASE_STORAGE_BUCKET

export default function ImageUploader({ 
  newPostElements, 
  setNewPostElements
}: { 
  newPostElements: PostElements, 
  setNewPostElements: Dispatch<SetStateAction<PostElements>> 
}) {
  const [ image, setImage ] = useState(null);

  useEffect(() => {
    if (image) {
      const uploadImage = async () => {
        const supabase = createClientComponentClient()
        const { data, error } = await supabase.storage.from(SUPABASE_STORAGE_BUCKET).upload('image_name', image)
        if (error) {
          // Handle error
          console.log("ImageUploader error: ", error)
        } else {
          // Handle success
          console.log("Image Uploader success! data: ", data)
        }
      }
      uploadImage()
    }
  }, [image])

  return (
    // <div className="border border-dashed border-white mb-2 p-4">
    //   + Add image
    // </div>
    <input
      type="file"
      name="myImage"
      onChange={(event) => {
        console.log(event.target.files[0]);
        setImage(event.target.files[0])
      }}
    />
  )
}