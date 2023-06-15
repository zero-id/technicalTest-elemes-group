import React from "react";
import Logo from "../assets/img/elemesgroup.png";
import { MdOutlineMail } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { FiInstagram } from "react-icons/fi";
import hamburgerMenuIcon from "../assets/img/hamburger-menu.svg"

export default function FooterComponent() {
  return (
    <div className="container mt-5 pt-5">
      <footer className="row py-5 my-5 footer-desktop">
        <div className="col-4 mb-3">
          <a
            href="/"
            className="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none"
          >
            <img src={Logo} alt="" />
          </a>
          <p className="text-body-secondary">
            Jl. Prof. DR. Satrio No.7, RT.3/RW.3, Karet Kuningan, Kecamatan
            Setiabudi, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12950
          </p>
          <div className="d-flex gap-3">
            <span className="span-icon">
              <MdOutlineMail className="main-color icon" />
            </span>
            <span className="span-icon">
              <IoCallOutline className="main-color icon" />
            </span>
            <span className="span-icon">
              <FiInstagram className="main-color icon" />
            </span>
          </div>
        </div>

       

        <div className="col-2 ps-4 mb-3">
          <h5>Categories</h5>
          <ul className="nav flex-column">
            <br />
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-body-secondary">
                Cupcake
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-body-secondary">
                Pizza
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-body-secondary">
                Kebab
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-body-secondary">
                Salmon
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-body-secondary">
                Dougnut
              </a>
            </li>
          </ul>
        </div>

        <div className="col-2 mb-3">
          <h5>About Us</h5>
          <ul className="nav flex-column">
            <br />
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-body-secondary">
                About Us
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-body-secondary">
                Faq
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-body-secondary">
                Report Problem
              </a>
            </li>
          </ul>
        </div>

        <div className="col-3 mb-3">
          <h5>Newslatter</h5>
          <ul className="nav flex-column">
            <br />
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-body-secondary">
                Get now free 50% discount for all product on your first order
              </a>
            </li>
            <li className="nav-item mb-2">
              <a  className="nav-link p-0 text-body-secondary">
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your email address"
                    aria-label="Recipient's username"
                    aria-describedby="button-addon2"
                  />
                  <button
                    className="border-0 px-3 py-1 rounded-end main-color-bg text-white shadow main-color-bg text-white"
                    type="button"
                    id="button-addon2"
                  >
                    SEND
                  </button>
                </div>
              </a>
            </li>
            <li className="nav-item mb-2">
              <a
                href="#"
                className="nav-link fw-semibold p-0 text-body-secondary"
              >
                <MdOutlineMail
                  style={{ width: "30px", height: "30px" }}
                  className="main-color"
                />
                elemesid@gmail.com
              </a>
            </li>
            <li className="nav-item mb-2">
              <a
                href="#"
                className="nav-link fw-semibold p-0 text-body-secondary"
              >
                <IoCallOutline
                  style={{ width: "30px", height: "30px" }}
                  className="main-color"
                />
                0888 1111 2222
              </a>
            </li>
          </ul>
        </div>
      </footer>
      <p className="text-center">© 2021 Elemes id. All rights reserved</p>
      
      <footer className="footer-mobile d-none">
        <ul className="d-flex  mb-0 p-0 pt-3 px-3 w-100 align-items-center justify-content-between">
        {["Home", "Promotions", "Others"].map((item, index) => (
          <li
            key={`footer-link-item-${index}`}
            className="d-flex flex-column align-items-center gap-2"
          >
            <a href="#" className="border-0">
              <img src={hamburgerMenuIcon} alt="Hamburger Menu Icon" />
            </a>
            <p className="">{item}</p>
          </li>
        ))}
      </ul>
      </footer>
    </div>
  );
}
