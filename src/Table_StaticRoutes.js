import React, { useState } from 'react';
import { Button, Modal, Form} from "react-bootstrap";
import { useTable, useSortBy, useGlobalFilter } from 'react-table';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSort, faSortUp, faSortDown } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';


const CreateTable = ({ data, columns }) => {

  const [showIntegrate, setShowIntegrate] = useState(false);
  const [showAddPopup, setShowAddPopup] = useState(false);

  const [newDestination, setNewDestination] = useState('');
  const [newGatewayIp, setNewGatewayIp] = useState('');
  const [newInterface, setNewInterface] = useState('');
  const [newStatus, setNewStatus] = useState('');
  const [newComments, setNewComments] = useState('');

  const [showEditPopup, setShowEditPopup] = useState(false);
  const [editRowIndex, setEditRowIndex] = useState(null);

  const [editedDestination, setEditedDestination] = useState('');
  const [editedGateway, setEditedGateway] = useState('');
  const [editedInterface, setEditedInterface] = useState('');
  const [editedStatus, setEditedStatus] = useState('');
  const [editedComments, setEditedComments] = useState('');

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
        destination: newDestination,
        gatewayip: newGatewayIp,
        interface: newInterface,
        status: newStatus,
        comments: newComments,
      };
      const response = await axios.post('http://localhost:5000/add_staticroute', formData);
      console.log('Response from server:', response.data);

      setNewDestination('');
      setNewGatewayIp('');
      setNewInterface('');
      setNewStatus('');
      setNewComments('');
      setShowAddPopup(false);
    } catch (error) {
      console.error('Error adding static route:', error);
    }
    window. location. reload();
  };

  const handleEditInterface = (rowIndex) => {
    setEditRowIndex(rowIndex);
    const rowData = data[rowIndex];
    setEditedDestination(rowData.destination);
    setEditedGateway(rowData.gatewayip);
    setEditedInterface(rowData.interface);
    setEditedStatus(rowData.status);
    setEditedComments(rowData.comments);
    setShowEditPopup(true);
  };

  const handleSaveEditedInterface = async (rowIndex) => {
    try {
      const editedRowData = {
        destination: editedDestination,
        gatewayip: editedGateway,
        interface: editedInterface,
        status: editedStatus,
        comments: editedComments,
      };
      const response = await axios.put(`http://localhost:5000/edit_staticroute/${rowIndex}`, editedRowData);
      console.log('Response from server:', response.data);

      setEditedDestination('');
      setEditedGateway('');
      setEditedInterface('');
      setEditedStatus('');
      setEditedComments('');

      setShowEditPopup(false);

      window.location.reload();
    } catch (error) {
      console.error('Error saving edited static route:', error);
    }
  };

  const handleDeleteInterface = async (rowIndex) => {
    try {
      const deletedInterface = tableData[rowIndex]; //رکورد حذف شده
      const response = await axios.delete(`http://localhost:5000/delete_staticroute/${rowIndex}`);
      console.log('Response from server:', response.data);

      const updatedTableData = [...tableData];
      updatedTableData.splice(rowIndex, 1);
      setTableData(updatedTableData);
      window.location.reload();
    } catch (error) {
      console.error('Error deleting static route:', error);
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
            style={{ backgroundColor: '#FFFCFC', border: "1px solid grey", borderRadius: "7px", float: "right", marginLeft:'15px', marginRight:'-8px', width:'60px'}}
            onClick={() => setShowAddPopup(!showAddPopup)}
          >
            New
          </Button>
      </div>
      <Modal style={{ backgroundColor:'#F2F2F2', border:'solid 1px black', borderRadius:'7px', height:'320px', width:'320px',
      padding:'8.0px', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
      show={showAddPopup} onHide={() => setShowAddPopup(false)}>
        <Modal.Header>
          <Modal.Title style={{textAlign:'center', margin:'20px'}}>New Static Route</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form style={{padding:'10px', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}>
            <input style={{padding:'5px', borderRadius:'6px', border:'solid 1px black', margin:"5px"}} type="text" placeholder="Destination" value={newDestination} onChange={(e) => setNewDestination(e.target.value)} />
            <input style={{padding:'5px', borderRadius:'6px', border:'solid 1px black', margin:"5px"}} type="text" placeholder="Gateway Ip" value={newGatewayIp} onChange={(e) => setNewGatewayIp(e.target.value)} />
            <input style={{padding:'5px', borderRadius:'6px', border:'solid 1px black', margin:"5px"}} type="text" placeholder="Interface" value={newInterface} onChange={(e) => setNewInterface(e.target.value)} />
            <input style={{padding:'5px', borderRadius:'6px', border:'solid 1px black', margin:"5px"}} type="text" placeholder="Status" value={newStatus} onChange={(e) => setNewStatus(e.target.value)} />
            <input style={{padding:'5px', borderRadius:'6px', border:'solid 1px black', margin:"5px"}} type="text" placeholder="Comments" value={newComments} onChange={(e) => setNewComments(e.target.value)} />
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button style={{ width:'52px', 'height':'27px', position: 'absolute', top: '85%', left: '41%', transform: 'translate(-50%, -50%)'}}
            variant="secondary" onClick={() => setShowAddPopup(false)}>Cancel</Button>
          <Button style={{ width:'52px', 'height':'27px', position: 'absolute', top: '85%', left: '59%', transform: 'translate(-50%, -50%)'}}
            variant="primary" onClick={handleAddInterface}>Add</Button>
        </Modal.Footer>
      </Modal>
      <Modal
        style={{ backgroundColor:'#F2F2F2', border:'solid 1px black', borderRadius:'7px', height:'340px', width:'320px',
        padding:'8.0px', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
        show={showEditPopup}
        onHide={() => {
          setShowEditPopup(false);
          setEditRowIndex(null);
          setEditedDestination('');
          setEditedGateway('');
          setEditedInterface('');
          setEditedStatus('');
          setEditedComments('');
        }}
      >
        <Modal.Header>
          <Modal.Title style={{ textAlign: 'center', margin: '20px' }}>Edit Static Route</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form style={{ padding: '10px', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
            {editRowIndex !== null && (
              <>
                <input style={{ padding: '5px', borderRadius: '6px', border: 'solid 1px black', margin: "5px" }} type="text" placeholder="Destination" value={editedDestination} onChange={(e) => setEditedDestination(e.target.value)} />
                <input style={{ padding: '5px', borderRadius: '6px', border: 'solid 1px black', margin: "5px" }} type="text" placeholder="Gateway Ip" value={editedGateway} onChange={(e) => setEditedGateway(e.target.value)} />
                <input style={{ padding: '5px', borderRadius: '6px', border: 'solid 1px black', margin: "5px" }} type="text" placeholder="Interface" value={editedInterface} onChange={(e) => setEditedInterface(e.target.value)} />
                <input style={{ padding: '5px', borderRadius: '6px', border: 'solid 1px black', margin: "5px" }} type="text" placeholder="Status" value={editedStatus} onChange={(e) => setEditedStatus(e.target.value)} />
                <input style={{ padding: '5px', borderRadius: '6px', border: 'solid 1px black', margin: "5px" }} type="text" placeholder="Comments" value={editedComments} onChange={(e) => setEditedComments(e.target.value)} />
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
            style={{ marginLeft:'12px', width: '52px', 'height': '27px', position: 'absolute', top: '90%', left: '55%', transform: 'translate(-50%, -50%)' }}
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
          <Button style={{backgroundColor: '#FFFCFC', border: "1px solid grey", borderRadius: "7px", marginRight:'10px', marginLeft:'-15px', width:'110px'}} onClick={() => setShowIntegrate(!showIntegrate)}>
            >_Show in CLI
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
    <table {...getTableProps()} className="table" style={{width:'100%', paddingRight:'6px'}}>
      <thead style={{backgroundColor:'#F3F3F3', fontSize:'18px'}}>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                <div className="column-header" style={{padding:'10px', fontWeight:'normal'}}>
                  {column.render('Header')}
                  <span className="sort-icon" style={{color:'#D8D8D8', padding:'6px'}}>
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
      <tbody {...getTableBodyProps()} style={{textAlign:'center'}}>
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
                    style={{ backgroundColor: '#FFFCFC', border: "1px solid grey", borderRadius: "5px", marginLeft:'-35px'}}
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
