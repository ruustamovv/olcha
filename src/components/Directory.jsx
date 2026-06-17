import React from "react"
import MenuIcon from "../assets/icons/MenuIcon"

function Directory() {
  return (
    <div className="group max-lg:px-1.5 max-lg:py-1 transition-all duration-300 ease-in-out cursor-pointer hover:border-red-600 hover:text-red-600 border-2 flex justify-between items-center px-6 rounded-xl py-2 gap-2">
      <MenuIcon />
      <div className="max-lg:hidden">
        <p className="text-lg">Каталог</p>
      </div>
    </div>
  )
}

export default Directory
