import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import styles from "../App.module.css";

function Layout() {
  const getNavLinkClass = ({ isActive }) => {
    const commonClasses =
      "block rounded-lg p-3 font-semibold transition-colors duration-200";
    if (isActive) {
      return `${commonClasses} bg-gray-700 text-white`;
    }
    return `${commonClasses} text-gray-300 hover:bg-gray-700 hover:text-white`;
  };

  return (
    <div className={styles.container}>
      <aside className={styles.sidebar}>
        <h1 className="text-2xl font-bold mb-6">Estúdio Criativo</h1>
        <nav>
          <ul>
            <li className="mb-3">
              <NavLink to="/personagens" className={getNavLinkClass}>
                Personagens
              </NavLink>
            </li>
            <li className="mb-3">
              <NavLink to="/ideias" className={getNavLinkClass}>
                Painel de Ideias
              </NavLink>
            </li>
            <li className="mb-3">
              <NavLink to="#" className={getNavLinkClass}>
                Estrutura de Roteiro
              </NavLink>
            </li>
            <li className="mb-3">
              <NavLink to="#" className={getNavLinkClass}>
                Editor Focado
              </NavLink>
            </li>
          </ul>
        </nav>
      </aside>
      <main className={styles.container}>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
