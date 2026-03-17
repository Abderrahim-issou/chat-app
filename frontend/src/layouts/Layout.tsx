import { Outlet } from "react-router-dom"
import Header from "../components/header/Header"







const Layout = () => {
  return (
    <div className="h-screen flex flex-col overflow-hidden no-scrollbar">
        <Header />

        <main className="flex-1 flex border-r overflow-y-auto overflow-x-hidden no-scrollbar">
            <Outlet/>
        </main>
    </div>
  )
}

export default Layout