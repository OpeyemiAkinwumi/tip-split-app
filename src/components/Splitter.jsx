import { useState } from "react";
import Bill from "./Bill";
import Display from "./Display";

function Splitter() {
  const [bill, setBill] = useState(0);
  const [tip, setTip] = useState(5);
  const [numberOfPeople, setNumberOfPeople] = useState(1);
  const [showCustomField, setShowCustomField] = useState(false);

  return (
    <div className="mt-auto w-full h-[90%] lg:mt-20 lg:w-[600px] lg:h-[300px]  bg-white rounded-xl p-5 lg:flex justify-between items-center ">
      <Bill
        bill={bill}
        setBill={setBill}
        tip={tip}
        setTip={setTip}
        numberOfPeople={numberOfPeople}
        setNumberOfPeople={setNumberOfPeople}
        showCustomField={showCustomField}
        setShowCustomField={setShowCustomField}
      />
      <Display
        bill={bill}
        setBill={setBill}
        tip={tip}
        setTip={setTip}
        numberOfPeople={numberOfPeople}
        setNumberOfPeople={setNumberOfPeople}
        showCustomField={showCustomField}
        setShowCustomField={setShowCustomField}
      />
    </div>
  );
}

export default Splitter;
