import React, { useRef, useState } from 'react';
import Barcode from 'react-barcode';
import ReactToPrint, { useReactToPrint } from 'react-to-print';
const BarcodeComponent = ({ cases, handlePrint, comonentRef }) => {
  const [value, setValue] = useState(''); // Initial barcode value

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

  return (
    <div>
      <div ref={comonentRef}>
        <div className='' style={{ textAlign: 'center', marginTop: '10px' }}>
          <Barcode
            value={'PS-2023-000012-A'}
            format='CODE128'
            width={1.4}
            height={75}
          />
        </div>

        <div></div>
      </div>{' '}
      {/* Ref Ended Here Print Block ended */}
    </div>
  );
};

export default BarcodeComponent;
