import axios from "axios"
import { useState } from "react"
import Screen from "../components/Screen"

function HelloAPIScreen() {

	const [result, setResult] = useState("")

	async function hello() {

		const result = axios
			.get('http://localhost:8000')
			.then(response => {

				setResult(response.data)
			})
			.catch((error) => {

				setResult(`${error}`)
			})
	}

	return (
		<Screen title="Hello API">

			<p>APIとの通信を行います。</p>

			<button type="button" onClick={hello} className="mt-2 py-1 px-4 rounded-full border border-gray-500 text-gray-500 hover:bg-gray-200 transition">Submit</button>

			<p className="mt-2">結果: {result}</p>
		</Screen>
	)
}

export default HelloAPIScreen