import React, { useState, useEffect, useRef } from "react";
import getROUTES from "./routes";

const menuItems = [
  {
    title: "Dashboard",
    subItems: ["subItem1"]
  },
  {
    title: "Network",
    subItems: [
      "Interfaces",
      "DNS",
      //  'DNS Servers',
      //  'IPAM',
      //  'Explicit Proxy',
      //  'SD-WAN',
      "Static Routes",
      "Policy Routes",
      //  'RIP',
      //  'OSPF',
      //  'BGP',
      //  'Routing Objects',
      //  'Multicast',
      //  'Diganostics',
    ],
  },
  {
    title: "Policy & objects",
    subItems: ["subItem1"],
  },
  {
    title: "Security Profiles",
    subItems: ["subItem1"],
  },
  {
    title: "VPN",
    subItems: ["subItem1"],
  },
  {
    title: "User & Authentication",
    subItems: ["subItem1"],
  },
  {
    title: "WiFi & Switch Controller",
    subItems: ["subItem1"],
  },
  {
    title: "System",
    subItems: ["subItem1"],
  },
  {
    title: "Security Fabric",
    subItems: ["subItem1"],
  },
  {
    title: "Log & Report",
    subItems: ["subItem1"],
  },
];

const Menu = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [activeSubItem, setActiveSubItem] = useState(null);
  const menuRef = useRef(null);

  const handleMenuItemClick = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
      setActiveSubItem(null);
    } else {
      setActiveIndex(index);
    }
  };

  const handleSubItemClick = (subItem, route) => {
    localStorage.setItem("activeSubItem", subItem);
    setActiveSubItem(subItem);
    window.location.href = route;
  };

  useEffect(() => {
    const menuElement = menuRef.current;

    if (menuElement) {
      menuElement.addEventListener("scroll", handleMenuScroll);
    }

    const storedActiveSubItem = localStorage.getItem("activeSubItem");
      if (storedActiveSubItem) {
      setActiveSubItem(storedActiveSubItem);
    }

    return () => {
      if (menuElement) {
        menuElement.removeEventListener("scroll", handleMenuScroll);
      }
    };
  }, []);

  const handleMenuScroll = () => {
    const menuElement = menuRef.current;

    if (menuElement) {
      if (menuElement.scrollHeight > menuElement.clientHeight) {
        menuElement.classList.add("scrollable");
      } else {
        menuElement.classList.remove("scrollable");
      }
    }
  };

  return (
    <div
      className={`menu ${activeIndex !== null ? "active" : ""}`}
      ref={menuRef}
    >
      {menuItems.map((item, index) => (
        <div
          key={index}
          className={`menu-item ${activeIndex === index ? "active" : ""}`}
          onClick={() => handleMenuItemClick(index)}
        >
          <div className="title">{item.title}</div>
          {activeIndex === index && (
            <div className="sub-menu">
              {item.subItems.map((subItem, subIndex) => (
                <React.Fragment key={subIndex}>
                  {subIndex > 0 && <hr className="sub-item-divider" />}
                  <div
                    className={`sub-item ${
                      activeSubItem === subItem ? "active-subitem" : ""
                    }`}
                    onClick={() =>
                      handleSubItemClick(
                        subItem,
                        getROUTES(
                          item.title.toString() + "_" + subItem.toString()
                        )
                      )
                    }
                  >
                    {subItem}
                  </div>
                </React.Fragment>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Menu;