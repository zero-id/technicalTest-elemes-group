import React from "react";
import Logo from "../assets/img/elemesgroup.png";

export default function NavbarComponenet() {
  return (
    <div className="container container-nav">
      <header className="d-flex  bg-white px-2 container fixed-top flex-wrap align-items-center justify-content-md-between py-3 mb-4 border-bottom">
        <div className="col-md-3 ps-1 mb-md-0">
          <a
            href="#"
            className="d-inline-flex link-body-emphasis text-decoration-none"
          >
            <img className="imgnav" src={Logo} alt="" />
          </a>
        </div>

        <ul className="item-hidden nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <li>
            <a
              href="#"
              className="nav-link color-font-grey text-hover text-secondary px-2"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="nav-link color-font-grey text-hover text-secondary px-2"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#"
              className="nav-link position-relative text-hover color-font-grey  text-secondary px-2"
            >
              Promotions
              <span class="position-absolute top-0 translate-middle badge rounded-pill bg-danger">
                Hot
                <span class="visually-hidden">unread messages</span>
              </span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="nav-link color-font-grey text-hover text-secondary px-2"
            >
              Blogs
            </a>
          </li>
          <li>
            <a
              href="#"
              className="nav-link color-font-grey text-hover text-secondary px-2"
            >
              Contact Us
            </a>
          </li>
        </ul>

        <div className="col-md-3 selector-for-some-widget pe-1 text-end">
          <button type="button" className="btn text-hover item-hidden me-2">
            Masuk
          </button>
          <button
            type="button"
            className="border-0 px-3 py-2 rounded-3 main-color-bg text-white"
          >
            Daftar Sekarang
          </button>
        </div>
      </header>
    </div>
  );
}
