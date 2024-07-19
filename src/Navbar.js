import React, { useState } from "react";

const NavbarComponent = () => {
  const [searchText, setSearchText] = useState("");

  const handleSearch = (e) => {
    setSearchText(e.target.value);
    console.log("جستجو: ", searchText);
  };

  return (
    <nav
      style={{
        backgroundColor: "#D33300",
        padding: "10px",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <div style={{ width: "50px", height: "50px" }}>
          {
            <img
              src={require("./images/logo.png")}
              alt="Sabalan-Logo"
              class="logo"
              width="190"
              height="60"
            />
          }
        </div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flex: 1,
          justifyContent: "flex-end",
        }}
      >
        <div
          style={{
            marginRight: "10px",
            borderRadius: "25px",
            backgroundColor: "#fff",
            overflow: "hidden",
          }}
        >
          <input
            type="text"
            placeholder="Search"
            style={{
              width: "150px",
              height: "30px",
              border: "none",
              padding: "5px 15px",
              background: "transparent",
              outline: "none",
            }}
            onChange={handleSearch}
            value={searchText}
          />
        </div>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div style={{ marginRight: "10px", cursor: "pointer" }}>
          <span>Q&A</span>
        </div>
        <div style={{ marginRight: "10px", cursor: "pointer" }}>
          <span>Announcement</span>
        </div>
        <div style={{ marginRight: "10px", cursor: "pointer" }}>
          <span>Profile</span>
        </div>
      </div>
    </nav>
  );
};

export default NavbarComponent;
