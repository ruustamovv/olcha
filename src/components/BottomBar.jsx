import { Link } from "react-router"
import HomeIcon from "../assets/icons/HomeIcon"
import LoginIcon from "../assets/icons/LoginIcon"
import CartIcon from "../assets/icons/CartIcon"
import FavouritesIcon from "../assets/icons/FavouritesIcon"
import CompareIcon from "../assets/icons/CompareIcon"

function BottomBar() {
  return (
    <nav className="transition-all duration-300 ease-in-out max-md:py-3 px-5 hidden max-lg:flex fixed bottom-0 left-0 w-full py-4 bg-white shadow-2xl shadow-black items-center justify-between z-50">
      <Link to="/">
        <HomeIcon />
      </Link>
      <Link to="/compare">
        <CompareIcon />
      </Link>
      <Link to="/favourites">
        <FavouritesIcon />
      </Link>
      <Link to="/cart">
        <CartIcon />
      </Link>
      <Link to="/login">
        <LoginIcon />
      </Link>
    </nav>
  )
}

export default BottomBar
