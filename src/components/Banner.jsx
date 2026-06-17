import React, { useEffect, useState } from "react"

function Banner() {
  const [banners, setBanners] = useState([])
  const [swiper, setSwiper] = useState(null)

  useEffect(() => {
    fetch("https://6c17cdd241beda19.mokky.dev/banners").then((request) =>
      request.json().then((response) => setBanners(response)),
    )
  }, [])

  return (
    <div className="max-lg:aspect-10/3 aspect-12/3 flex overflow-hidden rounded-3xl">
      {banners.length > 0 && (
        <img
          className="object-cover w-full rounded-3xl"
          src={banners[0].img}
          key={banners[0].id}
          alt=""
        />
      )}
    </div>
  )
}

export default Banner
