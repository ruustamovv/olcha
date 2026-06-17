import React from "react"
import { Route, Routes } from "react-router"
import { routes } from "./routes/routes"
import Header from "./components/Header"
import Footer from "./components/Footer"

function App() {
  return (
    <>
      <Header />
      <main className="pt-30 max-lg:pt-42 pb-10 container mx-auto transition-all duration-300 ease-in-out max-xl:max-w-7xl">
        <Routes>
          {routes.map((route) => {
            return (
              <Route
                key={route.path}
                path={route.path}
                element={route.element}
              />
            )
          })}
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
