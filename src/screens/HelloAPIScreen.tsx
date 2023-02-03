import axios from "axios"
import { useState } from "react"
import Screen from "../components/Screen"

function HelloAPIScreen() {

	const [result, setResult] = useState("")
	const [isLoading, setIsLoading] = useState(false)

	async function hello() {

		setIsLoading(true)

		const result = axios
			.get('http://localhost:8000')
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
		<Screen title="Hello API">

			<p>APIとの通信を行います。</p>

			<button type="button" onClick={hello} className="mt-2 py-1 px-4 rounded-full border border-gray-500 text-gray-500 hover:bg-gray-200 transition">Submit</button>

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

export default HelloAPIScreen