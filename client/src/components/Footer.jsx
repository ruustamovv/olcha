import { Link } from "react-router"

function Footer() {
  return (
    <footer className="bg-black w-full text-white max-lg:pb-10">
      <div className="container mx-auto max-xl:max-w-7xl px-5 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2">
            <Link to="/" className="text-5xl font-black text-red-600">
              olcha
            </Link>

            <p className="text-gray-400 mt-6 leading-7 max-w-md">
              Интернет-магазин электроники, бытовой техники и гаджетов. Тысячи
              товаров по выгодным ценам с доставкой по всему Узбекистану.
            </p>
          </div>

          <div>
            <h2 className="font-bold text-lg mb-5">Каталог</h2>

            <div className="flex flex-col gap-3 text-gray-400">
              <Link className="hover:text-red-500 transition">Смартфоны</Link>
              <Link className="hover:text-red-500 transition">Ноутбуки</Link>
              <Link className="hover:text-red-500 transition">Телевизоры</Link>
              <Link className="hover:text-red-500 transition">Планшеты</Link>
              <Link className="hover:text-red-500 transition">
                Бытовая техника
              </Link>
            </div>
          </div>

          <div>
            <h2 className="font-bold text-lg mb-5">Покупателям</h2>
            <div className="flex flex-col gap-3 text-gray-400">
              <Link className="hover:text-red-500 transition">Доставка</Link>
              <Link className="hover:text-red-500 transition">Оплата</Link>
              <Link className="hover:text-red-500 transition">Гарантия</Link>
              <Link className="hover:text-red-500 transition">Рассрочка</Link>
              <Link className="hover:text-red-500 transition">Контакты</Link>
            </div>
          </div>

          <div>
            <h2 className="font-bold text-lg mb-5">Контакты</h2>
            <div className="space-y-3 text-gray-400">
              <p>📞 +998 71 202-20-21</p>
              <p>📧 info@olcha.uz</p>
              <p>📍 Ташкент, Узбекистан</p>
              <p>⏰ 09:00 - 21:00</p>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 my-10"></div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-5">
          <p className="text-gray-500 text-center md:text-left">
            © {new Date().getFullYear()} Olcha. Все права защищены.
          </p>
          <div className="flex items-center gap-6 text-gray-400">
            <Link className="hover:text-red-500 transition">Telegram</Link>
            <Link className="hover:text-red-500 transition">Instagram</Link>
            <Link className="hover:text-red-500 transition">YouTube</Link>
            <Link className="hover:text-red-500 transition">Facebook</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
