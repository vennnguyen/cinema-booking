// import React, { useEffect } from 'react'
// import useSeatStore from '../../stores/seat';



// type Props = {
//   startTime: string;
//   roomId: number;
// };
// const ChoiceSeat = ({ startTime, roomId }: Props) => {
//     const {seats, fetchSeats} = useSeatStore()
//     useEffect(()=>{
//       fetchSeats(roomId)
//     },[])
//     console.log(seats);
    
//   return (
//     <div>
//         <div className="bg-white px-6 py-4  rounded md:mb-8 mb-4 w-full">
//               <div className="flex gap-30">
//                 <div className="md:col-span-2">
//                   <label className="md:text-base text-sm font-semibold inline-block mt-2">
//                     Suất chiếu
//                   </label>
//                 </div>
//                 <div className="col-span-8 flex-row gap-4 flex-wrap items-center flex">
//                   <button
//                         className="py-2 px-4 border border-gray-300 rounded text-sm 
//       transition-all duration-300 bg-[#034ea2] text-white active:bg-[#034ea2]"
//                       >
//                         {new Date(startTime).toISOString().substring(11, 16)}
//                       </button>
//                 </div>
//               </div>
//             </div>
//             <div className="bg-white py-4 px-2 rounded md:mb-8 w-full">
//               {/* ghế */}
//               {/* <div className="md:block flex flex-wrap justify-center w-full h-full overflow-auto">
//                 <ul className="seat__layout-rows w-full max-w-4xl grid gri gap-3">
//                   {seats.map((seat) => {
//                     return (
//                       <li className="flex items-center justify-between">
//                         <div className="text-sm text-gray-500 font-semibold w-5 text-center">
//                           {seat.name}
//                         </div>
//                         <div className="flex flex-1 justify-center gap-1 md:gap-2">
//                           {seat.seats.map((s, i) => {
//                             if (s.type !== 2) {
//                               return (
//                                 <button
//                                   key={i}
//                                   className={`text-xs md:text-sm w-5 border rounded transition duration-200 ease-in-out flex items-center justify-center gap-1 border-[rgb(208,208,208)] hover:bg-[rgb(245,128,32)] hover:border-[rgb(245,128,32)`}
//                                >
//                                   {s.status === 1 ? (
//                                     <img
//                                       src="/images/thumbnail-shopeepay-logo.png"
//                                       alt="sold"
//                                       height={20}
//                                       width={20}
//                                     />
//                                   ) : (
//                                     <span 
//   className={`inline-block text-center text-[12px] w-full leading-5
//     `}
// >
//   {s.id}
// </span>
//                                   )}
//                                 </button>
//                               );
//                             }
//                             // chỉ render ghế đầu của cặp
//                             if (i % 2 !== 0) return null;

//                             const nextSeat = seat.seats[i + 1];

//                             return (
//                               <button
//                                 key={i}
//                                 className="text-xs md:text-sm w-12 border rounded flex items-center justify-center border-[rgb(3,78,162)] hover:bg-[rgb(245,128,32)] hover:border-[rgb(245,128,32)]"
//                                 style={{ height: "20px" }}
//                               >
//                                 <div className="flex justify-around w-full items-center">
//                                   {s.status === 1 ? (
//                                     <>
//                                       <img
//                                         src="/images/thumbnail-shopeepay-logo.png"
//                                         alt="sold"
//                                         height={20}
//                                         width={20}
//                                       />
//                                       <img
//                                         src="/images/thumbnail-shopeepay-logo.png"
//                                         alt="sold"
//                                         height={20}
//                                         width={20}
//                                       />
//                                     </>
//                                   ) : (
//                                     <>
//                                       <span className="text-[12px]">
//                                         {s.id}
//                                       </span>
//                                       <span className="text-[12px]">
//                                         {nextSeat?.id}
//                                       </span>
//                                     </>
//                                   )}
//                                 </div>
//                               </button>
//                             );
//                           })}
//                         </div>

//                         <div className="text-sm text-gray-500 font-semibold w-5 text-center">
//                           {seat.name}
//                         </div>
//                       </li>
//                     );
//                   })}
//                 </ul>
//               </div> */}
//               {/* ghế */}
//               <div className="md:block flex flex-wrap justify-center w-full h-full overflow-auto">
//                 <ul className="seat__layout-rows w-full max-w-4xl grid gap-3">
                  
