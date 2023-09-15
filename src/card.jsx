import { CardDetails } from "./cardDetails";

const Card = () => {
  return (
    <div className="h-screen bg-white">
      <img
        className="h-screen w-1/4"
        src="./images/bg-main-desktop.png"
        alt="background-gragient"
        loading="lazy"
      ></img>

      <div className="w-3/12 h-1/5 relative left-[10%] bottom-3/4">
        <div>
          <img
            className="relative right-[20%] "
            src="/images/bg-card-front.png"
            alt="credit card front img"
            loading="lazy"
          ></img>
        </div>

        <img
          className="relative left-[10%] top-10 "
          src="/images/bg-card-back.png"
          alt="credit card back img"
          loading="lazy"
        ></img>
      </div>

      <CardDetails />
    </div>
  );
};

export default Card;
