import React from "react"
import { useEffect, useRef, useState } from "react"
import { AiOutlineFileImage } from "react-icons/ai"

interface Props {
  setPickedImage: React.Dispatch<React.SetStateAction<File | null>>
  className?: string
}

function PickImageButton(props: Props) {

  // inputタグのRef
  const inputRef = useRef<HTMLInputElement>(null)

  // 選択したファイルへのオブジェクトURL
  const [objectUrl, setObjectUrl] = useState<string | null>(null)

  const onFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {

    if (!e.target.files) return

    // React.ChangeEvent<HTMLInputElement>よりファイルを取得
    const file = e.target.files[0]
    props.setPickedImage(file)

    // オブジェクトURLを生成
    const objectUrl = window.URL.createObjectURL(file)
    setObjectUrl(objectUrl)
  }

  useEffect(() => {

    return () => {

      if (objectUrl) {
        URL.revokeObjectURL(objectUrl)
      }
    }

    // eslint-disable-next-line
  }, [])

  return (
    <div className={props.className}>

      {!objectUrl &&

        <button type="button" onClick={() => inputRef.current?.click()} className="mt-2">
          <div className="border p-20 rounded-xl hover:bg-gray-100 transition">

            <AiOutlineFileImage className="text-gray-500 text-3xl" />
          </div>

        </button>
      }

      {objectUrl &&

        <button type="button" onClick={() => inputRef.current?.click()} className="mt-2">

          <div className="hover:brightness-90 transition">

            <img src={objectUrl} alt="Icon" className="w-full max-h-60 border rounded-xl" />
          </div>

        </button>
      }

      <input hidden ref={inputRef} type="file" accept=".jpg,.png,.gif" onChange={onFileInputChange} className="mt-3" />
    </div>
  )
}

export default PickImageButton