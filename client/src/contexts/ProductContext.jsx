import { createContext, useEffect, useMemo, useState } from "react"

export const ProductContext = createContext()
export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(null)
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchValue, setSearchValue] = useState("")

  useEffect(() => {
    fetch("https://olcha-api.onrender.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data)
      })
      .catch((err) => console.log(err))
  }, [])

  const categories = useMemo(() => {
    if (products === null) return []
    const types = [...new Set(products.map((product) => product.type))]
    return ["All", ...types]
  }, [products])

  const filteredProducts = useMemo(() => {
    if (products === null) return null
    return products.filter((product) => {
      const categoryFilter =
        selectedCategory === "All" || product.type === selectedCategory
      const searchFilter = product.name
        .toLowerCase()
        .includes(searchValue.toLowerCase())
      return categoryFilter && searchFilter
    })
  }, [products, selectedCategory, searchValue])
  const searchSuggestions = useMemo(() => {
    if (products === null || searchValue.trim() === "") return []
    return products
      .filter((product) =>
        product.name.toLowerCase().includes(searchValue.toLowerCase()),
      )
      .slice(0, 5)
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
