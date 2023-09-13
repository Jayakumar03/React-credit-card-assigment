export const CardDetails = () => {
  return (
    // border-dashed border-2 border-sky-500
    <div className=" w-1/3 h-2/4 relative left-[60%] bottom-[90%]">
      <form className=" font-mono flex flex-col gap-5">
        <div className="py-1">
          <p>CARDHOLDER NAME</p>
          <input
            className=" border-[1px] border-slate-500 rounded-md w-[100%] py-1 my-1 focus:outline-none focus:border-red-500 focus:ring-3 focus:ring-sky-500   "
            type="text"
            placeholder="Name In Card"
          ></input>
        </div>
        <div className="py-1  ">
          <p>CARD NUMBER</p>
          <input
            className=" border-[1px] border-slate-500 rounded-md w-[100%] py-1 focus:outline-none focus:border-red-500 focus:ring-3 focus:ring-sky-500  "
            type="NUMBER"
            placeholder="CARD NUMBER"
          ></input>
        </div>
        <div className="flex py-1 gap-3 justify-between focus:outline-none focus:border-red-500 focus:ring-3 focus:ring-sky-500  ">
          <p className="w-1/4">EXP.DATE</p>
          <p className="w-1/4">(MM.YY)</p>
          <p className="w-1/4">CVC</p>
        </div>

        <div className="flex gap-3 justify-between">
          <input
            className="w-1/4 border-[1px] border-slate-500 rounded-md focus:outline-none focus:border-red-500 focus:ring-3 focus:ring-sky-500 "
            type="NUMBER"
            placeholder="MM"
          ></input>
          <input
            className="w-1/4 border-[1px] border-slate-500 rounded-md focus:outline-none focus:ring focus:ring-red-300"
            type="NUMBER"
            placeholder="YY"
          ></input>
          <input
            className="w-1/4 border-[1px] border-slate-500 rounded-md focus:outline-none focus:border-red-500 focus:ring-3 focus:ring-sky-500 "
            type="NUMBER"
            placeholder="e.g. 123"
          ></input>
        </div>
      </form>

      <button
        className="w-[100%] h-8 border-[1px] bg-purple-700 border-slate-500 rounded-md focus:outline-none hover:bg-white-600 focus:border-red-500 focus:ring-3 focus:ring-sky-500 relative top-8 text-center"
        type="submit"
      >
        Confirm
      </button>
    </div>
  );
};
