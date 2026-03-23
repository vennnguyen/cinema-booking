import React from "react";
import Minus from "../icon/minus";
import Plus from "../icon/plus";

const ChoiceFood = () => {
  const data = [
    {
      id: 1,
      img: "/images/co-combo-1-extra-premium.png",
      name: "Combo 1 Big Extra Premium",
      description:
        "Thỏa mãn cơn thèm với 1 phần bắp rang bơ thơm ngon, 1 Pepsi mát lạnh và 1 gói snack Premium tùy chọn!",
      price: 115000,
      quantity: 0,
    },
    {
      id: 2,
      name: "Combo 2 Big Extra Premium",
      img: "/images/co-combo-1-extra-premium.png",
      description:
        "Nhân đôi sự sảng khoái! Combo gồm 1 bắp rang bơ lớn, 2 Pepsi cỡ lớn + 1 snack Premium tùy chọn – tiết kiệm hơn 33,000!",
      price: 134000,
      quantity: 0,
    },
    {
      id: 3,
      name: "Combo 3",
      img: "/images/co-combo-1-extra-premium.png",
      description:
        "Chia sẻ niềm vui với bạn bè! Combo 3 gồm 2 bắp rang bơ, 3 Pepsi mát lạnh – tiết kiệm hơn 52,000!",
      price: 149000,
      quantity: 0,
    },
    {
      id: 4,
      name: "Combo 4",
      img: "/images/co-combo-1-extra-premium.png",
      description:
        "Chia sẻ niềm vui với bạn bè! Combo 4 gồm 3 bắp rang bơ, 4 Pepsi mát lạnh – tiết kiệm hơn 95,000!",
      price: 229000,
      quantity: 0,
    },
  ];
  return (
    <div className="bg-white p-4 md:h-full h-[80vh] overflow-hidden">
      <h3 className="text-l mb-4 font-semibold">Chọn Combo / Sản phẩm</h3>
      <ul className="concession__list h-[80vh] overflow-auto pb-10 px-2 md:px-0">
        {data.map((item)=> {
            return (
                <div>
          <li className="md:flex lg:flex xl:flex hidden mb-5 overflow-auto">
            <img
              alt="Combo 1  Big Extra Premium"
              loading="lazy"
              width={150}
              height={100}
              decoding="async"
              data-nimg={1}
              className='inline-block rounded-md w-[150px] h-[90px] mr-2 object-cover duration-500 ease-in-out group-hover:opacity-100"
scale-100 blur-0 grayscale-0)'
              src={item.img}
              style={{ color: "transparent" }}
            />
            <div className="flex-1 px-4">
              <h4 className="text-base font-semibold mb-1">
               {item.name}
              </h4>
              <div className="text-sm">
               {item.description}
              </div>
              <div className="flex justify-between mt-2 text-sm">
                <div>
                  <strong>Giá: </strong>
                  <span className="inline-block font-bold">{item.price}₫</span>
                </div>
                <div className="flex bg-white border-md rounded shadow-qty ">
                  <div className="md:py-1  rounded outline-none flex items-center justify-center">
                    <button className="md:px-2 outline-none">
                      <Minus/>
                    </button>
                    <button className="inline-block px-2 mx-1">0</button>
                    <button className="md:px-2">
                      <Plus/>
                    </button>
                  </div>
                </div>
              </div>
              <div className="transition-all duration-500 ease-in-out overflow-hidden max-h-0 opacity-0 pt-0 space-y-0">
                <div className="sm:space-y-4 space-y-2" />
              </div>
            </div>
          </li>
          <li className="md:hidden lg:hidden xl:hidden flex flex-col mb-5 border rounded-lg p-3 overflow-auto">
            <div className="flex">
              <img
                alt="Combo 1  Big Extra Premium"
                loading="lazy"
                width={100}
                height={60}
                decoding="async"
                data-nimg={1}
                className='w-[100px] h-[60px] rounded-md mb-2 object-cover mr-2 object-cover duration-500 ease-in-out group-hover:opacity-100"
scale-100 blur-0 grayscale-0)'
                src={item.img}
                style={{ color: "transparent" }}
              />
              <div className="flex flex-col justify-between flex-1">
                <div>
                  <h4 className="text-base font-semibold mb-1">
                    {item.name}
                  </h4>
                  <div className="text-sm text-gray-600 mb-2">
                    {item.description}
                    <div>
                      <strong>Giá: </strong>
                      <span className="inline-block font-bold">
                        {item.price}₫
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex justify-end">
                  <div className="bg-white border rounded shadow-qty text-xs flex items-center justify-center">
                    <button className="px-2 py-1">
                      <Minus/>
                    </button>
                    <span className="px-2 py-1">0</span>
                    <button className="px-2 py-1">
                      <Plus/>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </div>
            )
        })}
      </ul>
    </div>
  );
};

export default ChoiceFood;
