import React, { useRef, useState } from 'react';
import Barcode from 'react-barcode';
import ReactToPrint from 'react-to-print';

const Example = () => {
  const [value, setValue] = useState(''); // Initial barcode value
  // size: 500mm 250mm;
  const pageStyle = `
    @page {
      size: 500mm 250mm;
    }

    @media all {
      .pageBreak {
        display: none;
      }
    }

    @media print {
      .pageBreak {
        page-break-before: always;
      }
    }
  `;

  const setValueBarcode = () => {
    setValue('PS-2023-000001-A');
  };

  const ref = useRef();
  return (
    <div>
      <div className=''>Barcode</div>
      <div ref={ref}>
        <div className=''>
          <Barcode
            value={value}
            format='CODE128'
            width={1.8}
            height={90}
            marginLeft={10}
            // ref={ref}
          />
        </div>
        <div className=''>
          <Barcode
            value={value}
            format='CODE128'
            width={1.8}
            height={90}
            // ref={ref}
          />
        </div>
      </div>
      <button onClick={setValueBarcode}>Generate Barcode</button>
      <ReactToPrint
        trigger={() => <button>Print</button>}
        content={() => ref.current}
        pageStyle={pageStyle}
      />
    </div>
  );
};

export default Example;
