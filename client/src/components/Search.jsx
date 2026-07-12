import { useContext, useEffect, useRef, useState } from "react"
import { Link } from "react-router"
import { ProductContext } from "../contexts/ProductContext"

function Search() {
  const { searchValue, setSearchValue, searchSuggestions } =
    useContext(ProductContext)

  const [showSuggestions, setShowSuggestions] = useState(false)

  const searchRef = useRef(null)

  useEffect(() => {
    const handleClick = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setShowSuggestions(false)
      }
    }

    document.addEventListener("mousedown", handleClick)

    return () => document.removeEventListener("mousedown", handleClick)
  }, [])

  return (
    <div className="relative" ref={searchRef}>
      <input
        className="bg-gray-200 transition-all duration-300 ease-in-out max-lg:py-1.5 w-full border-2 rounded-xl px-4 py-2.5 pr-10"
        type="text"
        placeholder="Поиск по каталогу"
        value={searchValue}
        onFocus={() => setShowSuggestions(true)}
        onChange={(e) => {
          setSearchValue(e.target.value)
          setShowSuggestions(true)
        }}
      />

      {searchValue !== "" && (
        <button
          onClick={() => {
            setSearchValue("")
            setShowSuggestions(false)
          }}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-red-600 cursor-pointer"
        >
          ✕
        </button>
      )}

      <div
        className={`absolute top-full left-0 mt-2 w-full bg-white rounded-xl shadow-xl overflow-hidden transition-all duration-300 z-50

        ${
          showSuggestions && searchSuggestions.length > 0 && searchValue !== ""
            ? "opacity-100 translate-y-0 visible"
            : "opacity-0 -translate-y-3 invisible"
        }
        `}
      >
        {searchSuggestions.map((product) => (
          <Link
            key={product._id}
            to={`/product/${product.unique_name}`}
            onClick={() => setShowSuggestions(false)}
          >
            <div className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 transition-all duration-200">
              <img
                src={
                  Array.isArray(product.image)
                    ? product.image[0]
                    : product.image
                }
                alt={product.name}
                className="w-12 h-12 object-contain"
              />

              <div className="flex flex-col">
                <p className="font-medium line-clamp-1">{product.name}</p>

                <p className="text-red-600 font-semibold">
                  {product.price.toLocaleString("ru-Ru")} сум
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Search
