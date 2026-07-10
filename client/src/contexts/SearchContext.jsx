import { createContext, useState } from "react"
export const SearchContext = createContext()

export const SearchProvider = ({ children }) => {
  const [searchItems, setSearchItems] = useState("")

  return (
    <SearchContext.Provider value={{ searchItems, searchItems }}>
      {children}
    </SearchContext.Provider>
  )
}
