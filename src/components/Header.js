import React, { useEffect, useState } from "react";
import { ImLocation } from "react-icons/im";
import { AiFillCaretDown } from "react-icons/ai";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import Searchbar from "./UI/Searchbar";

const Header = () => {
  const [datas, setDatas] = useState([]);
  const logo = "https://staging.haavoo.com/assets/images/logo.png";
  const headerBackground =
    "https://staging.haavoo.com/header-background.5b19a4542801c85a8251.jpg";

  const fetchData = async () => {
    const res = await fetch(`https://staging.admin.haavoo.com/api/city`);
    const data = await res.json();
    setDatas(data);
  };
  useEffect(()=>fetchData(),[])
  return (
    <>
      <div className={styles.header}>
        <div className={styles.upperHeadingSectionBlack}></div>
        <div className={styles.upperHeadingSection}>
          <div className={styles.contacLocation}>
            <p>Customer Care : +919074797177</p>
            <div className={styles.location}>
              <ImLocation /> <p>select Location</p>
              <button className={styles.selectLocation}>
                <p>kozhikode</p>
                <span>
                  <AiFillCaretDown />
                </span>
              </button>
            </div>
          </div>
          <nav className={styles.navbar}>
            <img src={logo} alt="logo" />
            <div className={styles.regidterLoginBtns}>
              <div className={styles.pageLinks}>
                <Link to="/">Home</Link>
                <span>|</span>
                <Link to="/about">About US</Link>
                <span>|</span>

                <Link to="/contact">Contact Us</Link>
              </div>
              <button
                className={styles.actions}
                style={{ background: "#ff9000" }}
              >
                Register My Business
              </button>
              <button
                className={styles.actions}
                style={{ background: "#e51c1c" }}
              >
                Login/Sign Up{" "}
                <span>
                  <AiFillCaretDown />
                </span>
              </button>
            </div>
          </nav>
        </div>
        <img
          className={styles.headerBackgroundImg}
          src={headerBackground}
          alt="headerBackground"
        />
      </div>
      <Searchbar />
    </>
  );
};

export default Header;
