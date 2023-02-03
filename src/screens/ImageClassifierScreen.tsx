import axios from "axios"
import { useState } from "react"
import PickImageButton from "../components/PickImageButton"
import Screen from "../components/Screen"

function ImageClassifierScreen() {

	const [image, setImage] = useState<File | null>(null)
	const [result, setResult] = useState("")
	const [isLoading, setIsLoading] = useState(false)

	async function classificate() {

		setIsLoading(true)

		axios.post(`${process.env.REACT_APP_API_DOMAIN}`, image, {
				headers: {
					'Content-Type': 'multipart/form-data',
				},
			})
			.then(response => {

				setIsLoading(false)
				setResult(response.data)
			})
			.catch((error) => {

				setIsLoading(false)
				setResult(`${error}`)
			})
	}

	return (
		<Screen title="Image Classifier">

			<p>画像に写っているものがどのカテゴリに属するものなのか分類します。</p>

			<PickImageButton setPickedImage={setImage} />

			<button type="button" onClick={classificate} className="mt-2 py-1 px-4 rounded-full border border-gray-500 text-gray-500 hover:bg-gray-200 transition">Submit</button>

			<div className="mt-2">

				{isLoading &&
					<p>Loading...</p>
				}

				{!isLoading &&
					<p>
						<span className="text-gray-500">結果: </span>
						<span>{result}</span>
					</p>
				}
			</div>
		</Screen>
	)
}

export default ImageClassifierScreen