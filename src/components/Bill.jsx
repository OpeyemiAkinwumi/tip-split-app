import { FaUser } from "react-icons/fa";

function Bill({
  bill,
  setBill,
  tip,
  setTip,
  numberOfPeople,
  setNumberOfPeople,
  showCustomField,
  setShowCustomField,
}) {
  return (
    <div className="lg:w-[48%] w-full lg:h-full my-5 lg:my-0 space-y-2">
      <div className="space-y-1">
        <h2>Bill</h2>
        <form action="">
          <input
            type="number"
            className=" rounded-md bg-[#c5e4e7ba] h-8 px-2 w-full text-right"
            placeholder="0"
            value={bill}
            onChange={(e) => setBill(+e.target.value)}
          />
        </form>
      </div>

      <div>
        <h2>Select Tip 💰</h2>

        <div className="grid grid-cols-3 grid-rows-2 gap-2">
          <button
            className="bg-[#00494d] text-white px-2 py-1 rounded-md hover:bg-[#26c0ab]"
            onClick={() => setTip(5)}
          >
            5%
          </button>
          <button
            className="bg-[#00494d] text-white px-2 py-2 rounded-md hover:bg-[#26c0ab]"
            onClick={() => setTip(10)}
          >
            10%
          </button>
          <button
            className="bg-[#00494d] text-white px-2 py-2 rounded-md hover:bg-[#26c0ab]"
            onClick={() => setTip(15)}
          >
            15%
          </button>
          <button
            className="bg-[#00494d] text-white px-2 py-2 rounded-md hover:bg-[#26c0ab]"
            onClick={() => setTip(25)}
          >
            25%
          </button>
          <button
            className="bg-[#00494d] text-white px-2 py-2 rounded-md hover:bg-[#26c0ab]"
            onClick={() => setTip(50)}
          >
            50%
          </button>
          {!showCustomField && (
            <button
              className="bg-[#C5E4E7] text-[#00494d] px-2 py-2 rounded-md hover:bg-[#26c0ab]"
              onClick={() => setShowCustomField(!showCustomField)}
            >
              Custom
            </button>
          )}

          {/* conditionally rendering an element */}

          {showCustomField && (
            <form action="">
              <input
                type="number"
                className="h-full w-full text-right px-2 focus:border-[#26c0ab
] focus:border-2"
                value={tip}
                onChange={(e) => setTip(+e.target.value)}
              />
            </form>
          )}
        </div>
      </div>

      <div className="space-y-1">
        <h2>Number of People</h2>
        <form action="" className="relative">
          <input
            type="number"
            className=" rounded-md bg-[#c5e4e7ba] h-8 px-2 w-full text-right"
            placeholder="0"
            value={numberOfPeople}
            onChange={(e) => setNumberOfPeople(+e.target.value)}
          />
          <FaUser
            size={15}
            className="text-[#729194] absolute left-2 top-0 bottom-0 my-auto "
          />
        </form>
      </div>
    </div>
  );
}

export default Bill;
