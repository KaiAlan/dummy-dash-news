import {  Outlet } from "react-router-dom"

const App = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen w-full">

      <nav>

      </nav>

      <Outlet />

    </div>
  )
}

export default App