import React, { useEffect, useState } from "react";
import styles from "./Footer.module.css";
import { AiFillFacebook } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { Link } from "react-router-dom";
import { fetchData } from "../Api";

const Footer = () => {
  const [Data, setData] = useState([]);
  const applestore =
    "https://staging.haavoo.com/assets/images/app-store-button.png";
  const playstore =
    "https://staging.haavoo.com/assets/images/google-play-button.png";
  const mobileImg =
    "https://staging.haavoo.com/assets/images/footer-mobile-app.png";

  const getData = async () => {
    const data = await fetchData('category')
    console.log(data);
    setData(data);
  };
  useEffect(() => getData(), []);
  return (
    <>
      <div className={styles.footer}>
        <div className={styles.main}>
          <div className={styles.keepInTouch}>
            <h2>KEEP IN TOUCH</h2>
            <div className={styles.socialLinks}>
              <AiFillFacebook />
              <AiOutlineTwitter />
              <AiFillYoutube />
              <AiFillLinkedin />
              <AiFillInstagram />
            </div>
            <div className={styles.download}>
              <img
                src={applestore}
                alt="appleStore"
                className={styles.downloadImgs}
              />
              <img
                src={playstore}
                alt="appleStore"
                className={styles.downloadImgs}
              />
            </div>
            <div className={styles.usefullLinks}>
              <Link to="/contact">Contact Us</Link>
              <Link to="/about">About Us</Link>
              <Link to="/policy">Privacy Policy</Link>
              <Link to="/terms">Terms and Condition</Link>
            </div>
          </div>
          <div className={styles.ListingCategory}>
            <h2>LISTING BY CATEGORIES</h2>
            <div className={styles.ListingCategoryLinks}>
              {Data.data?.map((category) => {
                return <p key={category.id} >{category.name}</p>;
              })}
            </div>
          </div>
          <div className={styles.phone}>
            <h2>BOOK PROFESIONALS FROM YOUR PHONE</h2>
            <div className={styles.ListingCategoryLinks}>
              <img src={mobileImg} alt="mobile" />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.allRights}>
        <div className={styles.reserveRights}>
          <p>Copyright © 2022 Haavoo. All Rights Reserved.</p>
          <p>Designed and developed by tarkashilpa.com</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
