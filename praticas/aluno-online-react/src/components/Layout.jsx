import { Outlet } from "react-router-dom";

import "./Layout.css";
import Sidebar from "./Sidebar";
import Header from "./Header";

function Layout() {
function Layout() {
  return (
    <div className="layout">
      <Sidebar />

      <main className="layout-main">
        <Header />

        <section className="layout-content">
          <Outlet />
        </section>
      </main>
    </div>
  )
}

export default Layout