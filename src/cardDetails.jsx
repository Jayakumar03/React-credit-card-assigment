export const CardDetails = () => {
  return (
    // border-dashed border-2 border-sky-500
    <div className=" w-1/3 h-2/4 relative left-[50%] bottom-[90%]">
      <form className=" font-mono flex flex-col gap-5">
        {/* Card holder name section */}
        <div className="py-1">
          <p>CARDHOLDER NAME</p>
          <input
            className=" border-[1px] border-slate-500 rounded-md w-3/4 py-1 my-1 focus:outline-none focus:border-purple-500    "
            type="text"
            placeholder="Name In Card"
          ></input>
        </div>

        {/* Card name section */}
        <div className="py-1  ">
          <p>CARD NUMBER</p>
          <input
            className=" border-[1px] border-slate-500 rounded-md w-3/4 py-1 focus:outline-none focus:border-purple-500  "
            type="NUMBER"
            placeholder="CARD NUMBER"
          ></input>
        </div>

        {/* Card details section */}
        <div className="flex  py-1 focus:outline-none focus:border-purple-500 ">
          <p >EXP.DATE</p>
          <p className="w-1/4">(MM.YY)</p>
          <p className="w-1/4 relative left-[7%]">CVC</p>
        </div>

        {/* Card details input section */}

        <div className="flex gap-3 ">
          <input
            className="w-[10%] border-[1px] border-slate-500 rounded-md focus:outline-none focus:border-purple-500"
            type="NUMBER"
            placeholder="MM"
          ></input>
          <input
            className="w-[10%] border-[1px] border-slate-500 rounded-md focus:outline-none focus:border-purple-500"
            type="NUMBER"
            placeholder="YY"
          ></input>
          <input
            className="relative left-[20%] w-[30%] border-[1px] border-slate-500 rounded-md focus:outline-none focus:border-purple-500 "
            type="NUMBER"
            placeholder="e.g. 123"
          ></input>
        </div>
      </form>

      <button
        className="w-3/4 h-8 border-[1px] bg-purple-700 border-slate-500 rounded-md relative top-8 text-center  hover:bg-violet-800 "
        type="submit"
      >
        Confirm
      </button>
    </div>
  );
};
