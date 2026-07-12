import { useContext, useEffect, useRef, useState } from "react"
import MenuIcon from "../assets/icons/MenuIcon"
import { ProductContext } from "../contexts/ProductContext"

function Directory() {
  const { categories, selectedCategory, setSelectedCategory } =
    useContext(ProductContext)

  const [showCategory, setShowCategory] = useState(false)

  const directoryRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (directoryRef.current && !directoryRef.current.contains(e.target)) {
        setShowCategory(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)

    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <div className="relative" ref={directoryRef}>
      <div
        onClick={() => setShowCategory(!showCategory)}
        className="group max-lg:px-1.5 max-lg:py-1 transition-all duration-300 ease-in-out cursor-pointer hover:border-red-600 hover:text-red-600 border-2 flex justify-between items-center px-6 rounded-xl py-2 gap-2"
      >
        <MenuIcon />

        <div className="max-lg:hidden">
          <p className="text-lg">Каталог</p>
        </div>
      </div>

      <div
        className={`
          absolute
          top-full
          left-0
          mt-2
          w-72
          bg-white
          rounded-xl
          shadow-2xl
          overflow-hidden
          z-50
          transition-all
          duration-300
          ease-in-out
          origin-top

          ${
            showCategory
              ? "opacity-100 translate-y-0 scale-y-100 visible"
              : "opacity-0 -translate-y-4 scale-y-95 invisible"
          }
        `}
      >
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => {
              setSelectedCategory(category)
              setShowCategory(false)
            }}
            className={`w-full text-left px-6 py-3 transition-all duration-200 hover:bg-red-50 hover:text-red-600 cursor-pointer

            ${
              selectedCategory === category
                ? "bg-red-600 text-white hover:bg-red-600 hover:text-white"
                : ""
            }
            `}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  )
}

export default Directory
