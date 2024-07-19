import React, { useState, useMemo } from "react";
import CreateTable from "./Table_StaticRoutes";
import axios from 'axios';

const StaticRoutes = () => {
    const columns = useMemo(
        () => [
          {
            Header: "Destination",
            accessor: "destination",
          },
          {
            Header: "Gateway Ip",
            accessor: "gatewayip",
          },
          {
            Header: "Interface",
            accessor: "interface",
          },
          {
            Header: "Status",
            accessor: "status",
          },
          {
            Header: "Comments",
            accessor: "comments",
          },
        ],
        []
      );

  const [data, setData] = useState([]);
  useMemo(async () => {  //دریافت دیتا از سرور
    try {
      const response = await axios.get('http://localhost:5000/get_staticroute');
      setData(response.data);
      console.log(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }, []);

    return (
            <div>
                <div style={{ marginLeft: "250px", marginTop: "10px"}}>
                    <CreateTable  columns={columns} data={data}/>
                </div>
            </div>
        );
    };


    export default StaticRoutes;