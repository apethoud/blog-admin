import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"

export default function ImageUploader() {
  // const supabase = createClientComponentClient()
  // const uploadImage = async (file) => {
  //   const { data, error } = await supabase.storage.from('bucket_name').upload('file_path', file)
  //   if (error) {
  //     // Handle error
  //   } else {
  //     // Handle success
  //   }
  // }
  return (
    <div className="border border-dashed border-white mb-2 p-4">
      + Add image
    </div>
  )
}