//                 </ul>
//               </div>
//               {/* màn hình */}
//               <div className="seat__layout-screen mt-4 md:mt-8">
//                 <p className="text-base text-center text-[rgb(204,204,204)]">
//                   Màn hình
//                 </p>
//                 <div className="border-2 border-[rgb(255,132,85)] mt-3"></div>
//                 <div className="text-sm flex md:flex-row flex-col-reverse justify-between items-center py-9 gap-2">
//                   <div className="flex gap-2">
//                     <div className="flex items-center">
//                       <img
//                         src="/images/thumbnail-shopeepay-logo.png"
//                         alt="sales"
//                         height={20}
//                         width={20}
//                       />
//                       <span className="ml-2">Ghế đã bán</span>
//                     </div>
//                     <div className="">
//                       <span className="w-5 h-5 rounded bg-[rgb(245,128,32)] inline-block align-middle"></span>
//                       <span className="ml-2">Ghế đang chọn</span>
//                     </div>
//                   </div>
//                   <div className="flex gap-2 flex-wrap md:justify-end justify-center">
//                     <div className="flex items-center">
//                       <span className="w-5 h-5 rounded border border-[rgb(208,208,208)] inline-block align-middle"></span>
//                       <span className="ml-2">Ghế đơn</span>
//                     </div>
//                     <div className="flex items-center">
//                       <span className="w-[44px] md:w-[48px]  h-5 rounded border border-[rgb(3,78,162)] inline-block align-middle"></span>
//                       <span className="ml-2">Ghế đôi</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//     </div>
//   )
// }

// export default ChoiceSeat
import React, { useEffect, useMemo, useState } from "react";
import useSeatStore from "../../stores/seat";

type Props = {
  startTime: string;
  roomId: number;
};

const formatTime = (timeStr: string) => {
  if (!timeStr) return "";
  if (timeStr.includes(":") && timeStr.length <= 8) return timeStr.slice(0, 5);
  return new Date(timeStr).toLocaleTimeString("vi-VN", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZone: "UTC",
  });
};

