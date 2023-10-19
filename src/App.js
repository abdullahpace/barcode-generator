import { useEffect, useRef } from 'react';
import BarcodeComponent from './Components/BarcodeComponent';
import BarcodeGenerator from './Components/BarcodeGenerator';
import EPID from './Components/EPID';
import Example from './Components/Example';
import cases from './Components/cases';
import ReactToPrint, { useReactToPrint } from 'react-to-print';
import FormComponent from './Components/FormComponent';
import MultiSelect from './Components/MultiSelect';
import ParentComponent from './Components/ParentComponent';
function App() {
  const barcodeComponentRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => barcodeComponentRef.current,
    // pageStyle: pageStyle,
  });

  // const handleChange = (selectedValues) => {
  //   setSelectedOptions(selectedValues);
  // };
  // useEffect(() => {
  //   handlePrint();
  // }, []);
  return (
    <div className='container'>
      {/* <BarcodeGenerator /> */}
      {/* <Example /> */}
      {/* <EPID /> */}
      {/* <FormComponent /> */}

      {/* <ParentComponent /> */}

      <BarcodeComponent
        cases={cases}
        comonentRef={barcodeComponentRef}
        handlePrint={handlePrint} // Pass the handlePrint function as a prop
      />
    </div>
  );
}

export default App;
