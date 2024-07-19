import React, { Component, useState, useMemo } from "react";
import { Button, Form } from "react-bootstrap";
import Switch from "react-switch";
import Select from 'react-select';
import Axios from "axios";



const DNSsetting = () => {
  const [SelectdnsServers, setSelectdnsServers] = useState("");
  const [SwitchStates, setSwitchStates] = useState({
    dns: true,
    tls: false,
    https: true,
  });

  const [pds1, setpds1] = useState('');
  const [sds1, setsds1] = useState('');
  const [ldn, setldn] = useState('');
  const [sh, setsh] = useState('');
  const [pds2, setpds2] = useState('');
  const [sds2, setsds2] = useState('');

  const [selectedOption, setSelectedOption] = useState(null);
  const [textBoxesLD, settextBoxesLD] = useState([]);
  const [nextTextBoxLDId, setNextTextBoxLDId] = useState(0);
  const [TextBoxLDCount, setTextBoxLDCount] = useState(0);

  const [textBoxesSH, settextBoxesSH] = useState([]);
  const [nextTextBoxSHId, setNextTextBoxSHId] = useState(0);
  const [TextBoxSHCount, setTextBoxSHCount] = useState(0);

  const [sslOptions, setsslOptions] = useState([]);

  var LocalDomainNameLimit = 7;
  var ServerHostNameLimit = 3;

  const dnsServers = (event) => {
    setSelectdnsServers(event.target.value);
    if (event.target.value === "sabalan-servers") {
        setSwitchStates({
          dns: true,
          tls: true,
          https: true,
        });
}}
  const boolDNS = () => {
  setSwitchStates((prevStates) => ({
    ...prevStates,
    dns: !prevStates.dns,
  }));
  console.log("New DNS state:", SwitchStates.dns);

};


  const boolTLS = () => {
  setSwitchStates((prevStates) => ({
    ...prevStates,
    tls: !prevStates.tls,
  }));
  console.log("New tls state:", !SwitchStates.tls);

};

  const boolHTTPS = () => {
  setSwitchStates((prevStates) => ({
    ...prevStates,
    https: !prevStates.https,
  }));
  console.log("New https state:", SwitchStates.https);

};

useMemo(async () => {  //دریافت آپشن های اس اس ال از سرور
  try {
    const response = await Axios.get('http://localhost:5000/get_sslOptions');
    setsslOptions(response.data);
    console.log(sslOptions);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}, []);

  // const sslOptions = [
  //   { value: 'option1', label: 'Option 1' },
  //   { value: 'option2', label: 'Option 2' },
  //   { value: 'option3', label: 'Option 3' },
  // ];


  const handleSelectChange = (selectedOption) => {
    setSelectedOption(selectedOption);
  };

  const handleAddTextBoxLD = () => {
    if (TextBoxLDCount < LocalDomainNameLimit) {
      settextBoxesLD([...textBoxesLD, { id: nextTextBoxLDId, value: '' }]);
      setNextTextBoxLDId(nextTextBoxLDId + 1);
      setTextBoxLDCount(TextBoxLDCount + 1);
    }
  };

  const handleTextBoxLDChange = (id, value) => {
    const updatedtextBoxesLD = textBoxesLD.map((TextBoxLD) =>
      TextBoxLD.id === id ? { ...TextBoxLD, value } : TextBoxLD
    );
    settextBoxesLD(updatedtextBoxesLD);
  };

  const handleRemoveTextBoxLD = (id) => {
    const updatedtextBoxesLD = textBoxesLD.filter((TextBoxLD) => TextBoxLD.id !== id);
    settextBoxesLD(updatedtextBoxesLD);
    setTextBoxLDCount(TextBoxLDCount - 1);
  };

  const handleAddTextBoxSH = () => {
    if (TextBoxSHCount < ServerHostNameLimit) {
      settextBoxesSH([...textBoxesSH, { id: nextTextBoxSHId, value: '' }]);
      setNextTextBoxSHId(nextTextBoxSHId + 1);
      setTextBoxSHCount(TextBoxSHCount + 1);
    }
  };

  const handleTextBoxSHChange = (id, value) => {
    const updatedtextBoxesSH = textBoxesSH.map((TextBoxSH) =>
      TextBoxSH.id === id ? { ...TextBoxSH, value } : TextBoxSH
    );
    settextBoxesSH(updatedtextBoxesSH);
  };

  const handleRemoveTextBoxSH = (id) => {
    const updatedtextBoxesSH = textBoxesSH.filter((TextBoxSH) => TextBoxSH.id !== id);
    settextBoxesSH(updatedtextBoxesSH);
    setTextBoxSHCount(TextBoxSHCount - 1);
  };

  const handleSubmit = async () => {
    const dataToSend = {
      selectdnsServers: SelectdnsServers,
      PrimaryDNSServer: pds1,
      SecondaryDNSServer: sds1,
      LocalDomainName: ldn,
      textBoxesLD: textBoxesLD,
      DnsSwitch: !SwitchStates.dns,
      tlsSwitch: SwitchStates.tls,
      httpsSwitch: !SwitchStates.https,
      selectedOption: selectedOption,
      ServerHostname: sh,
      textBoxesSH: textBoxesSH,
      PrimaryDNSServer_IPv6: pds2,
      SecondaryDNSServer_IPv6: sds2,
    };
    try {
      const response = await Axios.post("http://localhost:5000/dns_apply", dataToSend);
      console.log("Server response:", response.data);
      window. location. reload();
    } catch (error) {
      console.error("Error sending data to server:", error);
    }
    setSelectdnsServers('');
    setpds1('');
    setsds1('');
    setldn('');
    settextBoxesLD('');
    setsh('');
    settextBoxesSH('');
    setpds2('');
    setsds2('');
  };

  return (
    <div>
    <div
      style={{
        marginLeft: '270px',
        marginTop: '20px',
        marginRight: '400px',
        border: "solid 1px black",
        borderRadius: "7px",
      }}
    >
      <form
        style={{
          padding: "0 30px 30px 30px ",
          display: "flex",
          flexDirection: "row",
        }}
      >
          <div style={{ margin: "20px 90px 20px 20px" }}>
            <h4
              style={{
                backgroundColor: "#F5F5F5",
                width: "100%",
                height: "25px",
                marginBottom: "12px",
              }}
            >
              DNS servers
            </h4>
            <label style={{ display: "flex" }}>
            <input
                style={{ marginBottom: "12px" }}
                type="radio"
                value="sabalan-servers"
                checked={SelectdnsServers === "sabalan-servers"}
                onChange={dnsServers}
            />
              Use Sabalan Servers
            </label>
            <label style={{ display: "flex" }}>
              <input
                style={{ marginBottom: "12px" }}
                type="radio"
                value="specify"
                checked={SelectdnsServers === "specify"}
                onChange={dnsServers}
              />
              Specify
            </label>
            <br/>
            <label>
              Primary DNS server
              <input
                className="p-dns"
                style={{
                  padding: "5px",
                  borderRadius: "6px",
                  border: "solid 1px black",
                  margin: "5px",
                }}
                type="text"
                value={pds1} onChange={(e) => setpds1(e.target.value)}
              />
            </label>
            <label>
              Secondary DNS server
              <input
                className="s-dns"
                style={{
                  padding: "5px",
                  borderRadius: "6px",
                  border: "solid 1px black",
                  margin: "5px",
                }}
                type="text"
                value={sds1} onChange={(e) => setsds1(e.target.value)}
              />
            </label>
            <label>
              Local domain name
              <input
                className="local_dmn"
                style={{
                  padding: "5px",
                  borderRadius: "6px",
                  border: "solid 1px black",
                  margin: "5px",
                }}
                type="text"
                value={ldn} onChange={(e) => setldn(e.target.value)}
              />
            </label>
            <div className="text-boxes">
              {textBoxesLD.map((TextBoxLD) => (
                <div class='col1' key={TextBoxLD.id} style={{ display: 'flex', alignItems: 'center' }}>
                <input
                style={{
                  padding: "5px",
                  borderRadius: "6px",
                  border: "solid 1px black",
                  margin: "5px",
                }}
                  type="text"
                  value={TextBoxLD.value}
                  onChange={(e) => handleTextBoxLDChange(TextBoxLD.id, e.target.value)}
                />
                <button
                    style={{
                      marginLeft: '10px',
                      padding: '3px 5px',
                      border: 'none',
                      borderRadius: '3px',
                      backgroundColor: 'red',
                      color: 'white',
                      cursor: 'pointer',
                      marginLeft:'2px'
                    }}
                    onClick={() => handleRemoveTextBoxLD(TextBoxLD.id)}
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
            {TextBoxLDCount < LocalDomainNameLimit && (
            <button className="add-button1" onClick={(e) => {
                    e.preventDefault();
                    handleAddTextBoxLD();
                  }}
                    style={{width:'168.2px', height:'27.5px', fontSize:'17px', textAlign:'center',
              border:'solid 1px black', borderRadius:'5px', marginLeft:'5px', marginTop:'5px', backgroundColor:'#F3B9AB'}}>+
          </button>
            )}
          </div>
          <div style={{ margin: "20px 90px 20px 30px" }}>
            <h4
              style={{
                backgroundColor: "#F5F5F5",
                width: "100%",
                height: "25px",
                marginBottom: "12px",
              }}
            >
              DNS Protocols
            </h4>
            <label>
              DNS (UDP/53)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Switch class="dns" onChange={boolDNS} checked={!SwitchStates.dns} disabled={SelectdnsServers === "sabalan-servers"} height={15} width={28}/>
            </label>
            <br/>
            <label>TLS (TCP/853)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Switch class="tls" onChange={boolTLS} checked={SwitchStates.tls} disabled={SelectdnsServers === "sabalan-servers"} height={15} width={28}/>
            </label>
            <br/>
            <label>HTTPS (TCP/443)&nbsp;&nbsp;
                <Switch class="https" onChange={boolHTTPS} checked={!SwitchStates.https} disabled={SelectdnsServers === "sabalan-servers"} height={15} width={28}/>
            </label>
            <br/>
            <br/>
            <label>SSL certificate&nbsp;&nbsp;</label>
            <div style={{margin:'5px', height:'27.6px', width:'168.2px'}}>
              <Select
                class="listbox"
                style={{}}
                value={selectedOption}
                onChange={handleSelectChange}
                options={sslOptions}
              />
            </div>
            <br/>
            <label>
              Server hostname
              <input
                style={{
                  padding: "5px",
                  borderRadius: "6px",
                  border: "solid 1px black",
                  margin: "5px",
                }}
                type="text"
                value={sh} onChange={(e) => setsh(e.target.value)}
              />
            </label>
            <div className="text-boxes">
            {textBoxesSH.map((TextBoxSH) => (
              <div class="col2" key={TextBoxSH.id} style={{ display: 'flex', alignItems: 'center' }}>
              <input
              style={{
                padding: "5px",
                borderRadius: "6px",
                border: "solid 1px black",
                margin: "5px",
              }}
                type="text"
                value={TextBoxSH.value}
                onChange={(e) => handleTextBoxSHChange(TextBoxSH.id, e.target.value)}
              />
              <button
                  style={{
                    marginLeft: '10px',
                    padding: '3px 5px',
                    border: 'none',
                    borderRadius: '3px',
                    backgroundColor: 'red',
                    color: 'white',
                    cursor: 'pointer',
                    marginLeft:'2px'
                  }}
                  onClick={() => handleRemoveTextBoxSH(TextBoxSH.id)}
                >
                  ×
                </button>
              </div>
            ))}
            </div>
            {TextBoxSHCount < ServerHostNameLimit && (
            <button className="add-button2" onClick={(e) => {
                  e.preventDefault();
                  handleAddTextBoxSH();
                }}
                style={{width:'168.2px', height:'27.5px', fontSize:'17px', textAlign:'center',
                border:'solid 1px black', borderRadius:'5px', marginLeft:'5px', marginTop:'5px', backgroundColor:'#F3B9AB'}}>+
            </button>
            )}
          </div>
          <div style={{ margin: "20px 20px 20px 10px" }}>
            <h4
              style={{
                backgroundColor: "#F5F5F5",
                width: "100%",
                height: "25px",
                marginBottom: "12px",
              }}
            >
              IPv6 DNS Settings
            </h4>
            <label>
              Primary DNS server
              <input
                className="v6_p-dns"
                style={{
                  padding: "5px",
                  borderRadius: "6px",
                  border: "solid 1px black",
                  margin: "5px",
                }}
                type="text"
                value={pds2} onChange={(e) => setpds2(e.target.value)}
              />
            </label>
            <label>
              Secondary DNS server
              <input
                className="v6_s-dns"
                style={{
                  padding: "5px",
                  borderRadius: "6px",
                  border: "solid 1px black",
                  margin: "5px",
                }}
                type="text"
                value={sds2} onChange={(e) => setsds2(e.target.value)}
              />
            </label>
          </div>
          </form>
          <div
          style={{
            marginTop: "-20px",
            marginBottom: "25px",
            textAlign: "center",
          }}
        >
          <button
            className="apply-button"
            style={{
              width: "100px",
              height: "30px",
              backgroundColor:'#DB5B33',
              fontSize: "14px",
              color:'white',
              textAlign: "center",
              border: "solid 1px #DB5B33",
              borderRadius: "5px",
            }}
            onClick={
              handleSubmit
            }
          >
            Apply
          </button>
        </div>
    </div>
  </div>
);
};

export default DNSsetting;
