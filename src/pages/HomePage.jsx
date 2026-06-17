import React, { createElement, useEffect, useState } from "react"
import Banner from "../components/Banner"
import colors from "../assets/colors/PrimaryColor"
import CartIcon from "../assets/icons/CartIcon"

function Homepage() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch("https://6c17cdd241beda19.mokky.dev/products").then((request) =>
      request.json().then((response) => setProducts(response)),
    )
  }, [])

  return (
    <section>
      <Banner />
      <div className="grid grid-cols-1 min-[480px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mt-10 gap-5">
        {products.map((product) => {
          const discount = Math.round(
            ((product.old_price - product.price) / product.old_price) * 100,
          )
          return (
            <div
              className="cursor-pointer hover:scale-101 hover:shadow-2xl p-2 transition-all duration-400 ease-in-out flex flex-col h-full rounded-2xl gap-2"
              key={product.id}
            >
              <div className="relative flex items-center h-full w-full justify-center rounded-2xl bg-gray-100 p-10 ">
                <img
                  className="w-full h-full object-contain"
                  src={product.image}
                  alt="iphone"
                />
                <div
                  className="absolute text-white px-2 text-sm font-semibold top-0 left-0 rounded-tl-2xl rounded-lg"
                  style={{ backgroundColor: colors.primary }}
                >
                  -{discount}%
                </div>
                {discount >= 10 ? (
                  createElement(
                    "h1",
                    {
                      className:
                        "absolute text-black px-2 text-sm font-semibold rounded-tr-2xl top-0 right-0 bg-yellow-300 rounded-lg",
                    },
                    "HOT",
                  )
                ) : (
                  <div
                    className="absolute text-white px-2 text-sm font-semibold top-0 left-0 rounded-tl-2xl rounded-lg"
                    style={{ backgroundColor: colors.primary }}
                  >
                    -{discount}%
                  </div>
                )}
              </div>
              <p className="min-[250px]:line-clamp-none min-[250px]:h-25 min-[251px]:h-10 min-[251px]:line-clamp-1 font-medium">
                {product.name}
              </p>
              <p
                className={`font-semibold tracking-wide text-lg ${((product.old_price - product.price) / product.old_price) * 100 >= 10 ? "text-red-600" : "text-black"}`}
              >
                {product.price.toLocaleString("ru-Ru")} сум
              </p>
              <p className="line-through text-gray-500 font-medium">
                {product.old_price.toLocaleString("ru-Ru")} сум
              </p>
              <p className="bg-yellow-400 rounded-lg w-fit font-medium px-2">
                {Math.round((product.price / 12) * 1.2).toLocaleString("ru-Ru")}{" "}
                сум х12 мес
              </p>
              <div className="z-10 flex justify-between gap-4 mt-2">
                <button className="group hover:border-red-600 transition-all duration-300 ease-in-out border-2 rounded-xl p-1 cursor-pointer">
                  <CartIcon />
                </button>
                <button
                  className="cursor-pointer hover:bg-red-600 text-red-600 font-medium hover:text-white transition-all duration-300 ease-in-out border-2 rounded-xl w-full p-1"
                  style={{ borderColor: colors.primary }}
                >
                  в рассрочку
                </button>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Homepage
