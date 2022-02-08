import React, { useEffect, useState } from "react";
import { BsArrowDownUp } from "react-icons/bs";
import { AiFillCaretDown } from "react-icons/ai";
import { AiOutlineDown } from "react-icons/ai";

import styles from "./Home.module.css";
import BusinessList from "./BusinessList";

const Home = () => {
  const [showSorting, setShowSorting] = useState(false);
  const [selectedSorting, setSelectedSorting] = useState("relavance");
  //   const sendSelectedSorting = useStoreActions((state) => state.value)
  //   useEffect(() => sendSelectedSorting(selectedSorting))

  return (
    <div className={styles.home}>
      <div style={{ position: "relative" }}>
        <div className={styles.sortby}>
          {" "}
          <button
            className={styles.sortbyBtn}
            onClick={() => setShowSorting(!showSorting)}
          >
            <BsArrowDownUp /> <span>Sort By</span>
            <AiFillCaretDown />{" "}
          </button>
        </div>
        {showSorting && (
          <div className={styles.sortingOptions}>
            <p
              onClick={() => setSelectedSorting("relavance")}
              className={
                selectedSorting === "relavance" && styles.effectedSorting
              }
            >
              Relavance
            </p>
            <p
              onClick={() => setSelectedSorting("popularity")}
              className={
                selectedSorting === "popularity" && styles.effectedSorting
              }
            >
              Popularity
            </p>
            <p
              onClick={() => setSelectedSorting("distance")}
              className={
                selectedSorting === "distance" && styles.effectedSorting
              }
            >
              Distance
            </p>
          </div>
        )}
      </div>
      <div className={styles.filtersBusiness}>
        <div className={styles.allFilters}>
          <div className={styles.filterContainer}>
            <h3 className={styles.filterTitle}>Type Business</h3>
            <div className={styles.containerItem}>
              <p>
                {" "}
                <input type="checkbox" /> <span>Individual</span>
              </p>
              <p>
                {" "}
                <input type="checkbox" /> <span>Shop/Office</span>
              </p>
            </div>
          </div>
          <div className={styles.filterContainer}>
            <h3 className={styles.filterTitle}>Category</h3>
            <div className={styles.containerItem}>
              <div className={styles.businessCategory}>
                <p>
                  <input type="checkbox" /> <span>Consulting</span>
                </p>
                <p>
                  {" "}
                  <AiOutlineDown />
                </p>
              </div>
            </div>
          </div>
          {/* Area */}
          <div className={styles.filterContainer}>
            <h3 className={styles.filterTitle}>Area</h3>
            <div className={styles.containerItem}>
              <p>
                {" "}
                <input type="checkbox" /> <span>Abhayagiri</span>
              </p>
            </div>
          </div>
        </div>

        <div className={styles.businessList}>
          <BusinessList selectedSorting={selectedSorting} />
        </div>
      </div>
    </div>
  );
};

export default Home;
