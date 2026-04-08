import { useState } from "react";
import { Modal } from "react-responsive-modal";

import "react-responsive-modal/styles.css";
import type { Combo, ShowDetail } from "../types/booking";
import type { Seat } from "../types/seat";
import { formatTime } from "../utils/utils";
type Props = {
  open: boolean;
  setOpen: (value: boolean) => void;
  showDetail: ShowDetail | null,
  selectSeats: Seat[],
  selectCombo: Combo[]
};
export const ConfirmOrderModal= ({ open, setOpen, selectCombo,selectSeats,showDetail }: Props) => {

  const [checked, setChecked] = useState(false);
console.log(selectCombo,selectSeats,showDetail);

  const handleConfirm = async () => {
    console.log("Thanh toán...");
    // TODO: gọi API create order + payment
    setOpen(false);
  };

  return (
    <>
          {/* Modal */}
      <Modal open={open} onClose={() => setOpen(false)} center classNames={{modal: "rounded-xl"}}>
        <div className="py-5 px-6 bg-white rounded-lg w-[400px]">
          <h1 className="uppercase text-[16px] font-bold text-center mb-5">
            Thông tin đặt vé
          </h1>

          {/* Phim */}
          <div className="flex gap-x-4 items-start">
            <p className="text-[14px] font-bold w-[50px]">Phim</p>
            <div className="border border-[#DCD8D8] flex-1 p-3">
              <p className="font-bold text-[#1353B4]">
                {showDetail?.movie.movieName}
              </p>
              <p className="text-sm">
                {showDetail?.room.roomtype.roomTypeName} - {showDetail?.movie.movietype.movieTypeName}
              </p>
            </div>
          </div>

          {/* Rạp */}
          <div className="flex gap-x-4 my-3 items-start">
            <p className="text-[14px] font-bold w-[50px]">Rạp</p>
            <div className="border border-[#DCD8D8] flex-1 p-3">
              <p className="font-bold text-blue-600">
                {showDetail?.room.cinema.cinemaName}
              </p>
              <p className="text-sm">
                {formatTime(showDetail?.startTime ?? "")} - {showDetail?.releaseDate && (
                      <span className="capitalize text-sm">
                        {new Date(showDetail.releaseDate).toLocaleDateString(
                          "vi-VN",
                          {
                            weekday: "long",
                            day: "2-digit",
                            month: "2-digit",
                            year: "numeric",
                            timeZone: "Asia/Ho_Chi_Minh",
                          },
                        )}
                      </span>
                    )}
              </p>
            </div>
          </div>

          {/* Ghế */}
          <div className="flex gap-x-4 my-3 items-center">
            <p className="text-[14px] font-bold w-[50px]"></p>
            <div className="border border-[#DCD8D8] flex-1 p-3">
              <p className="text-sm">
                Ghế: <strong>E2, E1</strong>
              </p>
            </div>
          </div>

          {/* Tổng tiền */}
          <div className="flex gap-x-4 my-5 items-center">
            <p className="font-bold w-[50px]">Tổng</p>
            <div className="flex-1 bg-[#1353B4] text-white font-bold px-3 py-2">
              600.000 VNĐ
            </div>
          </div>

          {/* Checkbox */}
          <div className="flex items-center mt-4">
            <input
              type="checkbox"
              checked={checked}
              onChange={(e) => setChecked(e.target.checked)}
              className="mr-2 accent-[#f58020]"
            />
            <p className="text-sm">
              Tôi xác nhận thông tin là chính xác
            </p>
          </div>

          {/* Button */}
          <div className="text-center mt-4">
            <button
              disabled={!checked}
              onClick={handleConfirm}
              className={`w-1/2 py-2 rounded-md text-white ${
                checked
                  ? "bg-[rgb(255,149,63)]"
                  : "bg-gray-400 cursor-not-allowed"
              }`}
            >
              Thanh Toán
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
}