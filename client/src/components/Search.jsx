import { useContext, useEffect, useRef, useState } from "react"
import { Link } from "react-router"
import { ProductContext } from "../contexts/ProductContext"

function Search() {
  const { searchValue, setSearchValue, searchSuggestions } =
    useContext(ProductContext)
  const [showSuggestions, setShowSuggestions] = useState(false)
  const searchRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setShowSuggestions(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <div ref={searchRef} className="relative w-full">
      <input
        type="text"
        value={searchValue}
        placeholder="Поиск по каталогу"
        onFocus={() => setShowSuggestions(true)}
        onChange={(e) => {
          setSearchValue(e.target.value)
          setShowSuggestions(true)
        }}
        className="bg-gray-200 transition-all duration-300 ease-in-out max-lg:py-1.5 w-full border-2 rounded-xl px-4 py-2.5 outline-none"
      />
      <div
        className={`absolute left-0 top-full mt-2 w-full bg-white rounded-2xl shadow-2xl overflow-hidden z-50 origin-top transition-all duration-300 ease-in-out ${
          showSuggestions && searchSuggestions.length > 0
            ? "opacity-100 translate-y-0 scale-y-100 visible"
            : "opacity-0 -translate-y-3 scale-y-95 invisible"
        }`}
      >
        {searchSuggestions.map((product, index) => (
          <Link
            key={product._id}
            to={`/product/${product.unique_name}`}
            onClick={() => {
              setSearchValue("")
              setShowSuggestions(false)
            }}
            style={{
              transitionDelay: `${index * 40}ms`,
            }}
            className="flex items-center gap-4 px-4 py-3 hover:bg-gray-100 transition-all duration-300 hover:pl-6"
          >
            <img
              src={product.image[0]}
              alt={product.name}
              className="w-14 h-14 object-contain"
            />
            <div className="flex-1">
              <p className="line-clamp-1 font-medium">{product.name}</p>
              <p className="text-red-600 font-semibold">
                {product.price.toLocaleString("ru-RU")} сум
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Search
