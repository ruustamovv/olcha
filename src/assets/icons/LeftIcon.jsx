import * as React from "react"
const LeftIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={50}
    height={50}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke="#fff"
      className="group-hover:stroke-red-600 transition-all duration-400 ease-in-out"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m15 7-5 5 5 5"
    />
  </svg>
)
export default LeftIcon
