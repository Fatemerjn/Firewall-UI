import React, { useState, useMemo } from "react";
import CreateTable from "./Table_PolicyRoutes";
import axios from 'axios';

const PolicyRoutes = () => {
    const columns = useMemo(
        () => [
          {
            Header: "Seq#.",
            accessor: "seq",
          },
          {
            Header: "Incoming Interface",
            accessor: "incominginterface",
          },
          {
            Header: "Outgoing Interface",
            accessor: "outgoinginterface",
          },
          {
            Header: "Source",
            accessor: "source",
          },
          {
            Header: "Destination",
            accessor: "destination",
          },
          {
            Header: "Hit Count",
            accessor: "hitcount",
          },
        ],
        []
      );

      const [data, setData] = useState([]);
      useMemo(async () => {  //دریافت دیتا از سرور
        try {
          const response = await axios.get('http://localhost:5000/get_policyroute');
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


    export default PolicyRoutes;