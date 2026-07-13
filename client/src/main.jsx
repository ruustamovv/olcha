import { createRoot } from "react-dom/client"
import "./index.css"
import App from "./App.jsx"
import { BrowserRouter } from "react-router"
import { ProductProvider } from "./contexts/ProductContext.jsx"
import { CartProvider } from "./contexts/CartContext.jsx"

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ProductProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </ProductProvider>
  </BrowserRouter>,
)
