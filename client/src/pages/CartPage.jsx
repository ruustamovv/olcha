import { useContext } from "react"
import { CartContext } from "../contexts/CartContext"
import { Link } from "react-router"

function CartPage() {
  const {
    cartItems,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    totalPrice,
    clearCart,
  } = useContext(CartContext)

  if (cartItems.length === 0) {
    return (
      <div className="h-[60vh] flex flex-col justify-center items-center gap-5">
        <Link
          to="/"
          className="text-4xl bg-red-500 text-white rounded-2xl px-2 flex py-1 hover:scale-102 cursor-pointer transition-all duration-300 ease-in-out font-bold"
        >
          Корзина пуста
        </Link>
      </div>
    )
  }

  return (
    <section className="py-8">
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-4xl font-bold">Корзина ({cartItems.length})</h1>

        <button onClick={clearCart} className="text-red-600 cursor-pointer">
          Очистить корзину
        </button>
      </div>

      <div className="grid lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8 flex flex-col gap-5">
          {cartItems.map((item) => (
            <div
              key={item._id}
              className="border rounded-3xl p-5 flex max-md:flex-col gap-5"
            >
              <img
                src={item.image[0]}
                alt=""
                className="w-44 h-44 object-contain bg-gray-100 rounded-2xl p-4"
              />

              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <h2 className="text-xl font-semibold">{item.name}</h2>

                  <p className="text-gray-500 mt-2">{item.memory}</p>

                  <p className="text-red-600 font-bold text-2xl mt-3">
                    {item.price.toLocaleString("ru-RU")} сум
                  </p>
                </div>

                <div className="flex justify-between items-center mt-5 flex-wrap gap-4">
                  <div className="flex items-center border rounded-xl overflow-hidden">
                    <button
                      onClick={() => decreaseQuantity(item._id)}
                      className="px-5 py-2 hover:bg-gray-100 cursor-pointer"
                    >
                      -
                    </button>

                    <span className="px-6">{item.quantity}</span>

                    <button
                      onClick={() => increaseQuantity(item._id)}
                      className="px-5 py-2 hover:bg-gray-100 cursor-pointer"
                    >
                      +
                    </button>
                  </div>

                  <button
                    onClick={() => removeFromCart(item._id)}
                    className="text-red-600 cursor-pointer"
                  >
                    Удалить
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="lg:col-span-4">
          <div className="border rounded-3xl p-6 sticky top-30">
            <h2 className="text-2xl font-bold mb-6">Ваш заказ</h2>

            <div className="flex justify-between mb-4">
              <span>Товаров</span>

              <span>{cartItems.length}</span>
            </div>

            <div className="flex justify-between text-2xl font-bold mb-8">
              <span>Итого</span>

              <span className="text-red-600">
                {totalPrice.toLocaleString("ru-RU")} сум
              </span>
            </div>

            <button className="w-full bg-red-600 hover:bg-red-700 text-white py-4 rounded-2xl transition-all cursor-pointer">
              Оформить заказ
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CartPage
