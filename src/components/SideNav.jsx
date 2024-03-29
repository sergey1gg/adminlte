import React from 'react'
import { useNavigate } from 'react-router-dom'

export const SideNav = () => {
    const navigate=useNavigate()
  return (
    <div>
<aside className="main-sidebar sidebar-dark-primary elevation-4">
  {/* Brand Logo */}
  <a onClick={()=> navigate("/")} className="brand-link">
    <img src="/dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{opacity: '.8'}} />
    <span className="brand-text font-weight-light">AdminLTE 3</span>
  </a>
  {/* Sidebar */}
  <div className="sidebar">
    {/* Sidebar user panel (optional) */}
    <div className="user-panel mt-3 pb-3 mb-3 d-flex">
      <div className="image">
        <img src="/dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image" />
      </div>
      <div className="info">
        <a href="#" className="d-block">Alexander Pierce</a>
      </div>
    </div>
    {/* Sidebar Menu */}
    <nav className="mt-2">
      <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
        {/* Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library */}
        
        <li className="nav-item">
          <a onClick={()=> {navigate("/kiosks")}} className="nav-link">
            <i className="nav-icon fas fa-home" />
            <p>
              Киоски
            </p>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link">
            <i className="nav-icon fas fa-book" />
            <p>
              Мультимедиа
            </p>
          </a>
        </li>
        <li className="nav-item">
        <a onClick={()=> {navigate("/menu")}} className="nav-link">
            <i className="nav-icon fas fa-coffee" />
            <p>
              Меню
            </p>
          </a>
        </li>
        <li className="nav-item has-treeview">
          <a className="nav-link">
            <i className="nav-icon fas fa-users" />
            <p>
              Рецепты
              <i className="fas fa-angle-left right" />
            </p>
          </a>
          <ul className="nav nav-treeview">
            <li className="nav-item">
              <a  className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>Top Navigation</p>
              </a>
            </li>
          </ul>
        </li>
        <li className="nav-item has-treeview">
          <a className="nav-link">
            <i className="nav-icon fas fa-chart-pie" />
            <p>
              Отчеты
              <i className="right fas fa-angle-left" />
            </p>
          </a>
          <ul className="nav nav-treeview">
            <li className="nav-item">
              <a className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>ChartJS</p>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>Flot</p>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>Inline</p>
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
    {/* /.sidebar-menu */}
  </div>
  {/* /.sidebar */}
</aside>

    </div>
  )
}


