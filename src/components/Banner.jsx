import React, { useEffect, useState } from "react"
import LeftIcon from "../assets/icons/LeftIcon"
import RightIcon from "../assets/icons/RightIcon"

function Banner() {
  const [banners, setBanners] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    fetch("https://6c17cdd241beda19.mokky.dev/banners").then((request) =>
      request.json().then((response) => setBanners(response))
    )
  }, [])

  const goNext = () => {
    setCurrentIndex(currentIndex === banners.length - 1 ? 0 : currentIndex + 1)
  }

  const goBack = () => {
    setCurrentIndex(currentIndex === 0 ? banners.length - 1 : currentIndex - 1)
  }

  return (
    <div className="relative overflow-hidden max-lg:aspect-10/3 flex aspect-12/3 rounded-3xl">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {banners.map((banner) => {
          return (
            <div className="shrink-0 w-full rounded-3xl" key={banner.id}>
              <img
                className="object-cover h-full w-full"
                src={banner.img}
                alt=""
              />
            </div>
          )
        })}
      </div>

      <button
        onClick={() => {
          goBack()
        }}
        className="group rounded-3xl absolute h-full transition-all duration-400 ease-in-out hover:bg-black/5 hover:backdrop-blur-xs cursor-pointer left-0 w-20 flex justify-center items-center  text-white"
      >
        <LeftIcon />
      </button>

      <button
        onClick={() => {
          goNext()
        }}
        className="group rounded-3xl absolute h-full transition-all duration-400 ease-in-out hover:bg-black/5 hover:backdrop-blur-xs cursor-pointer right-0 w-20 flex justify-center items-center text-white"
      >
        <RightIcon />
      </button>
    </div>
  )
}

export default Banner
