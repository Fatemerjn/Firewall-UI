import React, { useState, useMemo } from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import CreateTable from "./Table_Interfaces";
import axios from 'axios';


const ViewInterfaces = () => {
  const getPortInfo = (portName) => {
    const portInfo = {
      MGMT1: "MGMT1",
      MGMT2: "MGMT2",
      HA1: "HA1",
      HA2: "HA2",
      "1": "1",
      "2": "2",
      "3": "3",
      "4": "Connected",
      "5": "5",
      "6": "6",
      "7": "7",
      "8": "8",
      "9": "9",
      "10": "10",
      "11": "11",
      "12": "12",
      "13": "13",
      "14": "14",
      "15": "15",
      "16": "16",
      "17": "17",
      "18": "18",
      "19": "19",
      "20": "20",
      "21": "21",
      "22": "22",
      "23": "23",
      "24": "24",
      "25": "25",
      "26": "26",
      "27": "27",
      "28": "28",
      "29": "29",
      "30": "30",
      "31": "31",
      "32": "32",
      "33": "33",
      "34": "34",
      "35": "Connected",
      "36": "Connected",
      "37": "37",
      "38": "38",
      "39": "39",
      "40": "40",
    };

    return portInfo[portName] || "اطلاعات برای این پورت موجود نیست.";
  };

  const columns = useMemo(
    () => [
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "Type",
        accessor: "type",
      },
      {
        Header: "Members",
        accessor: "members",
      },
      {
        Header: "IP/Netmask",
        accessor: "ipNetmask",
      },
      {
        Header: "Transceiver(s)",
        accessor: "transceivers",
      },
      {
        Header: "Administrative Access",
        accessor: "administrativeAccess",
      },
      {
        Header: "DHCP Clients",
        accessor: "dhcpClients",
      },
      {
        Header: "DHCP Ranges",
        accessor: "dhcpRanges",
      },
      {
        Header: "Ref.",
        accessor: "ref",
      },
    ],
    []
  );

  const [data, setData] = useState([]);
  useMemo(async () => {  //دریافت دیتا از سرور
    try {
      const response = await axios.get('http://localhost:5000/get_interface');
      setData(response.data);
      console.log(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }, []);

  return (
    <div>
      <div style={{ marginLeft: "250px" }}>
        <div
          style={{
            backgroundColor: "#FFFCFC",
            padding: "20px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            style={{
              border: "1px solid black",
              color: "grey",
              fontSize: 12,
              padding: "10px",
              borderRadius: "10px",
              display: "inline-flex",
              height: "80px",
            }}
          >
            <OverlayTrigger
              placement="right"
              overlay={
                <Tooltip
                  style={{
                    backgroundColor: "#F2F2F2",
                    border: "1px solid black",
                    borderRadius: "7px",
                    fontSize: "14px",
                    whiteSpace: "pre-line",
                    padding: "10px",
                  }}
                >
                  {getPortInfo("MGMT1")}
                </Tooltip>
              }
            >
              <div style={{ marginRight: "5px", height: "12px" }}>
                MGMT1
                <br />
                <img
                  src={require("./images/port.png")}
                  style={{
                    backgroundColor: "white",
                    height: "20px",
                    width: "20px",
                    alt: "interface-status",
                    marginLeft: "11px",
                    marginTop: "3px",
                  }}
                />
              </div>
            </OverlayTrigger>
            <OverlayTrigger
              placement="right"
              overlay={
                <Tooltip
                  style={{
                    backgroundColor: "#F2F2F2",
                    border: "1px solid black",
                    borderRadius: "7px",
                    fontSize: "14px",
                    whiteSpace: "pre-line",
                    padding: "10px",
                  }}
                >
                  {getPortInfo("MGMT2")}
                </Tooltip>
              }
            >
              <div style={{ marginRight: "10px", height: "12px" }}>
                MGMT2
                <br />
                <img
                  src={require("./images/port.png")}
                  style={{
                    backgroundColor: "white",
                    height: "20px",
                    width: "20px",
                    alt: "interface-status",
                    marginLeft: "11px",
                    marginTop: "3px",
                  }}
                />
              </div>
            </OverlayTrigger>

            <OverlayTrigger
              placement="right"
              overlay={
                <Tooltip
                  style={{
                    backgroundColor: "#F2F2F2",
                    border: "1px solid black",
                    borderRadius: "7px",
                    fontSize: "14px",
                    whiteSpace: "pre-line",
                    padding: "10px",
                  }}
                >
                  {getPortInfo("HA1")}
                </Tooltip>
              }
            >
              <div style={{ marginRight: "5px", height: "12px" }}>
                HA1
                <br />
                <img
                  src={require("./images/port.png")}
                  style={{
                    backgroundColor: "white",
                    height: "20px",
                    width: "20px",
                    alt: "interface-status",
                    marginLeft: "1px",
                    marginTop: "3px",
                  }}
                />
              </div>
            </OverlayTrigger>
            <OverlayTrigger
              placement="right"
              overlay={
                <Tooltip
                  style={{
                    backgroundColor: "#F2F2F2",
                    border: "1px solid black",
                    borderRadius: "7px",
                    fontSize: "14px",
                    whiteSpace: "pre-line",
                    padding: "10px",
                  }}
                >
                  {getPortInfo("HA2")}
                </Tooltip>
              }
            >
              <div style={{ marginRight: "20px", height: "12px" }}>
                HA2
                <br />
                <img
                  src={require("./images/port.png")}
                  style={{
                    backgroundColor: "white",
                    height: "20px",
                    width: "20px",
                    alt: "interface-status",
                    marginLeft: "1px",
                    marginTop: "3px",
                  }}
                />
              </div>
            </OverlayTrigger>

            <div style={{ marginRight: "13px", height: "12px" }}>
              1<br />
              <OverlayTrigger
                placement="right"
                overlay={
                  <Tooltip
                    style={{
                      backgroundColor: "#F2F2F2",
                      border: "1px solid black",
                      borderRadius: "7px",
                      fontSize: "14px",
                      whiteSpace: "pre-line",
                      padding: "10px",
                    }}
                  >
                    {getPortInfo("1")}
                  </Tooltip>
                }
              >
                <img
                  src={require("./images/port.png")}
                  style={{
                    backgroundColor: "white",
                    height: "20px",
                    width: "20px",
                    alt: "interface-status",
                    marginLeft: "-6px",
                    marginTop: "3px",
                  }}
                />
              </OverlayTrigger>
              <br />
              <OverlayTrigger
                placement="right"
                overlay={
                  <Tooltip
                    style={{
                      backgroundColor: "#F2F2F2",
                      border: "1px solid black",
                      borderRadius: "7px",
                      fontSize: "14px",
                      whiteSpace: "pre-line",
                      padding: "10px",
                    }}
                  >
                    {getPortInfo("2")}
                  </Tooltip>
                }
              >
                <img
                  src={require("./images/port.png")}
                  style={{
                    backgroundColor: "white",
                    height: "20px",
                    width: "20px",
                    alt: "interface-status",
                    marginLeft: "-6px",
                    marginTop: "3px",
                  }}
                />
              </OverlayTrigger>
              <br />2
            </div>

            <div style={{ marginRight: "13px", height: "12px" }}>
              3<br />
              <OverlayTrigger
                placement="right"
                overlay={
                  <Tooltip
                    style={{
                      backgroundColor: "#F2F2F2",
                      border: "1px solid black",
                      borderRadius: "7px",
                      fontSize: "14px",
                      whiteSpace: "pre-line",
                      padding: "10px",
                    }}
                  >
                    {getPortInfo("3")}
                  </Tooltip>
                }
              >
                <img
                  src={require("./images/port.png")}
                  style={{
                    backgroundColor: "white",
                    height: "20px",
                    width: "20px",
                    alt: "interface-status",
                    marginLeft: "-6px",
                    marginTop: "3px",
                  }}
                />
              </OverlayTrigger>
              <br />
              <OverlayTrigger
                placement="right"
                overlay={
                  <Tooltip
                    style={{
                      backgroundColor: "#F2F2F2",
                      border: "1px solid black",
                      borderRadius: "7px",
                      fontSize: "14px",
                      whiteSpace: "pre-line",
                      padding: "10px",
                    }}
                  >
                    {getPortInfo("4")}
                  </Tooltip>
                }
              >
                <img
                  src={require("./images/port.png")}
                  style={{
                    backgroundColor: "lightgreen",
                    height: "20px",
                    width: "20px",
                    alt: "interface-status",
                    marginLeft: "-6px",
                    marginTop: "3px",
                  }}
                />
              </OverlayTrigger>
              <br />4
            </div>

            <div style={{ marginRight: "13px", height: "12px" }}>
              5<br />
              <OverlayTrigger
                placement="right"
                overlay={
                  <Tooltip
                    style={{
                      backgroundColor: "#F2F2F2",
                      border: "1px solid black",
                      borderRadius: "7px",
                      fontSize: "14px",
                      whiteSpace: "pre-line",
                      padding: "10px",
                    }}
                  >
                    {getPortInfo("5")}
                  </Tooltip>
                }
              >
                <img
                  src={require("./images/port.png")}
                  style={{
                    backgroundColor: "white",
                    height: "20px",
                    width: "20px",
                    alt: "interface-status",
                    marginLeft: "-6px",
                    marginTop: "3px",
                  }}
                />
              </OverlayTrigger>
              <br />
              <OverlayTrigger
                placement="right"
                overlay={
                  <Tooltip
                    style={{
                      backgroundColor: "#F2F2F2",
                      border: "1px solid black",
                      borderRadius: "7px",
                      fontSize: "14px",
                      whiteSpace: "pre-line",
                      padding: "10px",
                    }}
                  >
                    {getPortInfo("6")}
                  </Tooltip>
                }
              >
                <img
                  src={require("./images/port.png")}
                  style={{
                    backgroundColor: "white",
                    height: "20px",
                    width: "20px",
                    alt: "interface-status",
                    marginLeft: "-6px",
                    marginTop: "3px",
                  }}
                />
              </OverlayTrigger>
              <br />6
            </div>

            <div style={{ marginRight: "11px", height: "12px" }}>
              7<br />
              <OverlayTrigger
                placement="right"
                overlay={
                  <Tooltip
                    style={{
                      backgroundColor: "#F2F2F2",
                      border: "1px solid black",
                      borderRadius: "7px",
                      fontSize: "14px",
                      whiteSpace: "pre-line",
                      padding: "10px",
                    }}
                  >
                    {getPortInfo("7")}
                  </Tooltip>
                }
              >
                <img
                  src={require("./images/port.png")}
                  style={{
                    backgroundColor: "white",
                    height: "20px",
                    width: "20px",
                    alt: "interface-status",
                    marginLeft: "-6px",
                    marginTop: "3px",
                  }}
                />
              </OverlayTrigger>
              <br />
              <OverlayTrigger
                placement="right"
                overlay={
                  <Tooltip
                    style={{
                      backgroundColor: "#F2F2F2",
                      border: "1px solid black",
                      borderRadius: "7px",
                      fontSize: "14px",
                      whiteSpace: "pre-line",
                      padding: "10px",
                    }}
                  >
                    {getPortInfo("8")}
                  </Tooltip>
                }
              >
                <img
                  src={require("./images/port.png")}
                  style={{
                    backgroundColor: "white",
                    height: "20px",
                    width: "20px",
                    alt: "interface-status",
                    marginLeft: "-6px",
                    marginTop: "3px",
                  }}
                />
              </OverlayTrigger>
              <br />8
            </div>

            <div style={{ marginRight: "11px", height: "12px" }}>
              9<br />
              <OverlayTrigger
                placement="right"
                overlay={
                  <Tooltip
                    style={{
                      backgroundColor: "#F2F2F2",
                      border: "1px solid black",
                      borderRadius: "7px",
                      fontSize: "14px",
                      whiteSpace: "pre-line",
                      padding: "10px",
                    }}
                  >
                    {getPortInfo("9")}
                  </Tooltip>
                }
              >
                <img
                  src={require("./images/port.png")}
                  style={{
                    backgroundColor: "white",
                    height: "20px",
                    width: "20px",
                    alt: "interface-status",
                    marginLeft: "-3px",
                    marginTop: "3px",
                  }}
                />
              </OverlayTrigger>
              <br />
              <OverlayTrigger
                placement="right"
                overlay={
                  <Tooltip
                    style={{
                      backgroundColor: "#F2F2F2",
                      border: "1px solid black",
                      borderRadius: "7px",
                      fontSize: "14px",
                      whiteSpace: "pre-line",
                      padding: "10px",
                    }}
                  >
                    {getPortInfo("10")}
                  </Tooltip>
                }
              >
                <img
                  src={require("./images/port.png")}
                  style={{
                    backgroundColor: "white",
                    height: "20px",
                    width: "20px",
                    alt: "interface-status",
                    marginLeft: "-3px",
                    marginTop: "3px",
                  }}
                />
              </OverlayTrigger>
              <br />
              10
            </div>

            <div style={{ marginRight: "11px", height: "12px" }}>
              11
              <br />
              <OverlayTrigger
                placement="right"
                overlay={
                  <Tooltip
                    style={{
                      backgroundColor: "#F2F2F2",
                      border: "1px solid black",
                      borderRadius: "7px",
                      fontSize: "14px",
                      whiteSpace: "pre-line",
                      padding: "10px",
                    }}
                  >
                    {getPortInfo("11")}
                  </Tooltip>
                }
              >
                <img
                  src={require("./images/port.png")}
                  style={{
                    backgroundColor: "white",
                    height: "20px",
                    width: "20px",
                    alt: "interface-status",
                    marginLeft: "-3px",
                    marginTop: "3px",
                  }}
                />
              </OverlayTrigger>
              <br />
              <OverlayTrigger
                placement="right"
                overlay={
                  <Tooltip
                    style={{
                      backgroundColor: "#F2F2F2",
                      border: "1px solid black",
                      borderRadius: "7px",
                      fontSize: "14px",
                      whiteSpace: "pre-line",
                      padding: "10px",
                    }}
                  >
                    {getPortInfo("12")}
                  </Tooltip>
                }
              >
                <img
                  src={require("./images/port.png")}
                  style={{
                    backgroundColor: "white",
                    height: "20px",
                    width: "20px",
                    alt: "interface-status",
                    marginLeft: "-3px",
                    marginTop: "3px",
                  }}
                />
              </OverlayTrigger>
              <br />
              12
            </div>

            <div style={{ marginRight: "11px", height: "12px" }}>
              13
              <br />
              <OverlayTrigger
                placement="right"
                overlay={
                  <Tooltip
                    style={{
                      backgroundColor: "#F2F2F2",
                      border: "1px solid black",
                      borderRadius: "7px",
                      fontSize: "14px",
                      whiteSpace: "pre-line",
                      padding: "10px",
                    }}
                  >
                    {getPortInfo("13")}
                  </Tooltip>
                }
              >
                <img
                  src={require("./images/port.png")}
                  style={{
                    backgroundColor: "white",
                    height: "20px",
                    width: "20px",
                    alt: "interface-status",
                    marginLeft: "-3px",
                    marginTop: "3px",
                  }}
                />
              </OverlayTrigger>
              <br />
              <OverlayTrigger
                placement="right"
                overlay={
                  <Tooltip
                    style={{
                      backgroundColor: "#F2F2F2",
                      border: "1px solid black",
                      borderRadius: "7px",
                      fontSize: "14px",
                      whiteSpace: "pre-line",
                      padding: "10px",
                    }}
                  >
                    {getPortInfo("14")}
                  </Tooltip>
                }
              >
                <img
                  src={require("./images/port.png")}
                  style={{
                    backgroundColor: "white",
                    height: "20px",
                    width: "20px",
                    alt: "interface-status",
                    marginLeft: "-3px",
                    marginTop: "3px",
                  }}
                />
              </OverlayTrigger>
              <br />
              14
            </div>

            <div style={{ marginRight: "20px", height: "12px" }}>
              15
              <br />
              <OverlayTrigger
                placement="right"
                overlay={
                  <Tooltip
                    style={{
                      backgroundColor: "#F2F2F2",
                      border: "1px solid black",
                      borderRadius: "7px",
                      fontSize: "14px",
                      whiteSpace: "pre-line",
                      padding: "10px",
                    }}
                  >
                    {getPortInfo("15")}
                  </Tooltip>
                }
              >
                <img
                  src={require("./images/port.png")}
                  style={{
                    backgroundColor: "white",
                    height: "20px",
                    width: "20px",
                    alt: "interface-status",
                    marginLeft: "-3px",
                    marginTop: "3px",
                  }}
                />
              </OverlayTrigger>
              <br />
              <OverlayTrigger
                placement="right"
                overlay={
                  <Tooltip
                    style={{
                      backgroundColor: "#F2F2F2",
                      border: "1px solid black",
                      borderRadius: "7px",
                      fontSize: "14px",
                      whiteSpace: "pre-line",
                      padding: "10px",
                    }}
                  >
                    {getPortInfo("16")}
                  </Tooltip>
                }
              >
                <img
                  src={require("./images/port.png")}
                  style={{
                    backgroundColor: "white",
                    height: "20px",
                    width: "20px",
                    alt: "interface-status",
                    marginLeft: "-3px",
                    marginTop: "3px",
                  }}
                />
              </OverlayTrigger>
              <br />
              16
            </div>

            <div style={{ marginRight: "11px", height: "12px" }}>
              17
              <br />
              <OverlayTrigger
                placement="right"
                overlay={
                  <Tooltip
                    style={{
                      backgroundColor: "#F2F2F2",
                      border: "1px solid black",
                      borderRadius: "7px",
                      fontSize: "14px",
                      whiteSpace: "pre-line",
                      padding: "10px",
                    }}
                  >
                    {getPortInfo("17")}
                  </Tooltip>
                }
              >
                <img
                  src={require("./images/port.png")}
                  style={{
                    backgroundColor: "white",
                    height: "20px",
                    width: "20px",
                    alt: "interface-status",
                    marginLeft: "-2px",
                    marginTop: "3px",
                  }}
                />
              </OverlayTrigger>
              <br />
              <OverlayTrigger
                placement="right"
                overlay={
                  <Tooltip
                    style={{
                      backgroundColor: "#F2F2F2",
                      border: "1px solid black",
                      borderRadius: "7px",
                      fontSize: "14px",
                      whiteSpace: "pre-line",
                      padding: "10px",
                    }}
                  >
                    {getPortInfo("18")}
                  </Tooltip>
                }
              >
                <img
                  src={require("./images/port.png")}
                  style={{
                    backgroundColor: "white",
                    height: "20px",
                    width: "20px",
                    alt: "interface-status",
                    marginLeft: "-2px",
                    marginTop: "3px",
                  }}
                />
              </OverlayTrigger>
              <br />
              18
            </div>

            <div style={{ marginRight: "11px", height: "12px" }}>
              19
              <br />
              <OverlayTrigger
                placement="right"
                overlay={
                  <Tooltip
                    style={{
                      backgroundColor: "#F2F2F2",
                      border: "1px solid black",
                      borderRadius: "7px",
                      fontSize: "14px",
                      whiteSpace: "pre-line",
                      padding: "10px",
                    }}
                  >
                    {getPortInfo("19")}
                  </Tooltip>
                }
              >
                <img
                  src={require("./images/port.png")}
                  style={{
                    backgroundColor: "white",
                    height: "20px",
                    width: "20px",
                    alt: "interface-status",
                    marginLeft: "-2px",
                    marginTop: "3px",
                  }}
                />
              </OverlayTrigger>
              <br />
              <OverlayTrigger
                placement="right"
                overlay={
                  <Tooltip
                    style={{
                      backgroundColor: "#F2F2F2",
                      border: "1px solid black",
                      borderRadius: "7px",
                      fontSize: "14px",
                      whiteSpace: "pre-line",
                      padding: "10px",
                    }}
                  >
                    {getPortInfo("20")}
                  </Tooltip>
                }
              >
                <img
                  src={require("./images/port.png")}
                  style={{
                    backgroundColor: "white",
                    height: "20px",
                    width: "20px",
                    alt: "interface-status",
                    marginLeft: "-2px",
                    marginTop: "3px",
                  }}
                />
              </OverlayTrigger>
              <br />
              20
            </div>

            <div style={{ marginRight: "11px", height: "12px" }}>
              21
              <br />
              <OverlayTrigger
                placement="right"
                overlay={
                  <Tooltip
                    style={{
                      backgroundColor: "#F2F2F2",
                      border: "1px solid black",
                      borderRadius: "7px",
                      fontSize: "14px",
                      whiteSpace: "pre-line",
                      padding: "10px",
                    }}
                  >
                    {getPortInfo("21")}
                  </Tooltip>
                }
              >
                <img
                  src={require("./images/port.png")}
                  style={{
                    backgroundColor: "white",
                    height: "20px",
                    width: "20px",
                    alt: "interface-status",
                    marginLeft: "-2px",
                    marginTop: "3px",
                  }}
                />
              </OverlayTrigger>
              <br />
              <OverlayTrigger
                placement="right"
                overlay={
                  <Tooltip
                    style={{
                      backgroundColor: "#F2F2F2",
                      border: "1px solid black",
                      borderRadius: "7px",
                      fontSize: "14px",
                      whiteSpace: "pre-line",
                      padding: "10px",
                    }}
                  >
                    {getPortInfo("22")}
                  </Tooltip>
                }
              >
                <img
                  src={require("./images/port.png")}
                  style={{
                    backgroundColor: "white",
                    height: "20px",
                    width: "20px",
                    alt: "interface-status",
                    marginLeft: "-2px",
                    marginTop: "3px",
                  }}
                />
              </OverlayTrigger>
              <br />
              22
            </div>

            <div style={{ marginRight: "20px", height: "12px" }}>
              23
              <br />
              <OverlayTrigger
                placement="right"
                overlay={
                  <Tooltip
                    style={{
                      backgroundColor: "#F2F2F2",
                      border: "1px solid black",
                      borderRadius: "7px",
                      fontSize: "14px",
                      whiteSpace: "pre-line",
                      padding: "10px",
                    }}
                  >
                    {getPortInfo("23")}
                  </Tooltip>
                }
              >
                <img
                  src={require("./images/port.png")}
                  style={{
                    backgroundColor: "white",
                    height: "20px",
                    width: "20px",
                    alt: "interface-status",
                    marginLeft: "-2px",
                    marginTop: "3px",
                  }}
                />
              </OverlayTrigger>
              <br />
              <OverlayTrigger
                placement="right"
                overlay={
                  <Tooltip
                    style={{
                      backgroundColor: "#F2F2F2",
                      border: "1px solid black",
                      borderRadius: "7px",
                      fontSize: "14px",
                      whiteSpace: "pre-line",
                      padding: "10px",
                    }}
                  >
                    {getPortInfo("24")}
                  </Tooltip>
                }
              >
                <img
                  src={require("./images/port.png")}
                  style={{
                    backgroundColor: "white",
                    height: "20px",
                    width: "20px",
                    alt: "interface-status",
                    marginLeft: "-2px",
                    marginTop: "3px",
                  }}
                />
              </OverlayTrigger>
              <br />
              24
            </div>

            <div style={{ marginRight: "11px", height: "12px" }}>
              25
              <br />
              <OverlayTrigger
                placement="right"
                overlay={
                  <Tooltip
                    style={{
                      backgroundColor: "#F2F2F2",
                      border: "1px solid black",
                      borderRadius: "7px",
                      fontSize: "14px",
                      whiteSpace: "pre-line",
                      padding: "10px",
                    }}
                  >
                    {getPortInfo("25")}
                  </Tooltip>
                }
              >
                <img
                  src={require("./images/port.png")}
                  style={{
                    backgroundColor: "white",
                    height: "20px",
                    width: "20px",
                    alt: "interface-status",
                    marginLeft: "-2px",
                    marginTop: "3px",
                  }}
                />
              </OverlayTrigger>
              <br />
              <OverlayTrigger
                placement="right"
                overlay={
                  <Tooltip
                    style={{
                      backgroundColor: "#F2F2F2",
                      border: "1px solid black",
                      borderRadius: "7px",
                      fontSize: "14px",
                      whiteSpace: "pre-line",
                      padding: "10px",
                    }}
                  >
                    {getPortInfo("26")}
                  </Tooltip>
                }
              >
                <img
                  src={require("./images/port.png")}
                  style={{
                    backgroundColor: "white",
                    height: "20px",
                    width: "20px",
                    alt: "interface-status",
                    marginLeft: "-2px",
                    marginTop: "3px",
                  }}
                />
              </OverlayTrigger>
              <br />
              26
            </div>

            <div style={{ marginRight: "11px", height: "12px" }}>
              27
              <br />
              <OverlayTrigger
                placement="right"
                overlay={
                  <Tooltip
                    style={{
                      backgroundColor: "#F2F2F2",
                      border: "1px solid black",
                      borderRadius: "7px",
                      fontSize: "14px",
                      whiteSpace: "pre-line",
                      padding: "10px",
                    }}
                  >
                    {getPortInfo("27")}
                  </Tooltip>
                }
              >
                <img
                  src={require("./images/port.png")}
                  style={{
                    backgroundColor: "white",
                    height: "20px",
                    width: "20px",
                    alt: "interface-status",
                    marginLeft: "-2px",
                    marginTop: "3px",
                  }}
                />
              </OverlayTrigger>
              <br />
              <OverlayTrigger
                placement="right"
                overlay={
                  <Tooltip
                    style={{
                      backgroundColor: "#F2F2F2",
                      border: "1px solid black",
                      borderRadius: "7px",
                      fontSize: "14px",
                      whiteSpace: "pre-line",
                      padding: "10px",
                    }}
                  >
                    {getPortInfo("28")}
                  </Tooltip>
                }
              >
                <img
                  src={require("./images/port.png")}
                  style={{
                    backgroundColor: "white",
                    height: "20px",
                    width: "20px",
                    alt: "interface-status",
                    marginLeft: "-2px",
                    marginTop: "3px",
                  }}
                />
              </OverlayTrigger>
              <br />
              28
            </div>

            <div style={{ marginRight: "11px", height: "12px" }}>
              29
              <br />
              <OverlayTrigger
                placement="right"
                overlay={
                  <Tooltip
                    style={{
                      backgroundColor: "#F2F2F2",
                      border: "1px solid black",
                      borderRadius: "7px",
                      fontSize: "14px",
                      whiteSpace: "pre-line",
                      padding: "10px",
                    }}
                  >
                    {getPortInfo("29")}
                  </Tooltip>
                }
              >
                <img
                  src={require("./images/port.png")}
                  style={{
                    backgroundColor: "white",
                    height: "20px",
                    width: "20px",
                    alt: "interface-status",
                    marginLeft: "-2px",
                    marginTop: "3px",
                  }}
                />
              </OverlayTrigger>
              <br />
              <OverlayTrigger
                placement="right"
                overlay={
                  <Tooltip
                    style={{
                      backgroundColor: "#F2F2F2",
                      border: "1px solid black",
                      borderRadius: "7px",
                      fontSize: "14px",
                      whiteSpace: "pre-line",
                      padding: "10px",
                    }}
                  >
                    {getPortInfo("30")}
                  </Tooltip>
                }
              >
                <img
                  src={require("./images/port.png")}
                  style={{
                    backgroundColor: "white",
                    height: "20px",
                    width: "20px",
                    alt: "interface-status",
                    marginLeft: "-2px",
                    marginTop: "3px",
                  }}
                />
              </OverlayTrigger>
              <br />
              30
            </div>

            <div style={{ marginRight: "11px", height: "12px" }}>
              31
              <br />
              <OverlayTrigger
                placement="right"
                overlay={
                  <Tooltip
                    style={{
                      backgroundColor: "#F2F2F2",
                      border: "1px solid black",
                      borderRadius: "7px",
                      fontSize: "14px",
                      whiteSpace: "pre-line",
                      padding: "10px",
                    }}
                  >
                    {getPortInfo("31")}
                  </Tooltip>
                }
              >
                <img
                  src={require("./images/port.png")}
                  style={{
                    backgroundColor: "white",
                    height: "20px",
                    width: "20px",
                    alt: "interface-status",
                    marginLeft: "-2px",
                    marginTop: "3px",
                  }}
                />
              </OverlayTrigger>
              <br />
              <OverlayTrigger
                placement="right"
                overlay={
                  <Tooltip
                    style={{
                      backgroundColor: "#F2F2F2",
                      border: "1px solid black",
                      borderRadius: "7px",
                      fontSize: "14px",
                      whiteSpace: "pre-line",
                      padding: "10px",
                    }}
                  >
                    {getPortInfo("32")}
                  </Tooltip>
                }
              >
                <img
                  src={require("./images/port.png")}
                  style={{
                    backgroundColor: "white",
                    height: "20px",
                    width: "20px",
                    alt: "interface-status",
                    marginLeft: "-2px",
                    marginTop: "3px",
                  }}
                />
              </OverlayTrigger>
              <br />
              32
            </div>

            <div style={{ marginRight: "11px", height: "12px" }}>
              33
              <br />
              <OverlayTrigger
                placement="right"
                overlay={
                  <Tooltip
                    style={{
                      backgroundColor: "#F2F2F2",
                      border: "1px solid black",
                      borderRadius: "7px",
                      fontSize: "14px",
                      whiteSpace: "pre-line",
                      padding: "10px",
                    }}
                  >
                    {getPortInfo("33")}
                  </Tooltip>
                }
              >
                <img
                  src={require("./images/port.png")}
                  style={{
                    backgroundColor: "white",
                    height: "20px",
                    width: "20px",
                    alt: "interface-status",
                    marginLeft: "-2px",
                    marginTop: "3px",
                  }}
                />
              </OverlayTrigger>
              <br />
              <OverlayTrigger
                placement="right"
                overlay={
                  <Tooltip
                    style={{
                      backgroundColor: "#F2F2F2",
                      border: "1px solid black",
                      borderRadius: "7px",
                      fontSize: "14px",
                      whiteSpace: "pre-line",
                      padding: "10px",
                    }}
                  >
                    {getPortInfo("34")}
                  </Tooltip>
                }
              >
                <img
                  src={require("./images/port.png")}
                  style={{
                    backgroundColor: "white",
                    height: "20px",
                    width: "20px",
                    alt: "interface-status",
                    marginLeft: "-2px",
                    marginTop: "3px",
                  }}
                />
              </OverlayTrigger>
              <br />
              34
            </div>

            <div style={{ marginRight: "20px", height: "12px" }}>
              35
              <br />
              <OverlayTrigger
                placement="right"
                overlay={
                  <Tooltip
                    style={{
                      backgroundColor: "#F2F2F2",
                      border: "1px solid black",
                      borderRadius: "7px",
                      fontSize: "14px",
                      whiteSpace: "pre-line",
                      padding: "10px",
                    }}
                  >
                    {getPortInfo("35")}
                  </Tooltip>
                }
              >
                <img
                  src={require("./images/port.png")}
                  style={{
                    backgroundColor: "lightgreen",
                    height: "20px",
                    width: "20px",
                    alt: "interface-status",
                    marginLeft: "-2px",
                    marginTop: "3px",
                  }}
                />
              </OverlayTrigger>
              <br />
              <OverlayTrigger
                placement="right"
                overlay={
                  <Tooltip
                    style={{
                      backgroundColor: "#F2F2F2",
                      border: "1px solid black",
                      borderRadius: "7px",
                      fontSize: "14px",
                      whiteSpace: "pre-line",
                      padding: "10px",
                    }}
                  >
                    {getPortInfo("36")}
                  </Tooltip>
                }
              >
                <img
                  src={require("./images/port.png")}
                  style={{
                    backgroundColor: "lightgreen",
                    height: "20px",
                    width: "20px",
                    alt: "interface-status",
                    marginLeft: "-2px",
                    marginTop: "3px",
                  }}
                />
              </OverlayTrigger>
              <br />
              36
            </div>

            <OverlayTrigger
              placement="right"
              overlay={
                <Tooltip
                  style={{
                    backgroundColor: "#F2F2F2",
                    border: "1px solid black",
                    borderRadius: "7px",
                    fontSize: "14px",
                    whiteSpace: "pre-line",
                    padding: "10px",
                  }}
                >
                  {getPortInfo("37")}
                </Tooltip>
              }
            >
              <div style={{ marginRight: "20px", height: "12px" }}>
                37
                <br />
                <img
                  src={require("./images/port.png")}
                  style={{
                    backgroundColor: "white",
                    height: "20px",
                    width: "20px",
                    alt: "interface-status",
                    marginLeft: "-3px",
                    marginTop: "3px",
                  }}
                />
              </div>
            </OverlayTrigger>
            <OverlayTrigger
              placement="right"
              overlay={
                <Tooltip
                  style={{
                    backgroundColor: "#F2F2F2",
                    border: "1px solid black",
                    borderRadius: "7px",
                    fontSize: "14px",
                    whiteSpace: "pre-line",
                    padding: "10px",
                  }}
                >
                  {getPortInfo("38")}
                </Tooltip>
              }
            >
              <div style={{ marginRight: "20px", height: "12px" }}>
                38
                <br />
                <img
                  src={require("./images/port.png")}
                  style={{
                    backgroundColor: "white",
                    height: "20px",
                    width: "20px",
                    alt: "interface-status",
                    marginLeft: "-3px",
                    marginTop: "3px",
                  }}
                />
              </div>
            </OverlayTrigger>
            <OverlayTrigger
              placement="right"
              overlay={
                <Tooltip
                  style={{
                    backgroundColor: "#F2F2F2",
                    border: "1px solid black",
                    borderRadius: "7px",
                    fontSize: "14px",
                    whiteSpace: "pre-line",
                    padding: "10px",
                  }}
                >
                  {getPortInfo("39")}
                </Tooltip>
              }
            >
              <div style={{ marginRight: "20px", height: "12px" }}>
                39
                <br />
                <img
                  src={require("./images/port.png")}
                  style={{
                    backgroundColor: "white",
                    height: "20px",
                    width: "20px",
                    alt: "interface-status",
                    marginLeft: "-3px",
                    marginTop: "3px",
                  }}
                />
              </div>
            </OverlayTrigger>
            <OverlayTrigger
              placement="right"
              overlay={
                <Tooltip
                  style={{
                    backgroundColor: "#F2F2F2",
                    border: "1px solid black",
                    borderRadius: "7px",
                    fontSize: "14px",
                    whiteSpace: "pre-line",
                    padding: "10px",
                  }}
                >
                  {getPortInfo("40")}
                </Tooltip>
              }
            >
              <div style={{ marginRight: "20px", height: "12px" }}>
                40
                <br />
                <img
                  src={require("./images/port.png")}
                  style={{
                    backgroundColor: "white",
                    height: "20px",
                    width: "20px",
                    alt: "interface-status",
                    marginLeft: "-3px",
                    marginTop: "3px",
                  }}
                />
              </div>
            </OverlayTrigger>
          </div>
        </div>
        <div className="App">
          <CreateTable columns={columns} data={data} />
        </div>
      </div>
    </div>
  );
};

export default ViewInterfaces;
