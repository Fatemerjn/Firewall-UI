import React, { useState } from 'react';
import { Button, Modal, Form} from "react-bootstrap";
import { useTable, useSortBy, useGlobalFilter } from 'react-table';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSort, faSortUp, faSortDown } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';


const CreateTable = ({ data, columns }) => {

  const [showIntegrate, setShowIntegrate] = useState(false);
  const [showAddPopup, setShowAddPopup] = useState(false);

  const [newName, setNewName] = useState('');
  const [newType, setNewType] = useState('');
  const [newMembers, setNewMembers] = useState('');
  const [newIPNetmask, setNewIPNetmask] = useState('');
  const [newTransceiver, setNewTransceiver] = useState('');
  const [newAdministrative, setNewAdministrative] = useState('');
  const [newDHCPClients, setNewDHCPClients] = useState('');
  const [newDHCPRanges, setNewDHCPRanges] = useState('');
  const [newRef, setNewRef] = useState('');

  const [showEditPopup, setShowEditPopup] = useState(false);
  const [editRowIndex, setEditRowIndex] = useState(null);

  const [editedName, setEditedName] = useState('');
  const [editedType, setEditedType] = useState('');
  const [editedMembers, setEditedMembers] = useState('');
  const [editedIPNetmask, setEditedIPNetmask] = useState('');
  const [editedTransceiver, setEditedTransceiver] = useState('');
  const [editedAdministrative, setEditedAdministrative] = useState('');
  const [editedDHCPClients, setEditedDHCPClients] = useState('');
  const [editedDHCPRanges, setEditedDHCPRanges] = useState('');
  const [editedRef, setEditedRef] = useState('');

  const [tableData, setTableData] = useState(data);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    useSortBy
  );

  const handleAddInterface = async () => {
    try {
      const formData = {
        name: newName,
        type: newType,
        members: newMembers,
        ipNetmask: newIPNetmask,
        transceivers: newTransceiver,
        administrativeAccess: newAdministrative,
        dhcpClients: newDHCPClients,
        dhcpRanges: newDHCPRanges,
        ref: newRef,
      };

      const response = await axios.post('http://localhost:5000/add_interface', formData);
      console.log('Response from server:', response.data);

      setNewName('');
      setNewType('');
      setNewMembers('');
      setNewIPNetmask('');
      setNewTransceiver('');
      setNewAdministrative('');
      setNewDHCPClients('');
      setNewDHCPRanges('');
      setNewRef('');
      setShowAddPopup(false);
    } catch (error) {
      console.error('Error adding interface:', error);
    }
    window. location. reload();
  };

  const handleEditInterface = (rowIndex) => {
    setEditRowIndex(rowIndex);
    const rowData = data[rowIndex];
    setEditedName(rowData.name);
    setEditedType(rowData.type);
    setEditedMembers(rowData.members);
    setEditedIPNetmask(rowData.ipNetmask);
    setEditedTransceiver(rowData.transceivers);
    setEditedAdministrative(rowData.administrativeAccess);
    setEditedDHCPClients(rowData.dhcpClients);
    setEditedDHCPRanges(rowData.dhcpRanges);
    setEditedRef(rowData.ref);
    setShowEditPopup(true);
  };

  const handleSaveEditedInterface = async (rowIndex) => {
    try {
      const editedRowData = {
        name: editedName,
        type: editedType,
        members: editedMembers,
        ipNetmask: editedIPNetmask,
        transceivers: editedTransceiver,
        administrativeAccess: editedAdministrative,
        dhcpClients: editedDHCPClients,
        dhcpRanges: editedDHCPRanges,
        ref: editedRef,
      };

      const response = await axios.put(`http://localhost:5000/edit_interface/${rowIndex}`, editedRowData);
      console.log('Response from server:', response.data);

      setEditedName('');
      setEditedType('');
      setEditedMembers('');
      setEditedIPNetmask('');
      setEditedTransceiver('');
      setEditedAdministrative('');
      setEditedDHCPClients('');
      setEditedDHCPRanges('');
      setEditedRef('');

      setShowEditPopup(false);

      window.location.reload();
    } catch (error) {
      console.error('Error saving edited interface:', error);
    }
  };

  const handleDeleteInterface = async (rowIndex) => {
    try {
      const deletedInterface = tableData[rowIndex]; //رکورد حذف شده
      const response = await axios.delete(`http://localhost:5000/delete_interface/${rowIndex}`);
      console.log('Response from server:', response.data);

      const updatedTableData = [...tableData];
      updatedTableData.splice(rowIndex, 1);
      setTableData(updatedTableData);
      window.location.reload();
    } catch (error) {
      console.error('Error deleting interface:', error);
    }
  };



  return (
    <div>
      <div style={{
            backgroundColor: "#ffffff",
            padding: "20px",
            display: "flex",
            float: 'right',
            height: '37.5px',
          }}>
        <Button
            class="add-btn"
            style={{ backgroundColor: '#FFFCFC', border: "1px solid grey", borderRadius: "7px", float: "right", marginLeft:'15px', marginRight:'-8px', width:'60px'}}
            onClick={() => setShowAddPopup(!showAddPopup)}
          >
            New
          </Button>
      </div>
      <Modal style={{ backgroundColor:'#F2F2F2', border:'solid 1px black', borderRadius:'7px', height:'460px', width:'420px',
      padding:'8.0px', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
      show={showAddPopup} onHide={() => setShowAddPopup(false)}>
        <Modal.Header>
          <Modal.Title style={{textAlign:'center', margin:'20px'}}>New Interface</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form style={{padding:'10px', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}>
            <input style={{padding:'5px', borderRadius:'6px', border:'solid 1px black', margin:"5px"}} type="text" placeholder="Name" value={newName} onChange={(e) => setNewName(e.target.value)} />
            <input style={{padding:'5px', borderRadius:'6px', border:'solid 1px black', margin:"5px"}} type="text" placeholder="Type" value={newType} onChange={(e) => setNewType(e.target.value)} />
            <input style={{padding:'5px', borderRadius:'6px', border:'solid 1px black', margin:"5px"}} type="text" placeholder="Member" value={newMembers} onChange={(e) => setNewMembers(e.target.value)} />
            <input style={{padding:'5px', borderRadius:'6px', border:'solid 1px black', margin:"5px"}} type="text" placeholder="IP/Netmask" value={newIPNetmask} onChange={(e) => setNewIPNetmask(e.target.value)} />
            <input style={{padding:'5px', borderRadius:'6px', border:'solid 1px black', margin:"5px"}} type="text" placeholder="Transceiver(s)" value={newTransceiver} onChange={(e) => setNewTransceiver(e.target.value)} />
            <input style={{padding:'5px', borderRadius:'6px', border:'solid 1px black', margin:"5px"}} type="text" placeholder="Administrative Access" value={newAdministrative} onChange={(e) => setNewAdministrative(e.target.value)} />
            <input style={{padding:'5px', borderRadius:'6px', border:'solid 1px black', margin:"5px"}} type="text" placeholder="DHCP Clients" value={newDHCPClients} onChange={(e) => setNewDHCPClients(e.target.value)} />
            <input style={{padding:'5px', borderRadius:'6px', border:'solid 1px black', margin:"5px"}} type="text" placeholder="DHCP Ranges" value={newDHCPRanges} onChange={(e) => setNewDHCPRanges(e.target.value)} />
            <input style={{padding:'5px', borderRadius:'6px', border:'solid 1px black', margin:"5px"}} type="text" placeholder="Refrence." value={newRef} onChange={(e) => setNewRef(e.target.value)} />
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button style={{ width:'52px', 'height':'27px', position: 'absolute', top: '90%', left: '41%', transform: 'translate(-50%, -50%)'}}
            variant="secondary" onClick={() => setShowAddPopup(false)}>Cancel</Button>
          <Button style={{ width:'52px', 'height':'27px', position: 'absolute', top: '90%', left: '55%', transform: 'translate(-50%, -50%)'}}
            variant="primary" onClick={handleAddInterface}>Add</Button>
        </Modal.Footer>
      </Modal>
      <Modal
        style={{ backgroundColor: '#F2F2F2', border: 'solid 1px black', borderRadius: '7px', height: '460px', width: '420px', padding: '8.0px', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
        show={showEditPopup}
        onHide={() => {
          setShowEditPopup(false);
          setEditRowIndex(null);
          setEditedName('');
          setEditedType('');
          setEditedMembers('');
          setEditedIPNetmask('');
          setEditedTransceiver('');
          setEditedAdministrative('');
          setEditedDHCPClients('');
          setEditedDHCPRanges('');
          setEditedRef('');
        }}
      >
        <Modal.Header>
          <Modal.Title style={{ textAlign: 'center', margin: '20px' }}>Edit Interface</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form style={{ padding: '10px', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
            {editRowIndex !== null && (
              <>
                <input style={{ padding: '5px', borderRadius: '6px', border: 'solid 1px black', margin: "5px" }} type="text" placeholder="Name" value={editedName} onChange={(e) => setEditedName(e.target.value)} />
                <input style={{ padding: '5px', borderRadius: '6px', border: 'solid 1px black', margin: "5px" }} type="text" placeholder="Type" value={editedType} onChange={(e) => setEditedType(e.target.value)} />
                <input style={{ padding: '5px', borderRadius: '6px', border: 'solid 1px black', margin: "5px" }} type="text" placeholder="Member" value={editedMembers} onChange={(e) => setEditedMembers(e.target.value)} />
                <input style={{ padding: '5px', borderRadius: '6px', border: 'solid 1px black', margin: "5px" }} type="text" placeholder="IP/Netmask" value={editedIPNetmask} onChange={(e) => setEditedIPNetmask(e.target.value)} />
                <input style={{ padding: '5px', borderRadius: '6px', border: 'solid 1px black', margin: "5px" }} type="text" placeholder="Transceiver(s)" value={editedTransceiver} onChange={(e) => setEditedTransceiver(e.target.value)} />
                <input style={{ padding: '5px', borderRadius: '6px', border: 'solid 1px black', margin: "5px" }} type="text" placeholder="Administrative Access" value={editedAdministrative} onChange={(e) => setEditedAdministrative(e.target.value)} />
                <input style={{ padding: '5px', borderRadius: '6px', border: 'solid 1px black', margin: "5px" }} type="text" placeholder="DHCP Clients" value={editedDHCPClients} onChange={(e) => setEditedDHCPClients(e.target.value)} />
                <input style={{ padding: '5px', borderRadius: '6px', border: 'solid 1px black', margin: "5px" }} type="text" placeholder="DHCP Ranges" value={editedDHCPRanges} onChange={(e) => setEditedDHCPRanges(e.target.value)} />
                <input style={{ padding: '5px', borderRadius: '6px', border: 'solid 1px black', margin: "5px" }} type="text" placeholder="Refrence." value={editedRef} onChange={(e) => setEditedRef(e.target.value)} />
              </>
            )}
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            style={{ width: '52px', 'height': '27px', position: 'absolute', top: '90%', left: '41%', transform: 'translate(-50%, -50%)' }}
            variant="secondary"
            onClick={() => {
              setShowEditPopup(false);
              setEditRowIndex(null);
            }}
          >
            Cancel
          </Button>
          <Button
            style={{ width: '52px', 'height': '27px', position: 'absolute', top: '90%', left: '55%', transform: 'translate(-50%, -50%)' }}
            variant="primary"
            onClick={() => {
              if (editRowIndex !== null) {
                handleSaveEditedInterface(editRowIndex);
              }
            }}
          >
            Save
          </Button>
        </Modal.Footer>
      </Modal>

       <div
          style={{
            backgroundColor: "#ffffff",
            padding: "20px",
            display: "flex",
          }}
        >
          <Button style={{backgroundColor: '#FFFCFC', border: "1px solid grey", borderRadius: "7px", marginRight:'10px', marginLeft:'-15px', width:'150px'}} onClick={() => setShowIntegrate(!showIntegrate)}>
            Integrate Interfaces
          </Button>
          <input
        className='search-tbl'
        style={{height:'30px', width:'400px', padding:'3px', fontSize:'15px', border: "1px solid grey", borderRadius: "7px"}}
        type="text"
        placeholder="Search"
        value={state.globalFilter || ''}
        onChange={(e) => setGlobalFilter(e.target.value)}
        />
        </div>
        <table {...getTableProps()} className="table" style={{ width: '100%', paddingRight: '6px' }}>
        <thead style={{ backgroundColor: '#F3F3F3', fontSize: '18px' }}>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  <div className="column-header" style={{ padding: '10px', fontWeight: 'normal' }}>
                    {column.render('Header')}
                    <span className="sort-icon" style={{ color: '#D8D8D8', padding: '6px' }}>
                      {column.isSorted ? (
                        column.isSortedDesc ? (
                          <FontAwesomeIcon icon={faSortDown} />
                        ) : (
                          <FontAwesomeIcon icon={faSortUp} />
                        )
                      ) : (
                        <FontAwesomeIcon icon={faSort} />
                      )}
                    </span>
                  </div>
                </th>
              ))}
              <th></th>
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()} style={{ textAlign: 'center' }}>
          {rows.map((row, rowIndex) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                  );
                })}
                <td style={{'display': 'flex', 'justify-content': 'space-between'}}>
                  <Button style={{backgroundColor: '#FFFCFC', border: "1px solid grey", borderRadius: "5px"}}
                    onClick={() => handleEditInterface(rowIndex)}
                  >
                    Edit
                  </Button>
                  <Button
                    style={{'marginLeft':'3px', backgroundColor: '#FFFCFC', border: "1px solid grey", borderRadius: "5px"}}
                    onClick={() => handleDeleteInterface(rowIndex)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default CreateTable;
