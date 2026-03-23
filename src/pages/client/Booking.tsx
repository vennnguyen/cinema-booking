import React from "react";
import Header from "../../layouts/header";
import Footer from "../../layouts/footer";
// import data from "../../mock.json";
// import { useBookingStore } from "../../stores/product";

import ChoiceSeat from "../../components/ui/ChoiceSeat";
import ChoiceFood from "../../components/ui/ChoiceFood";
import Pay from "../../components/ui/Pay";

const Booking = () => {
  // const seats = data.data.rows;
  // const selectedSeats = useBookingStore((state => state.selectedSeats))
  // const toggleSeat = useBookingStore((state => state.toggleSeat))

  return (
    <div>
      <Header />
      <div
        className="block border-b border-[#f4f4f4]"
        style={{ transform: "matrix(1, 0, 0, -1, 0, 0)" }}
      ></div>
      <main className="booking__wrapper bg-[rgb(249,249,249)] md:pb-0">
        <div className="booking__progress-bar flex justify-center items-center flex-nowrap bg-white relative md:mb-8 mb-0 w-full overflow-auto">
          <ul className="flex  justify-center items-center text-grey-20 md:text-base text-[12px] font-semibold w-full flex-nowrap">
            <li className="pt-4 mb-4 pl-0 text-[rgb(88,142,202)]">
              <button className="md:mx-3 mx-1 ml-0">
                Chọn phim / Rạp / Suất
              </button>

              <div
                className="relative mt-4 h-0.5
    before:content-[''] before:absolute before:left-0 before:w-full before:h-0.75 before:bg-[#e9ecef]
    after:content-[''] after:absolute after:left-0 after:w-full after:h-0.75 after:bg-[#034ea2]"
              ></div>
            </li>
            {/* Chọn ghế */}
            <li className="pt-4 mb-4 pl-0 text-[rgb(3,78,162)]">
              <button className="md:mx-3 mx-1">Chọn ghế</button>
              <div
                className="relative mt-4 h-0.5
    before:content-[''] before:absolute before:left-0 before:w-full before:h-0.75 before:bg-[#e9ecef]
    after:content-[''] after:absolute after:left-0 after:w-full after:h-0.75 after:bg-[#034ea2]"
              ></div>
            </li>
            {/* Chọn thức ăn */}
            <li className="pt-4 mb-4 pl-0">
              <button className="md:mx-3 mx-1 text-[#d3d0d0]">
                Chọn thức ăn
              </button>
              <div
                className="relative mt-4 h-0.5
    before:content-[''] before:absolute before:left-0 before:w-full before:h-0.75 before:bg-[rgb(233,236,239)]
    "
                // after:content-[''] after:absolute after:left-0 after:w-full after:h-0.75 after:bg-[#034ea2]
              ></div>
            </li>
            {/* Thanh toán */}
            <li className="pt-4 mb-4 pl-0">
              <button className="md:mx-3 mx-1 text-[#d3d0d0]">
                Thanh toán
              </button>
              <div
                className="relative mt-4 h-0.5
    before:content-[''] before:absolute before:left-0 before:w-full before:h-0.75 before:bg-[rgb(233,236,239)]
    "
                // after:content-[''] after:absolute after:left-0 after:w-full after:h-0.75 after:bg-[#034ea2]
              ></div>
            </li>
            {/* Xác nhận */}
            <li className="pt-4 mb-4 pl-0">
              <button className="md:mx-3 mx-1 text-[#d3d0d0]">Xác nhận</button>
              <div
                className="relative mt-4 h-0.5
    before:content-[''] before:absolute before:left-0 before:w-full before:h-0.75 before:bg-[rgb(233,236,239)]
    "
                // after:content-[''] after:absolute after:left-0 after:w-full after:h-0.75 after:bg-[#034ea2]
              ></div>
            </li>
          </ul>
        </div>
        <div className="md:container md:mx-auto xl:max-w-[1390px] lg:max-w-4xl md:max-w-4xl md:px-0 sm:px-[45px]  grid xl:grid-cols-3 grid-cols-1">
          {/* bên trái */}
          <div className="col-span-2 xl:order-first order-last xl:h-full h-full overflow-hidden xl:overflow-auto xl:pb-10 md:pb-32 pb-10">
            {/* <ChoiceSeat/> */}
            {/* <ChoiceFood/> */}
            {/*  */}
            <Pay/>
          </div>
          {/* bên phải */}
          <div className="col-span-1 xl:pl-4 xl:order-0 order-first py-4">
            <div className="booking__summary md:mb-4">
              <div className="h-[6px] bg-rgb(245,128,32) rounded-t-lg"></div>
              <div className="bg-white p-4 grid grid-cols-3 xl:gap-2 items-center">
                <div className="row-span-2 md:row-span-1 xl:row-span-2 block md:hidden xl:block">
                  <img
                    src="/images/movies/tho-oi.png"
                    alt="Tho-oi"
                    width={100}
                    height={150}
                    className="xl:w-full xl:h-full md:w-[80px] md:h-[120px] w-[78px] h-[110px] rounded object-cover duration-500 ease-in-out group-hover:opacity-100 scale-100 blur-0 grayscale-0"
                    style={{ color: "transparent" }}
                  />
                </div>
                <div className="row-span-2 md:row-span-1 xl:row-span-2 hidden md:block xl:hidden">
                  <img
                    alt="Tho-oi"
                    loading="lazy"
                    width={100}
                    height={150}
                    decoding="async"
                    data-nimg={1}
                    className="w-[220px] h-[150px] rounded object-cover duration-500 ease-in-out group-hover:opacity-100 scale-100 blur-0 grayscale-0"
                    style={{ color: "transparent" }}
                    src="/images/movies/tho-oi.png"
                  />
                </div>
                {/*  */}
                <div className="flex-1 col-span-2 md:col-span-1 xl:col-span-2">
                  <h3 className="text-sm xl:text-base font-bold xl:mb-2">
                    Thỏ Ơi
                  </h3>
                  <p className="text-sm inline-block">2D Phụ Đề</p>
                  <span> - </span>
                  <div className="xl:mt-2 ml-2 xl:ml-0 inline-block">
                    <span className="inline-flex items-center justify-center w-[38px] h-7 bg-[rgb(245,128,32)] rounded text-sm text-center text-white font-bold not-italic">
                      T18
                    </span>
                  </div>
                </div>

                {/*  */}
                <div className="col-span-2 md:col-span-1 xl:col-span-3">
                  <div>
                    <div className="xl:mt-4 text-sm xl:text-base">
                      <strong>Galaxy Nguyễn Du</strong>
                      <span> - </span>
                      <span className="text-sm xl:text-base">RAP 2</span>
                    </div>
                    <div className="xl:mt-2 text-sm xl:text-base">
                      <span>Suất: </span>
                      <strong>12:15</strong>
                      <span> - </span>
                      <span className="capitalize text-sm">
                        thứ bảy, <strong>14/03/2026</strong>
                      </span>
                    </div>
                  </div>
                  <div className="xl:block hidden">
                    {/* {selectedSeats.length > 0 &&
  selectedSeats.map((seat) => (
     <>
     <div className="my-4 border-t border-grey-60 border-dashed xl:block hidden"></div>
    <div key={seat.id} className="flex justify-between text-sm mt-2">
      <div>
        <strong>1x </strong>
        <span>Ghế đơn</span>
        <div>
          <span>Ghế: </span>
          <strong>{seat.id}</strong>
        </div>
      </div>
      <span className="inline-block font-bold">
        {seat.ticketPrice.toLocaleString()} ₫
      </span>
    </div></>
  ))} */}
                    <>
                      <div className="my-4 border-t border-grey-60 border-dashed xl:block hidden"></div>
                      <div className="flex justify-between text-sm mt-2">
                        <div>
                          <strong>1x </strong>
                          <span>Ghế đơn</span>
                          <div>
                            <span>Ghế: </span>
                            <strong>H1</strong>
                          </div>
                        </div>
                        <span className="inline-block font-bold">85.000 ₫</span>
                      </div>
                    </>
                  </div>

                  <div className="my-4 border-t border-[rgb(153,153,153)] border-dashed xl:block hidden" />
                </div>

                {/*  */}
                <div className="xl:flex hidden justify-between col-span-3">
                  <strong className="text-base">Tổng cộng</strong>
                  <span className="inline-block font-bold text-primary">
                    85.000&nbsp;₫
                  </span>
                </div>

                {/*  */}
              </div>
              <div className="mt-8 xl:flex hidden">
                <button className="w-1/2 mr-2 py-2 text-[rgb(245,128,32)]">
                  <span>Quay lại</span>
                </button>
                <button className="w-1/2 ml-2 py-2 bg-[rgb(245,128,32)] text-white border rounded-md hover:bg-orange-20">
                  <span>Tiếp tục</span>
                </button>
              </div>
            </div>
            {/* responsive */}
            <div
              className="fixed bottom-0 left-0 w-full z-100 bg-white xl:hidden transition-all duration-500 ease-in-out overflow-hidden max-h-[90vh] pb-12 pt-2 border border-[#DFDFDF] rounded-t-xl opacity-100"
              style={{ height: "auto", minHeight: "auto" }}
            >
              <div className="rounded opacity-100 w-full">
                <img
                  src="/images/delete.png"
                  alt="Icon show"
                  width={45}
                  height={20}
                  className="absolute -top-[6%] left-[50%] -translate-x-[50%] brightness-90 grayscale-[20%] z-100"
                />
              </div>
              <div className="grid grid-cols-3 items-center px-4 mb-2 transition relative overflow-hidden  opacity-100">
                <div className="col-span-3">
                  <div>
                    <div className="flex justify-between text-sm mt-2">
                      <div>
                        <strong>1x </strong>
                        <span>Ghế đơn</span>
                        <div>
                          <span>Ghế: </span>
                          <strong>G10</strong>
                        </div>
                      </div>
                      <span className="inline-block font-bold">159.000 ₫</span>
                    </div>
                  </div>
                </div>
                {/*
                 */}<div className="fixed bottom-0">
  <div className="justify-start items-center gap-1 flex col-span-2 w-full h-14 fixed bottom-0 left-4 bg-white">
    <strong className="text-sm font-normal text-[rgb(85,85,85)]">
      Tổng cộng:
    </strong>
    <span className="inline-block font-bold text-[rgb(245,128,32)]">
      159.000 ₫
    </span>
  </div>
  <div className="text-right fixed bottom-0 right-4 h-14 flex items-center">
    <div>
      <button className="w-[65px] h-10 py-2 bg-transparent text-[rgb(245,128,32)] text-sm rounded-md">
        <span>Quay lại</span>
      </button>
      <button className="w-[80px] h-10 py-2 bg-[rgb(245,128,32)] text-white border text-sm rounded-md hover:bg-orange-20 ">
        <span>Tiếp tục</span>
      </button>
    </div>
  </div>
</div>
{/*  */}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Booking;
