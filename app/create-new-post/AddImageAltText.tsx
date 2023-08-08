import { Dispatch, SetStateAction, useState } from "react"
import InputLabel from "../_UI-components/InputLabel"
import { InProgressImage, InProgressImages } from "./interfaces"
import Button from "../_UI-components/Button"

export default function AddImageAltText({ 
  newImages, 
  setNewImages, 
  selectedImage 
}: { 
  newImages: InProgressImages,
  setNewImages: Dispatch<SetStateAction<InProgressImages>>,
  selectedImage: InProgressImage
}) {
  const [ inputValue, setInputValue ] = useState("")

  const saveAltTextToImage = () => {
    let tempImages = [...newImages]
    tempImages = tempImages.map(image => {
      if (image.ui_order === selectedImage.ui_order) {
        image.alt_text = inputValue
      }
      return image
    })
    setNewImages(tempImages)
  }
  return (
    <>
      <InputLabel htmlFor={`imageAltText-${selectedImage.ui_order}`}>
        Alt Text
        <input
          className="bg-slate-100 dark:bg-slate-900 border border-solid border-slate-300 dark:border-slate-600 font-sans text-lg text-slate-900 dark:text-slate-100 antialiased"
          id={`imageAltText-${selectedImage.ui_order}`}
          type="text"
          onChange={(e) => {
            if (e.target.value) {
              setInputValue(e.target.value)
            }
          }}
        />
      </InputLabel>
      <Button 
        label="Add"
        primary
        type="button"
        onClick={saveAltTextToImage}
      />
    </>
  )
}