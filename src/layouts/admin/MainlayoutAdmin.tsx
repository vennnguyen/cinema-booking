import { Outlet } from "react-router-dom"
import Header from "./header"
import Sidebar from "./sidebar"


const MainlayoutAdmin = () => {
  return (
    <div className="flex">
      <Sidebar/>
      <div className="flex-1 flex flex-col min-w-0">
        <Header/>
       <main className="flex-1 p-6 bg-gray-50">
          <Outlet/>
        </main>
      </div>
    </div>
  )
}

export default MainlayoutAdmin
