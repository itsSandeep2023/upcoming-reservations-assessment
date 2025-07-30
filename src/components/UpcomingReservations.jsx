import Card from "./Card";

const UpcomingReservations = ({ reservations }) => {
  return (
    <div className="reservations">
      {reservations.map((item) => (
        <Card key={item.id} data={item} />
      ))}
    </div>
  );
};

export default UpcomingReservations;
