import { useEffect, useState } from "react"
import { Link, useParams } from "react-router"

function ProductPage() {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [selectedImage, setSelectedImage] = useState("")
  const [selectedColor, setSelectedColor] = useState(0)
  const [month, setMonth] = useState(12)

  useEffect(() => {
    fetch(`https://olcha-api.onrender.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data)
        setSelectedImage(data.image[0])
      })
  }, [id])

  if (product === null) {
    return (
      <div className="text-red-600 font-black text-4xl h-[calc(100vh-240px)] flex items-center justify-center">
        loading...
      </div>
    )
  }
  const discount = Math.round(
    ((product.old_price - product.price) / product.old_price) * 100,
  )
  const monthlyPayment = Math.round((product.price / month) * 1.2)

  return (
    <section className="py-6">
      <div className="flex flex-wrap items-center gap-2 text-sm text-gray-500 mb-6">
        <Link to="/" className="hover:text-red-600">
          Главная
        </Link>
        <span>/</span>
        <span>{product.type}</span>
        <span>/</span>
        <span className="text-black line-clamp-1">{product.name}</span>
      </div>

      <h1 className="text-3xl lg:text-4xl font-bold mb-8">{product.name}</h1>
      <div className="gap-8 grid grid-cols-3 max-xl:grid-cols-2 max-lg:grid-cols-1">
        <div className="flex flex-col lg:flex-row items-center gap-4">
          <div className="lg:order-1 flex lg:flex-col gap-3 overflow-x-auto">
            {product.image.map((img, index) => (
              <img
                key={index}
                src={img}
                onClick={() => setSelectedImage(img)}
                className={`w-18 h-18 lg:w-20 lg:h-20 rounded-xl border-2 object-contain p-2 cursor-pointer transition
                  ${
                    selectedImage === img ? "border-red-600" : "border-gray-300"
                  }`}
                alt=""
              />
            ))}
          </div>
          <div className="h-full lg:order-2 flex-1 bg-gray-100 rounded-3xl flex items-center justify-center">
            <img
              src={selectedImage}
              alt={product.name}
              className="h-full w-10/12 p-2 object-contain"
            />
          </div>
        </div>
        <div className="">
          <h2 className="text-2xl font-semibold mb-6">Характеристики</h2>
          <div className="space-y-5">
            <div>
              <p className="text-gray-500 mb-3">Цвет</p>
              <div className="flex gap-3 flex-wrap">
                {product.colors.map((color, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedColor(index)}
                    className={`border-2 rounded-xl p-2 transition
                    ${
                      selectedColor === index
                        ? "border-red-600"
                        : "border-gray-300"
                    }`}
                  >
                    <img
                      src={color.colorImage}
                      className="w-14 h-14 object-contain"
                      alt=""
                    />
                  </button>
                ))}
              </div>
              <p className="mt-3 capitalize font-medium">
                {product.colors[selectedColor].colorName}
              </p>
            </div>
            <div className="flex justify-between border-b pb-3">
              <span className="text-gray-500">Бренд</span>
              <span>{product.brand}</span>
            </div>
            <div className="flex justify-between border-b pb-3">
              <span className="text-gray-500">Память</span>
              <span>{product.memory}</span>
            </div>
            <div className="flex justify-between border-b pb-3">
              <span className="text-gray-500">Категория</span>
              <span>{product.type}</span>
            </div>
            <div className="flex justify-between border-b pb-3">
              <span className="text-gray-500">Рейтинг</span>
              <span>{product.rating}</span>
            </div>
          </div>
        </div>
        <div className="">
          <div className="border rounded-3xl p-6 lg:sticky lg:top-28">
            <p className="text-gray-500 text-sm">Цена</p>
            <div className="flex items-center gap-3 mt-2 flex-wrap">
              <h2 className="text-3xl lg:text-4xl font-bold text-red-600">
                {product.price.toLocaleString("ru-RU")} сум
              </h2>
              <span className="bg-red-600 text-white rounded-lg px-3 py-1 text-sm">
                -{discount}%
              </span>
            </div>
            <p className="line-through text-gray-400 text-lg mt-2">
              {product.old_price.toLocaleString("ru-RU")} сум
            </p>
            <div className="mt-8">
              <p className="font-semibold mb-4">Рассрочка</p>
              <div className="grid grid-cols-5 gap-2">
                {[24, 18, 12, 6, 3].map((item) => (
                  <button
                    key={item}
                    onClick={() => setMonth(item)}
                    className={`rounded-xl py-3 border transition-all duration-300 cursor-pointer
                    ${
                      month === item
                        ? "bg-red-600 text-white border-red-600"
                        : "hover:border-red-600"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
            <div className="bg-yellow-100 rounded-2xl mt-8 p-5">
              <p className="text-gray-500">Ежемесячный платеж</p>
              <h2 className="text-2xl lg:text-3xl font-bold mt-2">
                {monthlyPayment.toLocaleString("ru-RU")} сум
              </h2>
              <p className="text-gray-600 mt-1">× {month} месяцев</p>
            </div>
            <div className="flex flex-col gap-3 mt-8">
              <button className="bg-red-600 hover:bg-red-700 transition-all duration-300 text-white rounded-2xl py-4 font-semibold cursor-pointer">
                Купить в рассрочку
              </button>
              <button className="border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition-all duration-300 rounded-2xl py-4 font-semibold cursor-pointer">
                Добавить в корзину
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductPage
