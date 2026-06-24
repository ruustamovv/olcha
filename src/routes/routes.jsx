import Cartpage from "../pages/CartPage"
import ComparePage from "../pages/ComparePage"
import Favouritespage from "../pages/FavouritesPage"
import Homepage from "../pages/HomePage"
import Loginpage from "../pages/LoginPage"
import Productpage from "../pages/ProductPage"

export const routes = [
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/cart",
    element: <Cartpage />,
  },
  {
    path: "/favourites",
    element: <Favouritespage />,
  },
  {
    path: "/product/:id",
    element: <Productpage />,
  },
  {
    path: "/login",
    element: <Loginpage />,
  },
  {
    path: "/compare",
    element: <ComparePage />,
  },
]
