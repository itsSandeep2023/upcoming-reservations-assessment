const Card = ({ data }) => {
  const color = data.status === "Confirmed" ? "#16a34a" : "#facc15";

  const handleOnCancel = (id) => {
    console.log("Cancel reservation:", id);
  };
  return (
    <div className="card xl:flex-row">
      <div className="card-left">
        <h1 className="text-2xl xs:text-3xl sm:text-5xl xl:text-6xl">
          {data.venueName}
        </h1>
        <div className="card-details sm:flex-row xl:text-2xl ">
          <h2>{data.date}</h2>
          <h2>{data.time}</h2>
          <h2>Party of {data.partySize}</h2>
        </div>
      </div>
      <div className="card-right sm:flex-row">
        <div className="font-semibold" style={{ color: color }}>
          {data.status}
        </div>
        <button
          onClick={() => handleOnCancel(data.id)}
          className="py-2 px-5 rounded-xl bg-red-500 cursor-pointer"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default Card;
