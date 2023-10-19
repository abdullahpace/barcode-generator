import React, { useRef, useState } from 'react';
import Barcode from 'react-barcode';
import ReactToPrint, { useReactToPrint } from 'react-to-print';
const BarcodeComponent = ({ cases, handlePrint, comonentRef }) => {
  const [value, setValue] = useState(''); // Initial barcode value
  function formatDate(dateString) {
    const months = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ];

    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth(); // 0-indexed
    const year = date.getFullYear().toString().slice(-2); // Get the last two digits of the year
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const dayString = String(day).padStart(2, '0');
    const monthString = months[month];
    const timeString = `${hours}:${String(minutes).padStart(2, '0')}:${String(
      seconds
    ).padStart(2, '0')}`;

    const formattedDateTime = `${dayString}-${monthString}-${year} `;

    return formattedDateTime;
  }

  const pageStyle = `
  @page {
    size: 500mm 250mm;
  }


  @media print {
    .pageBreak {
      page-break-after: always;
    }
  }
`;

  return (
    <div>
      <div ref={comonentRef}>
        <div
          className='pageBreak'
          style={{
            textAlign: 'center',
            marginTop: '20px',
            position: 'relative',
          }}
        >
          <span
            className=''
            style={{
              position: 'absolute',
              top: '-20px',
            }}
          >
            <span className='ms-4'>Stool</span>
            <span className='ms-5'>{formatDate(cases.created_at)}</span>
          </span>
          <Barcode
            value={cases.lab_no}
            format='CODE128'
            width={1.4}
            height={50}
          />
          {/* <span style={{ display: 'block', textAlign: 'center' }}>
            {formatDate(cases.created_at)}
          </span> */}
        </div>
        {cases.stoolsamples.map((sample) => (
          <div
            className='pageBreak'
            style={{
              textAlign: 'center',
              marginTop: '20px',
              position: 'relative',
            }}
          >
            <span
              className=''
              style={{
                position: 'absolute',
                top: '-20px',
              }}
            >
              <span className='ms-4'>Stool</span>
              <span className='ms-5'>{formatDate(sample.received_on)}</span>
            </span>
            <Barcode
              value={sample.lab_id}
              format='CODE128'
              PS-2023-2
              width={1.2}
              height={50}
            />
          </div>
        ))}
        <div>
          <div className='card address-print-card'>
            <p>
              {' '}
              <strong> TO: </strong> DHO Office Sanghar in the Premises of Civil
              Hospital Shahdad pur Road
            </p>
            <p className='p-text'> SANGHAR SINDH </p>
            <p> Dr Tayyab DSC 007</p>
          </div>
        </div>
      </div>{' '}
      {/* Ref Ended Here Print Block ended */}
      <div className='d-flex justify-content-center mt-2'>
        <button className='btn btn-primary' onClick={handlePrint}>
          Print
        </button>
      </div>
    </div>
  );
};

export default BarcodeComponent;
