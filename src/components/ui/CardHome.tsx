import React from "react";
import Star from "../icon/star";
import Video from "../icon/video";
import BuyTicket from "../icon/buy-ticket";

const CardHome = () => {
  return (
    <div>
      <div className="">
        <div className=" group">
          <div className="relative overflow-hidden group cursor-pointer rounded-[8px]">
{/*  */}
<img
              alt="tho-oi"
              loading="lazy"
              width={300}
              height={500}
              decoding="async"
              data-nimg={1}
              className="img__film object-cover duration-500 ease-in-out scale-100 blur-0 grayscale-0"
              src="/images/movies/tho-oi.png"
              style={{ color: "transparent" }}
            />
            <div className="vote">
              <p className="absolute right-[5px] bottom-10 flex justify-center items-center">
                <span>
                  <Star/>
                </span>
                <span className="text-[18px] font-bold text-white">9.2</span>
              </p>
            </div>
            <div className="age__limit absolute bottom-[6px] right-[6px]">
              <span className="inline-flex items-center justify-center w-[38px] h-7 bg-[#f26b38] rounded text-sm text-center text-white font-bold not-italic">
                T18
              </span>
            </div>

{/*  */}





            {/* hover */}
            <div className="absolute h-full w-full bg-black/50 flex justify-center items-center
  -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100
  transition-all duration-300">
              <div className="card__hover__content flex flex-col justify-center items-center w-full h-full gap-3">
                <a
                  type="button"
                  className="text-white bg-[#f26b38] w-[120px] h-[40px] hover:bg-[#fb9440] rounded text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-[#fb9440] dark:focus:ring-[#fb9440] gap-x-2"
                >
                  <BuyTicket/>
                  Mua vé
                </a>
                <button
                  type="button"
                  className="text-white w-[120px] h-[40px] border border-white hover:bg-[#fb9440]/80 hover:border-transparent rounded text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-[#fb9440] dark:focus:ring-[#fb9440] cursor-pointer"
                >
                  <Video/>
                  Trailer
                </button>
              </div>
            </div>

              
            {/*  */}
            
          </div>


          {/*  */}


          {/*  */}
        </div>
        <div className="Card_card__title__kFoFc">
          <h3 className="font-semibold mt-2">Thỏ Ơi!!</h3>
        </div>
      </div>
    </div>
  );
};

export default CardHome;