const ChoiceSeat = ({ startTime, roomId }: Props) => {
  const { seats, fetchSeats } = useSeatStore();
  const [selectedIds, setSelectedIds] = useState<Set<number>>(new Set());

  useEffect(() => {
    fetchSeats(roomId);
  }, [roomId]);

  const grouped = useMemo(() => {
    return seats.reduce((acc, s) => {
      if (!acc[s.seatRow]) acc[s.seatRow] = [];
      acc[s.seatRow].push(s);
      return acc;
    }, {} as Record<string, typeof seats>);
  }, [seats]);

  const toggle = (ids: number[]) => {
    setSelectedIds((prev) => {
      const next = new Set(prev);
      ids.forEach((id) => (next.has(id) ? next.delete(id) : next.add(id)));
      return next;
    });
  };

  const selectedSeats = seats.filter((s) => selectedIds.has(s.seatId));

  return (
    <div>
      {/* Suất chiếu */}
      <div className="bg-white px-6 py-4 rounded md:mb-8 mb-4 w-full">
        <div className="flex gap-8 items-center">
          <label className="text-sm font-semibold">Suất chiếu</label>
          <button className="py-2 px-4 border border-gray-300 rounded text-sm bg-[#034ea2] text-white">
            {formatTime(startTime)}
          </button>
        </div>
      </div>

      {/* Sơ đồ ghế */}
      <div className="bg-white py-6 px-4 rounded md:mb-8 w-full">
        {/* Màn hình */}
        <div className="flex flex-col items-center mb-8">
          <div className="w-3/5 h-1 bg-[#034ea2] rounded-full opacity-50" />
          <p className="text-xs text-gray-400 mt-2 tracking-widest">Màn hình</p>
        </div>

        {/* Ghế */}
        <div className="flex flex-col items-center gap-1.5 overflow-auto">
          {Object.entries(grouped)
            .sort(([a], [b]) => a.localeCompare(b))
            .map(([row, rowSeats]) => {
              const isCouple = rowSeats[0].seatTypeId === 3;
              const sorted = [...rowSeats].sort((a, b) => a.seatColumn - b.seatColumn);
              const mid = Math.floor(sorted.length / 2);

              return (
                <div key={row} className="flex items-center gap-1">
                  {/* Label trái */}
                  <span className="w-4 text-[11px] text-gray-400 text-center flex-shrink-0">
                    {row}
                  </span>

                  <div className="flex gap-1 items-center">
                    {sorted.map((seat, i) => {
                      if (isCouple && i % 2 !== 0) return null;

                      const next = isCouple ? sorted[i + 1] : null;
                      const ids = isCouple
                        ? ([seat.seatId, next?.seatId].filter(Boolean) as number[])
                        : [seat.seatId];
                      const isBooked = !seat.status;
                      const isSelected = selectedIds.has(seat.seatId);

                      const seatClass = isBooked
                        ? "bg-gray-100 border-gray-200 text-gray-300 cursor-not-allowed"
                        : isSelected
                        ? seat.seatTypeId === 2
                          ? "bg-[#BA7517] border-[#854F0B] text-[#FAEEDA] scale-110"
                          : seat.seatTypeId === 3
                          ? "bg-[#D4537E] border-[#993556] text-[#FBEAF0] scale-105"
                          : "bg-[#034ea2] border-[#023a7a] text-white scale-110"
                        : seat.seatTypeId === 2
                        ? "bg-[#FAEEDA] border-[#EF9F27] text-[#854F0B] hover:bg-[#FAC775]"
                        : seat.seatTypeId === 3
                        ? "bg-[#FBEAF0] border-[#ED93B1] text-[#72243E] hover:bg-[#F4C0D1]"
                        : "bg-white border-gray-300 text-gray-600 hover:border-[#034ea2] hover:text-[#034ea2]";

                      return (
                        <React.Fragment key={seat.seatId}>
                          {i === mid && <div className="w-3 flex-shrink-0" />}
                          <button
                            disabled={isBooked}
                            onClick={() => toggle(ids)}
                            title={`${seat.seatRow}${seat.seatColumn}`}
                            className={`
                              h-7 rounded-t-md rounded-b-sm border-[1.5px] text-[10px] font-medium
                              transition-all duration-150 flex-shrink-0
                              ${isCouple ? "w-16" : "w-7"}
                              ${seatClass}
                            `}
                          >
                            {isCouple
                              ? `${seat.seatColumn}·${next?.seatColumn ?? ""}`
                              : seat.seatColumn}
                          </button>
                        </React.Fragment>
                      );
                    })}
                  </div>

                  {/* Label phải */}
                  <span className="w-4 text-[11px] text-gray-400 text-center flex-shrink-0">
                    {row}
                  </span>
                </div>
              );
            })}
        </div>

        {/* Chú thích */}
        <div className="mt-8 pt-4 border-t border-gray-100 flex md:flex-row flex-col-reverse justify-between items-center gap-3">
          <div className="flex gap-4 flex-wrap justify-center">
            <div className="flex items-center gap-1.5">
              <span className="w-5 h-5 rounded bg-gray-100 border border-gray-200 inline-block" />
              <span className="text-xs text-gray-500">Đã bán</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-5 h-5 rounded bg-[#034ea2] inline-block" />
              <span className="text-xs text-gray-500">Đang chọn</span>
            </div>
          </div>
          <div className="flex gap-4 flex-wrap justify-center">
            <div className="flex items-center gap-1.5">
              <span className="w-5 h-5 rounded border border-gray-300 bg-white inline-block" />
              <span className="text-xs text-gray-500">Ghế đơn</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-5 h-5 rounded bg-[#FAEEDA] border border-[#EF9F27] inline-block" />
              <span className="text-xs text-gray-500">VIP</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-10 h-5 rounded border border-[#ED93B1] bg-[#FBEAF0] inline-block" />
              <span className="text-xs text-gray-500">Ghế đôi</span>
            </div>
          </div>
        </div>

        {/* Tóm tắt ghế đã chọn */}
        {selectedSeats.length > 0 && (
          <div className="mt-4 p-3 bg-gray-50 rounded-lg flex items-center justify-between">
            <div>
              <p className="text-xs text-gray-400">Đã chọn</p>
              <p className="text-sm font-semibold text-gray-700">
                {selectedSeats.map((s) => `${s.seatRow}${s.seatColumn}`).join(", ")}
                <span className="ml-2 text-xs font-normal text-gray-400">
                  ({selectedSeats.length} ghế)
                </span>
              </p>
            </div>
            <button className="py-2 px-5 bg-[#034ea2] text-white text-sm rounded transition hover:bg-[#023a7a]">
              Tiếp tục
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChoiceSeat;