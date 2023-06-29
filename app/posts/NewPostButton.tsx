import Link from 'next/link';

export default function NewPostButton() {
  return (
    <Link href={`create-new-post`}>
      <div className="border border-dashed border-white mb-2 p-4">
        + Create a new post
      </div>
    </Link>
  )
}