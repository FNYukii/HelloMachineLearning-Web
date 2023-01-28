import { NavLink } from 'react-router-dom'

function Header() {

  return (

    <header className="w-full mx-auto px-4 lg:width-lg lg:px-0">

      <div className="py-4 flex justify-between items-center">
        <NavLink to="/" className="text-3xl">Hello Machine Learning</NavLink>
      </div>
    </header>
  )
}

export default Header