import { useEffect } from "react";

interface Props {
  title: string
  children: JSX.Element | JSX.Element[]
}

function Screen(props: Props) {

  useEffect(() => {

    if (props.title === "Top") {
      document.title ="Hello Machine Learning"
    }

    if (props.title !== "Top") {
      document.title = `${props.title} - Hello Machine Learning`
    }
  }, [])

  return (
    <main className="pt-8 bg-gray-200 h-screen px-4 lg:px-0">

      <div className="p-4 bg-white rounded-xl mx-auto w-full lg:width-lg">

        <h2 className="font-bold text-2xl">{props.title}</h2>

        <div className="mt-2">
          {props.children}
        </div>
      </div>
    </main>
  )
}

export default Screen