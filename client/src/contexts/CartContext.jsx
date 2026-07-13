import { createContext, useEffect, useMemo, useState } from "react"

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const data = localStorage.getItem("cart")
    return data ? JSON.parse(data) : []
  })

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems))
  }, [cartItems])

  const addToCart = (product) => {
    const exist = cartItems.find((item) => item._id === product._id)

    if (exist) {
      setCartItems(
        cartItems.map((item) =>
          item._id === product._id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        ),
      )
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }])
    }
  }

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item._id !== id))
  }

  const increaseQuantity = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item._id === id ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    )
  }

  const decreaseQuantity = (id) => {
    setCartItems(
      cartItems
        .map((item) =>
          item._id === id ? { ...item, quantity: item.quantity - 1 } : item,
        )
        .filter((item) => item.quantity > 0),
    )
  }

  const clearCart = () => {
    setCartItems([])
  }

  const totalPrice = useMemo(() => {
    return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  }, [cartItems])

  const totalItems = useMemo(() => {
    return cartItems.reduce((sum, item) => sum + item.quantity, 0)
  }, [cartItems])

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
        totalPrice,
        totalItems,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
