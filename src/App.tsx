import ImageClassifierScreen from "./screens/ImageClassifierScreen"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from "react"
import Header from "./components/Header"
import TopScreen from "./screens/TopScreen"

function App() {

  return (
    <React.StrictMode>
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<TopScreen />} />
                <Route path='/image-classifier' element={<ImageClassifierScreen />} />
                <Route path='*' element={<TopScreen />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
  )
}

export default App