import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
      toast.error("🦄 card Name is required!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }

    if (cardNumber.length !== 12) {
      setCardNumberErrorMessage(true);
      toast.error("🦄 Card Number  is required!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }

    if (month.length !== 2) {
      setCardMonthErrorMessage(true);
      toast.error("🦄 Card Month  is required!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }

    if (year.length !== 2) {
      setCardYearErrorMessage(true);
      toast.error("🦄 Card Year  is required!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }

    if (cvc.length !== 3) {
      setCvcErrorMessage(true);
      toast.error("🦄 Card Cvc  is required!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }

    toast("Wow Eveything is correct");
    setCardName("");
    setCardNumber("");
    setMonth("");
    setYear("");
    setCvc("");
  };

  return (
    <div className=" w-1/3 h-2/4 relative left-[50%] bottom-[90%]">
      <form className=" font-mono flex flex-col gap-5" onSubmit={submitHandler}>
        {/* Card holder name section */}
        <div className="py-1">
          <p>CARDHOLDER NAME</p>
          <input
            className={`border-[1px] border-slate-500 rounded-md w-3/4 py-1 my-1 focus:outline-none focus:border-purple-500
            ${
              nameErrorMessage
                ? "outline outline-1 outline-red-500 border:none focus:border:none"
                : ""
            }`}
            type="text"
            placeholder="Name In Card"
            value={cardName}
            onChange={(e) => {
              setCardName(e.target.value);
              setnameErrorMessage(false);
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
            className={`border-[1px] border-slate-500 rounded-md w-3/4 py-1 focus:outline-none focus:border-purple-500
            ${
              cardNumberErrorMessage
                ? "outline outline-1 outline-red-500 border:none focus:border:none"
                : ""
            } `}
            type="NUMBER"
            placeholder="CARD NUMBER"
            value={cardNumber}
            onChange={(e) => {
              setCardNumber(e.target.value);
              setCardNumberErrorMessage(false);
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
        <div className="flex focus:outline-none focus:border-purple-500 ">
          <p>EXP.DATE</p>
          <p className="w-1/4">(MM.YY)</p>
          <p className="w-1/4 relative left-[7%]">CVC</p>
        </div>

        {/* Card details input section */}
        <div className="flex gap-3 -mt-3">
          <input
            className={`w-[10%] border-[1px] border-slate-500 rounded-md focus:outline-none focus:border-purple-500  
            ${
              cardMonthErrorMessage
                ? "outline outline-1 outline-red-500 border:none focus:border:none"
                : ""
            }`}
            type="NUMBER"
            placeholder="MM"
            min={2}
            maxLength="2"
            minLength="2"
            onChange={(e) => {
              setMonth(e.target.value);
              setCardMonthErrorMessage(false);
            }}
            value={month}
          ></input>

          <input
            className={`w-[10%] border-[1px] border-slate-500 rounded-md focus:outline-none focus:border-purple-500
            ${
              cardYearErrorMessage
                ? "outline outline-1 outline-red-500 border:none focus:border:none"
                : ""
            }`}
            type="NUMBER"
            placeholder="YY"
            value={year}
            onChange={(e) => {
              setYear(e.target.value);
              setCardYearErrorMessage(false);
            }}
          ></input>

          <input
            className={`relative left-[20%] w-[30%] border-[1px] border-slate-500 rounded-md focus:outline-none focus:border-purple-500
            ${
              cvcErrorMessage
                ? "outline outline-1 outline-red-500 border:none focus:border:none"
                : ""
            }`}
            type="NUMBER"
            placeholder="e.g. 123"
            value={cvc}
            onChange={(e) => {
              setCvc(e.target.value);
              setCvcErrorMessage(false);
            }}
          ></input>
        </div>
      </form>

      {/* Error messages */}
      <div
        className={`${
          cardMonthErrorMessage || cardYearErrorMessage || cvcErrorMessage
            ? " w-3/4 h-10 my-3 flex"
            : ""
        }`}
      >
        <div className="flex gap-2 ">
          {cardMonthErrorMessage ? (
            <p className="text-red-600 text-md ">can't be blank</p>
          ) : (
            ""
          )}

          {cardYearErrorMessage ? (
            <p className="text-red-600 text-md ">can't be blank</p>
          ) : (
            ""
          )}
        </div>

        {cvcErrorMessage ? (
          <p className=" block text-red-600 relative left-[60%] ">
            Cvc is required
          </p>
        ) : (
          ""
        )}
      </div>

      <button
        className={`w-3/4 h-8 border-[1px] bg-purple-700 border-slate-500 rounded-md relative top-[5%] text-center 
        hover:animate-pulse transition ease-in-out delay-150
        ${cardYearErrorMessage ? "top-0" : "bg-purple-700"}`}
        type="submit"
        onClick={submitHandler}
      >
        Confirm
      </button>


      {/* React -toastify */}
      <ToastContainer />
    </div>
  );
};
