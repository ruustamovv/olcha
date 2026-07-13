import { useEffect, useState } from "react"
import Directory from "./Directory"
import Search from "./Search"
import { Link } from "react-router"
import colors from "../assets/colors/PrimaryColor"
import BottomBar from "./BottomBar"
import { useContext } from "react"
import { CartContext } from "../contexts/CartContext"

function Header() {
  const [showHeader, setShowHeader] = useState(true)
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024)
  const { totalItems } = useContext(CartContext)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024)
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [isMobile])

  useEffect(() => {
    if (!isMobile) {
      return setShowHeader(true)
    }
    let lastScrollY = window.scrollY

    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setShowHeader(false)
      } else {
        setShowHeader(true)
      }
      lastScrollY = currentScrollY
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [isMobile])

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full bg-white shadow-lg z-50 px-5 transition-all duration-300 ease-in-out${
          showHeader ? "" : "transform -translate-y-40"
        }`}
      >
        <div className="container mx-auto max-xl:max-w-7xl transition-all duration-300 ease-in-out flex max-lg:flex-col items-center gap-6 max-lg:gap-4 justify-between py-4">
          <Link
            to="/"
            className={`text-4xl font-extrabold transition-all duration-300 ease-in-out ${
              showHeader ? "" : "transform -translate-y-40"
            }`}
            style={{ color: colors.primary }}
          >
            olcha
          </Link>
          <div className="flex items-center gap-4 w-full">
            <Directory />
            <div className="flex-1 min-w-0">
              <Search />
            </div>
          </div>

          <nav className="hidden lg:flex text-sm font-medium gap-5 items-center">
            <Link
              className="transition-all duration-300 ease-in-out hover:text-red-600"
              to="/compare"
            >
              Сравнение
            </Link>
            <Link
              className="transition-all duration-300 ease-in-out hover:text-red-600"
              to="/favourites"
            >
              Избранные
            </Link>
            <Link
              to="/cart"
              className="relative transition-all duration-300 hover:text-red-600"
            >
              Корзина
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-4 bg-red-600 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
            <Link
              className="transition-all duration-300 ease-in-out hover:text-red-600"
              to="/login"
            >
              Войти
            </Link>
          </nav>
        </div>
      </header>

      {isMobile && <BottomBar />}
    </>
  )
}

export default Header
