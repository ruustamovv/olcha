import React, { useEffect, useState } from "react"
import { useParams } from "react-router"

function Productpage() {
  const [product, setProduct] = useState(null)
  const { id } = useParams()
  const [selectedImage, setSelectedImage] = useState(null)

  useEffect(() => {
    fetch(`https://olcha-api.onrender.com/products/${id}`).then((request) =>
      request.json().then((response) => {
        setProduct(response)
        setSelectedImage(response.image[0])
      }),
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
            <div className="flex justify-between gap-3 text-red-600 font-bold">
              <p>Добавить в сравнение</p>
              <p>Добавить в избранное</p>
              <p>Поделиться</p>
            </div>
          </div>
        </div>

        <div className="flex justify-between gap-2 mt-10 max-lg:flex-col max-lg:w-full">
          <div className="flex items-center gap-4 w-3/7">
            <div className="flex flex-col gap-2">
              {product.image.map((img, index) => (
                <img
                  onClick={() => setSelectedImage(img)}
                  className={`object-contain h-20 cursor-pointer rounded-xl border-2 px-2 py-1 ${
                    selectedImage === img ? "border-red-600" : "border-black"
                  }`}
                  src={img}
                  key={index}
                  alt={product.name}
                />
              ))}
            </div>
            <div className="bg-gray-200 w-full h-120 rounded-2xl flex items-center justify-center overflow-hidden">
              <img
                src={selectedImage}
                className="w-full h-full p-15 object-contain"
                alt={product.name}
              />
            </div>
          </div>
          <div className="flex flex-col w-1/4">
            {product.colors.map((color) => (
              <div className="flex justify-between gap-2" key={color.id}>
                <p>цвет: {color.colorName}</p>
                <div className="flex justify-between gap-4">
                  <img
                    className="w-20 border-2 p-3 rounded-lg"
                    src={color.colorImage}
                    alt=""
                  />
                </div>
              </div>
            ))}
            <div>
              <p>Объем памяти: {product.memory}</p>
            </div>
            <div></div>
          </div>
          <div className="flex flex-col justify-center w-1/4 items-center gap-4 border-2 rounded-2xl p-4">
            <p>В рассрочку</p>
            <div className="flex justify-between gap-2">
              <div>24</div>
              <div>18</div>
              <div>15</div>
              <div>12</div>
              <div>6</div>
              <div>5</div>
              <div>4</div>
              <div>3</div>
              <div>2</div>
              <div>1</div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Productpage
