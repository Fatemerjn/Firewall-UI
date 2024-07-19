import React, { useState } from 'react';
import { Button, Modal, Form} from "react-bootstrap";
import { useTable, useSortBy, useGlobalFilter } from 'react-table';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSort, faSortUp, faSortDown } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

const CreateTable = ({ data, columns }) => {

  const [showIntegrate, setShowIntegrate] = useState(false);
  const [showAddPopup, setShowAddPopup] = useState(false);

  const [newSeq, setNewSeq] = useState('');
  const [newIncoming, setNewIncoming] = useState('');
  const [newOutgoing, setNewOutgoing] = useState('');
  const [newSource, setNewSource] = useState('');
  const [newDestination, setNewDestination] = useState('');
  const [newHit, setNewHit] = useState('');

  const [showEditPopup, setShowEditPopup] = useState(false);
  const [editRowIndex, setEditRowIndex] = useState(null);

  const [editedSeq, setEditedSeq] = useState('');
  const [editedIncoming, setEditedIncoming] = useState('');
  const [editedOutgoing, setEditedOutgoing] = useState('');
  const [editedSource, setEditedSource] = useState('');
  const [editedDestination, setEditedDestination] = useState('');
  const [editedHit, setEditedHit] = useState('');

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
      seq: newSeq,
      incominginterface: newIncoming,
      outgoinginterface: newOutgoing,
      source: newSource,
      destination: newDestination,
      hitcount: newHit,
    };
    const response = await axios.post('http://localhost:5000/add_policyroute', formData);
    console.log('Response from server:', response.data);

    setNewSeq('');
    setNewIncoming('');
    setNewOutgoing('');
    setNewSource('');
    setNewDestination('');
    setNewHit('');
    setShowAddPopup(false);
  } catch (error) {
    console.error('Error adding policy route:', error);
  }
  window. location. reload();
};

  const handleEditInterface = (rowIndex) => {
    setEditRowIndex(rowIndex);
    const rowData = data[rowIndex];
    setEditedSeq(rowData.seq);
    setEditedIncoming(rowData.incominginterface);
    setEditedOutgoing(rowData.outgoinginterface);
    setEditedSource(rowData.source);
    setEditedDestination(rowData.destination);
    setEditedHit(rowData.hitcount);
    setShowEditPopup(true);
  };

  const handleSaveEditedInterface = async (rowIndex) => {
    try {
      const editedRowData = {
        seq: editedSeq,
        incominginterface: editedIncoming,
        outgoinginterface: editedOutgoing,
        source: editedSource,
        destination: editedDestination,
        hitcount: editedHit,
      };
      const response = await axios.put(`http://localhost:5000/edit_policyroute/${rowIndex}`, editedRowData);
      console.log('Response from server:', response.data);

      setEditedSeq('');
      setEditedIncoming('');
      setEditedOutgoing('');
      setEditedSource('');
      setEditedDestination('');
      setEditedHit('');

      setShowEditPopup(false);

      window.location.reload();
    } catch (error) {
      console.error('Error saving edited policy route:', error);
    }
  };

  const handleDeleteInterface = async (rowIndex) => {
    try {
      const deletedInterface = tableData[rowIndex]; //رکورد حذف شده
      const response = await axios.delete(`http://localhost:5000/delete_policyroute/${rowIndex}`);
      console.log('Response from server:', response.data);

      const updatedTableData = [...tableData];
      updatedTableData.splice(rowIndex, 1);
      setTableData(updatedTableData);
      window.location.reload();
    } catch (error) {
      console.error('Error deleting policy route:', error);
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
      <Modal style={{ backgroundColor:'#F2F2F2', border:'solid 1px black', borderRadius:'7px', height:'340px', width:'320px',
      padding:'8.0px', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
      show={showAddPopup} onHide={() => setShowAddPopup(false)}>
        <Modal.Header>
          <Modal.Title style={{textAlign:'center', margin:'20px'}}>New Policy Route</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form style={{padding:'10px', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}>
            <input style={{padding:'5px', borderRadius:'6px', border:'solid 1px black', margin:"5px"}} type="text" placeholder="Seq#." value={newSeq} onChange={(e) => setNewSeq(e.target.value)} />
            <input style={{padding:'5px', borderRadius:'6px', border:'solid 1px black', margin:"5px"}} type="text" placeholder="Incoming Interface" value={newIncoming} onChange={(e) => setNewIncoming(e.target.value)} />
            <input style={{padding:'5px', borderRadius:'6px', border:'solid 1px black', margin:"5px"}} type="text" placeholder="Outgoing Interface" value={newOutgoing} onChange={(e) => setNewOutgoing(e.target.value)} />
            <input style={{padding:'5px', borderRadius:'6px', border:'solid 1px black', margin:"5px"}} type="text" placeholder="Source" value={newSource} onChange={(e) => setNewSource(e.target.value)} />
            <input style={{padding:'5px', borderRadius:'6px', border:'solid 1px black', margin:"5px"}} type="text" placeholder="Destination" value={newDestination} onChange={(e) => setNewDestination(e.target.value)} />
            <input style={{padding:'5px', borderRadius:'6px', border:'solid 1px black', margin:"5px"}} type="text" placeholder="Hit Count" value={newHit} onChange={(e) => setNewHit(e.target.value)} />
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button style={{ width:'52px', 'height':'27px', position: 'absolute', top: '90%', left: '41%', transform: 'translate(-50%, -50%)'}}
            variant="secondary" onClick={() => setShowAddPopup(false)}>Cancel</Button>
          <Button style={{ width:'52px', 'height':'27px', position: 'absolute', top: '90%', left: '59%', transform: 'translate(-50%, -50%)'}}
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
          setEditedSeq('');
          setEditedIncoming('');
          setEditedOutgoing('');
          setEditedSource('');
          setEditedDestination('');
          setEditedHit('');
        }}
      >
        <Modal.Header>
          <Modal.Title style={{ textAlign: 'center', margin: '20px' }}>Edit Policy Route</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form style={{ padding: '10px', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
            {editRowIndex !== null && (
              <>
                <input style={{ padding: '5px', borderRadius: '6px', border: 'solid 1px black', margin: "5px" }} type="text" placeholder="Seq#." value={editedSeq} onChange={(e) => setEditedSeq(e.target.value)} />
                <input style={{ padding: '5px', borderRadius: '6px', border: 'solid 1px black', margin: "5px" }} type="text" placeholder="Incoming Interface" value={editedIncoming} onChange={(e) => setEditedIncoming(e.target.value)} />
                <input style={{ padding: '5px', borderRadius: '6px', border: 'solid 1px black', margin: "5px" }} type="text" placeholder="Outgoing Interface" value={editedOutgoing} onChange={(e) => setEditedOutgoing(e.target.value)} />
                <input style={{ padding: '5px', borderRadius: '6px', border: 'solid 1px black', margin: "5px" }} type="text" placeholder="Source" value={editedSource} onChange={(e) => setEditedSource(e.target.value)} />
                <input style={{ padding: '5px', borderRadius: '6px', border: 'solid 1px black', margin: "5px" }} type="text" placeholder="Destination" value={editedDestination} onChange={(e) => setEditedDestination(e.target.value)} />
                <input style={{ padding: '5px', borderRadius: '6px', border: 'solid 1px black', margin: "5px" }} type="text" placeholder="Hit Count" value={editedHit} onChange={(e) => setEditedHit(e.target.value)} />
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
                    style={{ backgroundColor: '#FFFCFC', border: "1px solid grey", borderRadius: "5px", marginLeft:'-20px'}}
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
