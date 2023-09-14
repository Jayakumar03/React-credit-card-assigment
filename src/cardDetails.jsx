import { useState } from "react";

export const CardDetails = () => {
  // Card Details
  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [cvc, setCvc] = useState("");

  // Card validation error messages

  const [nameErrorMessage, setnameErrorMessage] = useState(false);
  const [cardNumberErrorMessage, setCardNumberErrorMessage] = useState(false);
  const [cardMonthErrorMessage, setCardMonthErrorMessage] = useState(false);
  const [cardYearErrorMessage, setCardYearErrorMessage] = useState(false);
  const [cvcErrorMessage, setCvcErrorMessage] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    if (cardName.length === 0) {
      setnameErrorMessage(true);
    }

    if (cardNumber.length !== 12) {
      setCardNumberErrorMessage(true);
    }

    if (month.length !== 2) {
      setCardMonthErrorMessage(true);
    }

    if (year.length !== 2) {
      setCardYearErrorMessage(true);
    }

    if (cvc.length !== 3) {
      setCvcErrorMessage(true);
    }
  };

  return (
    // border-dashed border-2 border-sky-500
    <div className=" w-1/3 h-2/4 relative left-[50%] bottom-[90%]">
      <form className=" font-mono flex flex-col gap-5" onSubmit={submitHandler}>
        {/* Card holder name section */}
        <div className="py-1">
          <p>CARDHOLDER NAME</p>
          <input
            className=" border-[1px] border-slate-500 rounded-md w-3/4 py-1 my-1 focus:outline-none focus:border-purple-500    "
            type="text"
            placeholder="Name In Card"
            value={cardName}
            onChange={(e) => {
              setCardName(e.target.value);
              console.log(cardName);
            }}
          ></input>
          {nameErrorMessage ? (
            <label className="block text-red-600">Name is required</label>
          ) : (
            ""
          )}
        </div>

        {/* Card number section */}
        <div className="py-1  ">
          <p>CARD NUMBER</p>
          <input
            className=" border-[1px] border-slate-500 rounded-md w-3/4 py-1 focus:outline-none focus:border-purple-500  "
            type="NUMBER"
            placeholder="CARD NUMBER"
            value={cardNumber}
            onChange={(e) => {
              setCardNumber(e.target.value);
            }}
          ></input>
          {cardNumberErrorMessage ? (
            <label className="block text-red-600 ">
              Card Number is required
            </label>
          ) : (
            ""
          )}
        </div>

        {/* Card details section */}
        <div className="flex  py-1 focus:outline-none focus:border-purple-500 ">
          <p>EXP.DATE</p>
          <p className="w-1/4">(MM.YY)</p>
          <p className="w-1/4 relative left-[7%]">CVC</p>
        </div>

        {/* Card details input section */}

        <div className="flex gap-3 ">
          <input
            className="w-[10%] border-[1px] border-slate-500 rounded-md focus:outline-none focus:border-purple-500"
            type="NUMBER"
            placeholder="MM"
            min={2}
            maxLength="2"
            minLength="2"
            onChange={(e) => {
              setMonth(e.target.value);
            }}
            value={month}
          ></input>
          {cardMonthErrorMessage ? (
            <label className=" block text-red-600 relative right-[10%] top-10 text-xs ">can't be blank</label>
          ) : (
            ""
          )}

          <input
            className="w-[10%] border-[1px] border-slate-500 rounded-md focus:outline-none focus:border-purple-500"
            type="NUMBER"
            placeholder="YY"
            value={year}
            onChange={(e) => {
              setYear(e.target.value);
            }}
          ></input>

          {cardYearErrorMessage ? (
            <label className=" block text-red-600">can't be blank</label>
          ) : (
            ""
          )}
          <input
            className="relative left-[20%] w-[30%] border-[1px] border-slate-500 rounded-md focus:outline-none focus:border-purple-500 "
            type="NUMBER"
            placeholder="e.g. 123"
            value={cvc}
            onChange={(e) => {
              setCvc(e.target.value);
            }}
          ></input>
          {cvcErrorMessage ? (
            <label className=" block text-red-600">Cvc is required</label>
          ) : (
            ""
          )}
        </div>
      </form>

      <button
        className="w-3/4 h-8 border-[1px] bg-purple-700 border-slate-500 rounded-md relative top-8 text-center  hover:bg-violet-800 "
        type="submit"
        onClick={submitHandler}
      >
        Confirm
      </button>
    </div>
  );
};
