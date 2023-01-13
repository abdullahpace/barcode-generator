import React, { useState } from "react";
import Barcode from "react-barcode";
import { Modal } from "react-bootstrap";
import "./../App.css";
const BarcodeGenerator = () => {
  const [text, setText] = useState();
  const [gb, setGb] = useState();
  const [eid, setEid] = useState();
  const [imei, setImei] = useState();
  const [imeid, setImeid] = useState();
  const [upc, setUpc] = useState();
  const [iccid, setIccid] = useState();
  const [serialno, setSerialNo] = useState();
  //
  const [barcode, setBarcode] = useState();
  const [barcode1, setBarcode1] = useState();
  const [barcode2, setBarcode2] = useState();
  const [barcode3, setBarcode3] = useState();
  const [barcode4, setBarcode4] = useState();
  const [barcode5, setBarcode5] = useState();
  const [barcode6, setBarcode6] = useState();
  const [barcode7, setBarcode7] = useState();

  const [show, setShow] = useState(false);
  // const handleChange = (e) => {
  //   setText(e.target.value);
  // };
  const generateBarCode = (e) => {
    e.preventDefault();
    setShow(true);
    setBarcode(text);
    setBarcode1(gb);
    setBarcode2(eid);
    setBarcode3(imei);
    setBarcode4(serialno);
    setBarcode5(imeid);
    setBarcode6(upc);
    setBarcode7(iccid);
  };
  const handleClose = () => {
    setShow(false);
  };
  return (
    <div>
      <div className='container'>
        <div className='row text-center bg-green p-2 mb-1'>
          <h1 className='text-center'>Barcode</h1>
        </div>
        <Modal className='modal-lg modal-dialog-centered edit-invitation-form' show={show} onHide={handleClose}>
          <Modal.Header className=''>
            <h4>BarCodes</h4>
            <button className='btn btn-danger' onClick={handleClose}>
              X
            </button>
          </Modal.Header>
          <div className='container'>
            <div className='row'>
              <div className='card mb-1'>
                <div className='row'>
                  <div className='col-sm-6'>
                    <p>
                      {barcode} /{barcode1}
                    </p>
                    <p>Designed by Apple in California Assembled in China</p>
                    <p className='barcode-height'>
                      EID
                      <Barcode value={barcode2} />
                    </p>
                    <p className='barcode-height'>
                      IMEI2
                      <Barcode value={barcode3} />
                    </p>
                    <p className='barcode-height'>
                      (S) Serial No.
                      <Barcode value={barcode4} />
                    </p>
                    <p className='barcode-height'>
                      IMEI/MEID
                      <Barcode value={barcode5} />
                    </p>
                  </div>
                  <div className='col-sm-6'>
                    <p className='barcode-height'>
                      UPC
                      <Barcode value={barcode6} />
                    </p>
                    <p className='barcode-height'>
                      ICCID
                      <Barcode value={barcode7} />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal>
        <div className='row  p-3 mt-1'>
          <div className='col-md-8 mx-auto'>
            <div className='card p-2'>
              <h3>Generate Bar code</h3>
              <form action=''>
                <div className='row mb-1'>
                  <div className='col-sm-2'>
                    <label htmlFor=''>IPhone Model</label>
                  </div>
                  <div className='col-sm-10'>
                    <input type='text' value={text} name='text' className='form-control' onChange={(e) => setText(e.target.value)} />
                  </div>
                </div>
                <div className='row mb-1'>
                  <div className='col-sm-2'>
                    <label htmlFor=''>GB</label>
                  </div>
                  <div className='col-sm-10'>
                    <input type='text' value={gb} name='text' className='form-control' onChange={(e) => setGb(e.target.value)} />
                  </div>
                </div>
                <div className='row mb-1'>
                  <div className='col-sm-2'>
                    <label htmlFor=''>Eid</label>
                  </div>
                  <div className='col-sm-10'>
                    <input type='text' value={eid} name='eid' className='form-control' onChange={(e) => setEid(e.target.value)} />
                  </div>
                </div>
                <div className='row mb-1'>
                  <div className='col-sm-2'>
                    <label htmlFor=''>IMEI2</label>
                  </div>
                  <div className='col-sm-10'>
                    <input type='text' value={imei} name='imei' className='form-control' onChange={(e) => setImei(e.target.value)} />
                  </div>
                </div>
                <div className='row mb-1'>
                  <div className='col-sm-2'>
                    <label htmlFor=''>Serial No</label>
                  </div>
                  <div className='col-sm-10'>
                    <input type='text' value={serialno} name='serialno' className='form-control' onChange={(e) => setSerialNo(e.target.value)} />
                  </div>
                </div>
                <div className='row mb-1'>
                  <div className='col-sm-2'>
                    <label htmlFor=''>IMEI/MEID</label>
                  </div>
                  <div className='col-sm-10'>
                    <input type='text' value={imeid} name='imei' className='form-control' onChange={(e) => setImeid(e.target.value)} />
                  </div>
                </div>
                <div className='row mb-1'>
                  <div className='col-sm-2'>
                    <label htmlFor=''>UPC</label>
                  </div>
                  <div className='col-sm-10'>
                    <input type='text' value={upc} name='imei' className='form-control' onChange={(e) => setUpc(e.target.value)} />
                  </div>
                </div>
                <div className='row mb-1'>
                  <div className='col-sm-2'>
                    <label htmlFor=''>ICCID</label>
                  </div>
                  <div className='col-sm-10'>
                    <input type='text' value={iccid} name='imei' className='form-control' onChange={(e) => setIccid(e.target.value)} />
                  </div>
                </div>

                <div className='row'>
                  <div className='col-sm-12 text-end'>
                    <button className='btn btn-success ' onClick={generateBarCode}>
                      Generate Code
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BarcodeGenerator;

// <div className='row'>
//            <Barcode value={barcode} />
//          </div>
//          <div className='row'>
//            <Barcode value={barcode1} />
//          </div>
//          <div className='row'>
//            <Barcode value={barcode2} />
//          </div>
