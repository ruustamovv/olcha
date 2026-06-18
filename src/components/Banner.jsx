import React, { useEffect, useState } from "react"

function Banner() {
  const [banners, setBanners] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    fetch("https://6c17cdd241beda19.mokky.dev/banners").then((request) =>
      request.json().then((response) => setBanners(response)),
    )
  }, [])

  const goNext = () => {
    if (currentIndex === banners.length - 1) {
      setCurrentIndex(0)
    } else {
      setCurrentIndex(currentIndex + 1)
    }
  }

  const goBack = () => {
    if (currentIndex === 0) {
      setCurrentIndex(banners.length - 1)
    } else {
      setCurrentIndex(currentIndex - 1)
    }
  }

  return (
    <div className="relative max-lg:aspect-10/3 aspect-12/3 flex overflow-hidden rounded-3xl">
      <button
        onClick={() => {
          goBack()
        }}
        className="flex absolute cursor-pointer left-2 top-1/2 -translate-y-1/2"
      >
        left
      </button>
      {banners.length > 0 && (
        <img
          className="object-cover w-full rounded-3xl"
          src={banners[currentIndex].img}
          alt=""
        />
      )}
      <button
        onClick={() => {
          goNext()
        }}
        className="flex absolute cursor-pointer right-2 top-1/2 -translate-y-1/2"
      >
        right
      </button>
    </div>
  )
}

export default Banner
