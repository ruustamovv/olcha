import { createContext, useState } from "react"

export const FavouriteContext = createContext()

export const FavouriteProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([])

  const toggleFavourite = (product) => {
    const exists = favourites.find((item) => item._id === product._id)

    if (exists) {
      setFavourites(favourites.filter((item) => item._id !== product._id))
    } else {
      setFavourites([...favourites, product])
    }
  }

  const isFavourite = (id) => favourites.some((item) => item._id === id)

  return (
    <FavouriteContext.Provider
      value={{
        favourites,
        toggleFavourite,
        isFavourite,
      }}
    >
      {children}
    </FavouriteContext.Provider>
  )
}
