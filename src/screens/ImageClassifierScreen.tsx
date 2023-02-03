import { useState } from "react"
import PickImageButton from "../components/PickImageButton"
import Screen from "../components/Screen"

function ImageClassifierScreen() {

	// eslint-disable-next-line
  const [image, setImage] = useState<File | null>(null)

  return (
    <Screen title="Image Classifier">

      <p>画像に写っているものがどのカテゴリに属するものなのか分類します。</p>

      <PickImageButton setPickedImage={setImage} />

      <button type="button" className="mt-2 py-1 px-4 rounded-full border border-gray-500 text-gray-500 hover:bg-gray-200 transition">Submit</button>
    </Screen>
  )
}

export default ImageClassifierScreen