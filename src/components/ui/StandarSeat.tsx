// components/StandardSeat.tsx
// import { useBookingStore } from "../../stores/product";
import { SeatStatus } from "../../types/seat.d"
import type { Seat } from "../../types/seat.d"

const SOLD_IMG = "/images/thumbnail-shopeepay-logo.png";

export const StandardSeat = ({ seat }: { seat: Seat }) => {
  // const { selectedSeats, toggleSeat } = useBookingStore();

  const isSold = seat.status === SeatStatus.Booked;
  // const isSelected = selectedSeats.some((s) => s.id === seat.id);

  return (
    <button
      disabled={isSold}
      // onClick={() => toggleSeat(seat)}
      className={`
        text-xs md:text-sm w-5 h-5 border rounded transition duration-200 ease-in-out
        flex items-center justify-center
        ${isSold
          ? "border-gray-300 cursor-not-allowed opacity-60"
          
            : "border-[rgb(208,208,208)] hover:bg-[rgb(245,128,32)] hover:border-[rgb(245,128,32)]"
        }
      `}
    >
      {isSold ? (
        <img src={SOLD_IMG} alt="sold" height={20} width={20} />
      ) : (
        <span className="inline-block text-center text-[12px] w-full leading-5">
          {seat.id}
        </span>
      )}
    </button>
  );
};