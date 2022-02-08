import React, { useEffect, useState } from "react";
import styles from "./BusinessList.module.css";
import Pagination from "./UI/Pagination";

const BusinessList = ({ selectedSorting }) => {
  const [selectedTab, setSelectedTab] = useState("business");
  const [businessesList, setBusinessesList] = useState({});
  const [activePage, setActivePage] = useState({});

  const fetchBusinesses = async () => {
    const res = await fetch(
      `https://staging.admin.haavoo.com/api/${selectedTab}?city=kozhikode&area=&search_query=&page=${activePage}&type=&category=&sort=${selectedSorting}&lat=19.1837266&lng=73.0424465`
    );
    const businesses = await res.json();
    setBusinessesList(businesses);
  };
  useEffect(
    () => fetchBusinesses(),
    [selectedTab, selectedSorting, activePage]
  );

  console.log(businessesList, "business list");
  const list = Array.isArray(businessesList.data)
    ? businessesList.data
    : businessesList.data && businessesList.data.data;

  return (
    <div>
      <div className={styles.tabs}>
        <p
          className={`${styles.businessTab}
            ${selectedTab === "business" && styles.effectedTab}`}
          onClick={() => setSelectedTab("business")}
        >
          Business
        </p>
        <p
          className={`${styles.dealsTab}
      ${selectedTab === "deals" && styles.effectedTab}`}
          onClick={() => setSelectedTab("deals")}
        >
          Deals
        </p>
      </div>
      <div className={styles.allBusinessLists}>
        {(list || []).map((business) => {
          return (
            <div className={styles.allBusinessList} key={business.id}>
              <div className={styles.businessImg}>
                <img
                  src="https://staging.haavoo.com/assets/images/placeholder.jpg"
                  alt="https://staging.haavoo.com/assets/images/placeholder.jpg"
                />
              </div>
              <div className={styles.descriptions}>
                <h3>{business.business_name}</h3>
                <h4>
                  Category :{" "}
                  <span style={{ color: "#636363", fontWeight: "500" }}>
                    {business.categories[0].name}
                  </span>{" "}
                </h4>
                <h4>
                  Area :{" "}
                  <span style={{ color: "#636363", fontWeight: "500" }}>
                    {business.areas[0].name}
                  </span>{" "}
                </h4>
                <p
                  style={{ color: "#636363" }}
                  dangerouslySetInnerHTML={{
                    __html: business.description.slice(3, 105).concat("..."),
                  }}
                />
                <button className={styles.detailBtn}>
                  {" "}
                  Show the Contact Details
                </button>
              </div>
            </div>
          );
        })}
        {(list || []).length === 0 && <p>not found</p>}
      </div>
      {Object.keys(businessesList).length > 0 && (
        <div className={styles.pageNumbers}>
          <p>
            Showing page 1 of{" "}
            {Math.ceil(
              businessesList.data.total / businessesList.data.per_page
            )}
          </p>
          <div>
            <Pagination
              itemsPerPage={businessesList.data.per_page}
              total={businessesList.data.total}
              setActivePage={setActivePage}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default BusinessList;
