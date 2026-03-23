// components/CoupleSeat.tsx
// import { useBookingStore } from "../../stores/product";
import { SeatStatus } from "../../types/seat.d"
import type { Seat } from "../../types/seat.d"


const SOLD_IMG = "/images/thumbnail-shopeepay-logo.png";

export const CoupleSeat = ({
  seat,
  nextSeat,
}: {
  seat: Seat;
  nextSeat?: Seat;
}) => {
  // const { selectedSeats, toggleSeat } = useBookingStore();

  const isSold = seat.status === SeatStatus.Booked;
  // const isSelected = selectedSeats.some((s) => s.id === seat.id);

  return (
    <button
      disabled={isSold}
      // onClick={() => toggleSeat(seat)}
      style={{ height: "20px" }}
      className={`
        text-xs md:text-sm w-12 border rounded
        flex items-center justify-center transition duration-200 ease-in-out
        ${isSold
          ? "border-gray-300 cursor-not-allowed opacity-60"
          
            : "border-[rgb(3,78,162)] hover:bg-[rgb(245,128,32)] hover:border-[rgb(245,128,32)]"
        }
      `}
    >
      <div className="flex justify-around w-full items-center">
        {isSold ? (
          <>
            <img src={SOLD_IMG} alt="sold" height={20} width={20} />
            <img src={SOLD_IMG} alt="sold" height={20} width={20} />
          </>
        ) : (
          <>
            <span className="text-[12px]">{seat.id}</span>
            <span className="text-[12px]">{nextSeat?.id}</span>
          </>
        )}
      </div>
    </button>
  );
};