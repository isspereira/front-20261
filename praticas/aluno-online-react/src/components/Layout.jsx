import "./Layout.css";
import Sidebar from "./Sidebar";
import Header from "./Header";

function Layout({ titulo, subtitulo, children }) {
  return (
    <div className="layout">
      <Sidebar />

      <main className="layout-main">
        <Header titulo={titulo} />
        <h2 className="layout-subtitulo">{subtitulo}</h2>

        <section className="layout-content">
          {children}
        </section>
      </main>
    </div>
  );
}

export default Layout;