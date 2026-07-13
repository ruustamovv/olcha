import { createContext, useEffect, useMemo, useState } from "react"

export const ProductContext = createContext()

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(null)

  const [selectedCategory, setSelectedCategory] = useState("All")

  const [searchValue, setSearchValue] = useState("")

  useEffect(() => {
    fetch("https://olcha-api.onrender.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log(err))
  }, [])

  const categories = useMemo(() => {
    if (!products) return []

    const types = [...new Set(products.map((item) => item.type))]

    return ["All", ...types]
  }, [products])

  const filteredProducts = useMemo(() => {
    if (!products) return null

    if (selectedCategory === "All") return products

    return products.filter((product) => product.type === selectedCategory)
  }, [products, selectedCategory])

  const searchSuggestions = useMemo(() => {
    if (!products || searchValue.trim() === "") return []

    return products
      .filter((product) =>
        product.name.toLowerCase().includes(searchValue.toLowerCase()),
      )
      .slice(0, 6)
  }, [products, searchValue])

  return (
    <ProductContext.Provider
      value={{
        products,

        filteredProducts,

        categories,

        selectedCategory,
        setSelectedCategory,

        searchValue,
        setSearchValue,

        searchSuggestions,
      }}
    >
      {children}
    </ProductContext.Provider>
  )
}
