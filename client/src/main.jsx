import { createRoot } from "react-dom/client"
import "./index.css"
import App from "./App.jsx"
import { BrowserRouter } from "react-router"
import { ProductProvider } from "./contexts/ProductContext.jsx"
import { FavouriteProvider } from "./contexts/FavouriteContext.jsx"

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ProductProvider>
      <FavouriteProvider>
        <App />
      </FavouriteProvider>
    </ProductProvider>
  </BrowserRouter>,
)
