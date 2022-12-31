import React, { useState } from "react"
import TableCSV from './TableCSV';
import TableUpdate from './TableUpdate';
import Papa from "papaparse";
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Navbar from "./Navbar";
import { FaEdit } from 'react-icons/fa';
import { BiArrowBack } from 'react-icons/bi'

const Filter = () => {

  const [filter, setFilter] = useState("");
  const [csvFile, setCsvFile] = useState([]);
  const [operation, setOperation] = useState([]);
  const [show, setShow] = useState(false);
  const [alert, setAlert] = useState(false);

  const uploadFun = (e) => {
    const files = e.target.files;
    console.log(files);
    if (files) {
      Papa.parse(files[0], {
        complete: function (results) {
          setCsvFile(results.data);
          console.log("Finished:", results.data);
        }
      }
      )
    }
  }
  const handleFilter = () => {
    const data = filter.split(" ").join("").toLowerCase();
    setOperation(data.split(","));
    console.log(csvFile[0].length > parseInt(operation[1]));
    if ((operation[0] === "split" || operation[0]==="padd") && (csvFile[0].length > parseInt(operation[1]))
    && operation.length>3 && operation.length<5) {
      setShow(true);
      setAlert(false);
    } else {
      setAlert(true);
    }
  }


  return (
    <div className="mainSection d-flex align-items-stretch">
      <section className="leftSection">
        <div className="fixedDiv fixed-top">
          <div className="card">
            <h4>User Controls</h4>
            <div>
              <h4><BiArrowBack /> Input for Padding and Split Function</h4>
              <p>Enter the Feature Hanle Which You Want to Add Padding. Eg: Hrid, Hrid_new, 4</p>
              <input type="text"
                value={filter}
                className="inputFilter"
                onInput={(e) => setFilter(e.target.value)}
                placeholder='SPLIT, Col_num, Hrid_new, 4' />
              <Button variant={"secondary"} onClick={handleFilter}>ADD</Button>
            </div>
            <div>
              <h4><FaEdit /> Add Left Padding =</h4>
              <p>Feature Name, Name for New Feature, No of Padding You Want.</p>
            </div>
            <div>
              <h4><FaEdit /> Sub String =</h4>
              <p>Feature Name, Name for New Splitted Feature, Starting Number From Where You Want Split, Number From Where You Want to Stop Split</p>
            </div>
          </div>
          <div className="logo-holder logo-5">
            <h3>Nikhil</h3>
            <p>MERN Stack Developer</p>
          </div>
        </div>
      </section>
      <section className="rightSection position-relative">
        <Navbar />
        <div className="table-content py-4 px-md-3">
          <div className="container-fluid mb-lg-5">
          {
            alert &&
            <Alert variant="danger">
              Please enter correct fields
            </Alert>
          }
          <div className="upload-container">
          <div className="upload-btn-wrapper">
            <button className="btnUpload">Browse file</button>
            <input
              name="myfile"
              type="file"
              accept=".csv,.xlsx,.xls"
              onChange={uploadFun}
            />
          </div>
          </div>
          <div className="text-center text-sm-left mb-4">
          <div className="tableShow">
            <TableCSV csvFile={csvFile} />
            {show ? <TableUpdate show={show} operation={operation} filterApply={filter} csvFile={csvFile} /> : ""}
            </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Filter
