import React, { useEffect, useState } from "react";
import styles from "./Searchbar.module.css";
import { AiFillCaretDown } from "react-icons/ai";
import { AiFillCaretUp } from "react-icons/ai";

import { BsSearch } from "react-icons/bs";

const Searchbar = () => {
  const [datas, setData] = useState([]);
  const [showAreaOption, setShowAreaOption] = useState(false);
  const fetchData = async () => {
    const res = await fetch(
      `https://staging.admin.haavoo.com/api/area?city=kozhikode`
    );
    const allArea = await res.json();
    setData(allArea);
  };
  console.log(datas);
  useEffect(() => fetchData(), []);
  return (
    <div style={{ position: "relative" }}>
      <div className={styles.center}>
        <div className={styles.searchFilter}>
          <div
            className={styles.filter}
            onClick={() => setShowAreaOption(!showAreaOption)}
          >
            <p>Any Area </p>
            {showAreaOption ? <AiFillCaretUp /> : <AiFillCaretDown />}
          </div>

          <div className={styles.search}>
            <input
              className={styles.searchInput}
              type="text"
              placeholder="Search For Anything"
            />
            <BsSearch className={styles.searchIcon} />
          </div>
        </div>
      </div>
      {showAreaOption && (
        <div className={styles.filterOptions}>
          {datas.data?.map((area) => {
            return (
              <p key={area.id} className={styles.area}>
                <input type="checkbox" /> <span>{area.name}</span>{" "}
              </p>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Searchbar;
