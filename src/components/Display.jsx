import { FaDollarSign } from "react-icons/fa";

function Display({
  tip,
  setTip,
  bill,
  setBill,
  numberOfPeople,
  setNumberOfPeople,
  showCustomField,
  setShowCustomField,
}) {
  const tipPercent = (bill * tip) / 100;
  const tipPerPerson = tipPercent / numberOfPeople;

  const totalAmount = bill + tipPercent;
  const amountPerPerson = totalAmount / numberOfPeople;

  function handleClick() {
    setBill(0);
    setTip(5);
    setNumberOfPeople(1);
    setShowCustomField(!showCustomField);
  }

  return (
    <div className="lg:w-[48%] w-full lg:h-full  bg-[#00494d] rounded-xl pt-7 pb-5 px-5 flex flex-col items-start justify-start ">
      <div className="flex justify-between items-center mb-5 w-full ">
        <div>
          <p className="text-white text-xs font-medium">Tip amount</p>
          <p className="text-[#4d7074] text-xs font-semibold">/ person</p>
        </div>
        <h1 className="text-[#26C0AB] flex justify-end items-center font-bold text-3xl">
          <span>
            <FaDollarSign size={20} />
          </span>
          {tipPerPerson.toFixed(2)}
        </h1>
      </div>

      <div className="flex justify-between items-center mb-5 w-full ">
        <div>
          <p className="text-white text-xs font-medium">Total</p>
          <p className="text-[#4d7074] text-xs font-semibold">/ person</p>
        </div>
        <h1 className="text-[#26C0AB] flex justify-end items-center font-bold text-3xl">
          <span>
            <FaDollarSign size={20} />
          </span>
          {amountPerPerson.toFixed(2)}
        </h1>
      </div>

      <button
        className="w-full h-8 bg-[#4d7074] text-[#00494d] font-bold mt-auto rounded-md hover:bg-[#26c0ab]"
        onClick={handleClick}
      >
        RESET
      </button>
    </div>
  );
}

export default Display;
