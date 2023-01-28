import { useState } from "react"
import PickImageButton from "../components/PickImageButton"
import Screen from "../components/Screen"
import APIService from "../utilities/APIService"

function ImageClassifierScreen() {

  const [image, setImage] = useState<File | null>(null)

  async function hello() {
    const result = await APIService.helloAPI()

    alert(`結果: ${result}`)
  }

  return (
    <Screen title="Image Classifier">

      <p>画像に写っているものがどのカテゴリに属するものなのか分類します。</p>

      <PickImageButton setPickedImage={setImage} />

      <button type="button" onClick={hello} className="mt-2 py-1 px-4 rounded-full border border-gray-500 text-gray-500 hover:bg-gray-200 transition">Submit</button>
    </Screen>
  )
}

export default ImageClassifierScreen