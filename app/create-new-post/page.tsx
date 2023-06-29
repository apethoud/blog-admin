'use client'

import { useState } from "react"
import AddText from "./AddText";

export default function CreateNewPost() {
  const [ step, setStep ] = useState(1);
  return (
    <>
      {step === 1 && (
        <AddText />
      )}
      {step === 2 && (
        <div>Page 2</div>
      )}
    </>
  )
}