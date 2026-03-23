import React from 'react'
import { RowLabel } from "../../components/ui/RowLabel";
import { CoupleSeat } from "../../components/ui/CoupleSeat";
import { StandardSeat } from "../../components/ui/StandarSeat";
import { SeatType } from "../../types/seat.d";
import data from "../../mock.json";
const ChoiceSeat = () => {
    const seats = data.data.rows;
  return (
    <div>
        <div className="bg-white px-6 py-4  rounded md:mb-8 mb-4 w-full">
              <div className="grid md:grid-cols-10 grid-cols-2">
                <div className="md:col-span-2">
                  <label className="md:text-base text-sm font-semibold inline-block mt-2">
                    Các suất chiếu
                  </label>
                </div>
                <div className="col-span-8 flex-row gap-4 flex-wrap items-center flex">
                  {Array(11)
                    .fill("10:00")
                    .map((time, i) => (
                      <button
                        key={i}
                        className="py-2 px-4 border border-gray-300 rounded text-sm text-gray-800
      transition-all duration-300 hover:bg-[#034ea2] hover:text-white active:bg-[#034ea2]"
                      >
                        {time}
                      </button>
                    ))}
                </div>
              </div>
            </div>
            <div className="bg-white py-4 px-2 rounded md:mb-8 w-full">
              {/* ghế */}
              {/* <div className="md:block flex flex-wrap justify-center w-full h-full overflow-auto">
                <ul className="seat__layout-rows w-full max-w-4xl grid gri gap-3">
                  {seats.map((seat) => {
                    return (
                      <li className="flex items-center justify-between">
                        <div className="text-sm text-gray-500 font-semibold w-5 text-center">
                          {seat.name}
                        </div>
                        <div className="flex flex-1 justify-center gap-1 md:gap-2">
                          {seat.seats.map((s, i) => {
                            if (s.type !== 2) {
                              return (
                                <button
                                  key={i}
                                  className={`text-xs md:text-sm w-5 border rounded transition duration-200 ease-in-out flex items-center justify-center gap-1 border-[rgb(208,208,208)] hover:bg-[rgb(245,128,32)] hover:border-[rgb(245,128,32)`}
                               >
                                  {s.status === 1 ? (
                                    <img
                                      src="/images/thumbnail-shopeepay-logo.png"
                                      alt="sold"
                                      height={20}
                                      width={20}
                                    />
                                  ) : (
                                    <span 
  className={`inline-block text-center text-[12px] w-full leading-5
    `}
>
  {s.id}
</span>
                                  )}
                                </button>
                              );
                            }
                            // chỉ render ghế đầu của cặp
                            if (i % 2 !== 0) return null;

                            const nextSeat = seat.seats[i + 1];

                            return (
                              <button
                                key={i}
                                className="text-xs md:text-sm w-12 border rounded flex items-center justify-center border-[rgb(3,78,162)] hover:bg-[rgb(245,128,32)] hover:border-[rgb(245,128,32)]"
                                style={{ height: "20px" }}
                              >
                                <div className="flex justify-around w-full items-center">
                                  {s.status === 1 ? (
                                    <>
                                      <img
                                        src="/images/thumbnail-shopeepay-logo.png"
                                        alt="sold"
                                        height={20}
                                        width={20}
                                      />
                                      <img
                                        src="/images/thumbnail-shopeepay-logo.png"
                                        alt="sold"
                                        height={20}
                                        width={20}
                                      />
                                    </>
                                  ) : (
                                    <>
                                      <span className="text-[12px]">
                                        {s.id}
                                      </span>
                                      <span className="text-[12px]">
                                        {nextSeat?.id}
                                      </span>
                                    </>
                                  )}
                                </div>
                              </button>
                            );
                          })}
                        </div>

                        <div className="text-sm text-gray-500 font-semibold w-5 text-center">
                          {seat.name}
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div> */}
              {/* ghế */}
              <div className="md:block flex flex-wrap justify-center w-full h-full overflow-auto">
                <ul className="seat__layout-rows w-full max-w-4xl grid gap-3">
                  {seats.map((row) => (
                    <li
                      key={row.name}
                      className="flex items-center justify-between"
                    >
                      {/* Tên hàng trái */}
                      <RowLabel name={row.name} />

                      {/* Ghế */}
                      <div className="flex flex-1 justify-center gap-1 md:gap-2">
                        {row.seats.map((seat, i) => {
                          if (seat.type === SeatType.Couple) {
                            if (i % 2 !== 0) return null;
                            return (
                              <CoupleSeat
                                key={seat.id}
                                seat={seat}
                                nextSeat={row.seats[i + 1]}
                              />
                            );
                          }
                          return <StandardSeat key={seat.id} seat={seat} />;
                        })}
                      </div>

                      {/* Tên hàng phải */}
                      <RowLabel name={row.name} />
                    </li>
                  ))}
                </ul>
              </div>
              {/* màn hình */}
              <div className="seat__layout-screen mt-4 md:mt-8">
                <p className="text-base text-center text-[rgb(204,204,204)]">
                  Màn hình
                </p>
                <div className="border-2 border-[rgb(255,132,85)] mt-3"></div>
                <div className="text-sm flex md:flex-row flex-col-reverse justify-between items-center py-9 gap-2">
                  <div className="flex gap-2">
                    <div className="flex items-center">
                      <img
                        src="/images/thumbnail-shopeepay-logo.png"
                        alt="sales"
                        height={20}
                        width={20}
                      />
                      <span className="ml-2">Ghế đã bán</span>
                    </div>
                    <div className="">
                      <span className="w-5 h-5 rounded bg-[rgb(245,128,32)] inline-block align-middle"></span>
                      <span className="ml-2">Ghế đang chọn</span>
                    </div>
                  </div>
                  <div className="flex gap-2 flex-wrap md:justify-end justify-center">
                    <div className="flex items-center">
                      <span className="w-5 h-5 rounded border border-[rgb(208,208,208)] inline-block align-middle"></span>
                      <span className="ml-2">Ghế đơn</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-[44px] md:w-[48px]  h-5 rounded border border-[rgb(3,78,162)] inline-block align-middle"></span>
                      <span className="ml-2">Ghế đôi</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    </div>
  )
}

export default ChoiceSeat