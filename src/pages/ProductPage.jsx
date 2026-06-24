import React, { useEffect, useState } from "react"
import { useParams } from "react-router"

function Productpage() {
  const [product, setProduct] = useState(null)

  const { id } = useParams()

  useEffect(() => {
    fetch(`https://6c17cdd241beda19.mokky.dev/products/${id}`).then((request) =>
      request.json().then((response) => setProduct(response))
    )
  }, [id])

  if (product === null) {
    return (
      <div className="text-red-600 font-black text-4xl h-[calc(100vh-240px)] max-lg:h-[calc(100vh-280px)] max-md:text-2xl flex items-center justify-center">
        loading...
      </div>
    )
  } else {
    return (
      <section>
        <div className="flex flex-col gap-10 justify-between">
          <div>
            <p>Главная / Смартфоны,телефоны / смартфоны</p>
          </div>
          <p className="text-4xl font-bold ">{product.name}</p>
          <div className="flex justify-between">
            <div>отзывы</div>
            <div className="flex justify-between gap-3">
              <p>Добавить в сравнение</p>
              <p>Добавить в избранное</p>
              <p>Поделиться</p>
            </div>
          </div>
        </div>

        <div key={product.id} className="flex justify-between">
          <div className="flex items-center gap-4">
            <div className="flex flex-col gap-2">
              <img
                className="w-18 rounded-xl border-red-600 border-2 px-2 py-1"
                src={product.image}
                alt=""
              />
            </div>
            <div className="object-contain bg-gray-200 px-15 py-20 rounded-2xl">
              <img src={product.image} className="w-70" alt="" />
            </div>
          </div>
          <div className="flex flex-col">
            <div>
              <p>цвет:</p>
              <div className="flex justify-between gap-4">
                <img
                  className="w-20 border-2 rounded-md p-4"
                  src={product.image}
                  alt=""
                />
                <img
                  className="w-20 border-2 rounded-md p-4"
                  src={product.image}
                  alt=""
                />
                <img
                  className="w-20 border-2 rounded-md p-4"
                  src={product.image}
                  alt=""
                />
              </div>
            </div>
            <div>
              <p>Объем памяти: {product.memory}</p>
            </div>
            <div></div>
          </div>
          <div></div>
        </div>
      </section>
    )
  }
}

export default Productpage
