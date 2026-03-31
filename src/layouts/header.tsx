import { useState } from "react";
import Arrow from "../components/icon/arrow";
import Close from "../components/icon/close";
import Member from "../components/icon/member";
import Menu from "../components/icon/menu";
import Search from "../components/icon/search";
// import Card from "../components/ui/Card";
import Signin from "./signin";
import Register from "./register";

type MenuType = "starshop" | "gocdienanh" | "sukien" | "rap" | "phim";
const Header = () => {
 
const [open, setOpen] = useState<boolean>(false);
const [openSignIn, setOpenSignIn] = useState<boolean>(false)
const [openRegister, setOpenRegister] = useState<boolean>(false)

const [openMenu, setOpenMenu] = useState<MenuType | null>(null);

const toggleMenu = (menu: MenuType) => {
  setOpenMenu(openMenu === menu ? null : menu);
};
  return (
    <header className="pt-5 pb-2 lg:pt-3 min-h-20 block bg-white">
      {open && (
  <div
    onClick={() => setOpen(false)}
    className="bg-[#343a40]/60 fixed inset-0 z-[1020] xl:hidden transition-opacity duration-500"
  />
)}
      {/* <div className="my-0 mx-auto screen1390:max-w-screen-xl xl:max-w-[1200px] screen1200:max-w-6xl lg:max-w-4xl md:max-w-4xl lg:px-0 md:px-4 sm:px-[45px] px-[16px]"> */}
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-[120px] xl:px-[0px] ">
      {/* */}
        <nav className="flex justify-start justify-items-center items-center flex-row undefined">
          <a href="/" className="logo__header grow-0 md:mr-[100px] mr-[20px]">
            <img
              alt="Galaxy - Cinema"
              loading="lazy"
              width={115}
              height={60}
              className='max-w-min w-[77px] h-[40px] lg:w-[115px] lg:h-[60px] object-cover duration-500 ease-in-out group-hover:opacity-100"
scale-100 blur-0 grayscale-0)'
              style={{ color: "transparent" }}
              src={"/images/galaxy-logo-mobile.png"}
            />
          </a>
          {/* repo */}
          <a
            className="xl:hidden grow text-left block mr-4"
            href="/booking/"
          >
            <img
              alt="Ticket"
              loading="lazy"
              width={112}
              height={36}
              className='max-w-min w-[84px] h-[27px] lg:w-[112px] lg:h-[36px] inline-block object-cover duration-500 ease-in-out group-hover:opacity-100"
scale-100 blur-0 grayscale-0)'
              style={{ color: "transparent" }}
              src={"../../images/btn-ticket.webp"}
            />
          </a>
          {/* phần center */}
          <div className="hidden xl:flex screen1200:grow screen1200:basis-full items-center gap-8 px-5 transition-all duration-300 ease-in-out">
            <div className="grow md:flex hidden items-center justify-center">
              <a href="/" className="md:block hidden mr-4">
                <img
                  src={"../../images/btn-ticket.webp"}
                  alt="Ticket"
                  loading="lazy"
                  width="112"
                  height="36"
                  className='max-w-min w-[84px] h-[27px] lg:w-[112px] lg:h-[36px] object-cover duration-500 ease-in-out group-hover:opacity-100"
      scale-100 blur-0 grayscale-0)'
                  style={{ color: "transparent" }}
                />
              </a>
              <div className="hover relative">
                <div className="px-3 text-left md:cursor-pointer group hover:text-orange-500 transition-all duration-300">
                  <a
                    href=""
                    className="py-7 flex text-sm justify-between items-center md:pr-0 pr-5 group hover:text-orange-500 transition-all duration-300 ease-in-out not-italic"
                  >
                    Phim
                    <span className="text-xs md:hidden inline text-[#777777]">
                      <i className="chevron-down transition-all duration-300 ease-in-out"></i>
                    </span>
                    <span className="text-xs md:ml-2 md:block hidden group-hover:text-primary transition-all duration-300 ease-in-out text-[#777777]">
                      <Arrow />
                    </span>
                  </a>
                  <div className="absolute top-[65px] -left-[45px] hidden group-hover:md:block hover:md:block z-[800] transition-all duration-300 ease-in-out">
                    <div
                      className="bg-white min-w-[250px] border border-white border-solid rounded px-6 py-4"
                      style={{
                        boxShadow:
                          "0 6px 16px 0 rgba(0,0,0,.08), 0 3px 6px -4px rgba(0,0,0,.12), 0 9px 28px 8px rgba(0,0,0,.05)",
                      }}
                    >
                      {/* movie show */}
                      <div className="movie_show">
                        <div>
                          <span className="border-l-4 border-solid border-[#034ea2]"></span>
                          <a
                            type="button"
                            className="text-base font-normal text-[#333333] pl-2 inline cursor-pointer uppercase hover:text-orange-500  transition-all duration-300 ease-in-out"
                            href="/phim-dang-chieu/"
                          >
                            Phim đang chiếu
                          </a>
                        </div>
                        <ul>
                          <li className="text-sm text-black py-2 transition-all duration-300">
                            {/* <Card img={img}/> */}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*  */}
<div className="hover relative">
                <div className="px-3 text-left md:cursor-pointer group hover:text-orange-500 transition-all duration-300">
                  <a
                    href=""
                    className="py-7 flex text-sm justify-between items-center md:pr-0 pr-5 group capitalize hover:text-orange-500 transition-all duration-300"
                  >
                    Star Shop{" "}
                    <span className="text-xs md:hidden inline text-[#777777]">
                      <i className="chevron-down transition-all duration-300 ease-in-out"></i>
                    </span>
                    <span className="text-xs md:ml-2 md:block hidden group-hover:text-primary transition-all duration-300 ease-in-out text-[#777777]">
                      <Arrow />
                    </span>
                  </a>
                  <div>
                    <div className="absolute top-[65px] -left-[45px] hidden group-hover:md:block hover:md:block z-[800]">
                      <div
                        className="bg-white min-w-[200px] text-center border border-white border-solid rounded"
                        style={{
                          boxShadow:
                            "0 6px 16px 0 rgba(0,0,0,.08), 0 3px 6px -4px rgba(0,0,0,.12), 0 9px 28px 8px rgba(0,0,0,.05)",
                        }}
                      >
                        <ul>
                          <li className="text-sm text-black hover:text-[#f26b38] hover:pl-0.5 hover:border-l-4 capitalize hover:border-[#fd841f] hover:bg-[#fb770b1a] transition-all duration-300">
                            <a
                              className="block py-2"
                              href="/product-category/galaxy-merch/"
                            >
                              Seasonal Merchandise
                            </a>
                          </li>
                          <li className="text-sm text-black hover:text-[#f26b38] hover:pl-0.5 hover:border-l-4 capitalize hover:border-[#fd841f] hover:bg-[#fb770b1a] transition-all duration-300">
                            <a
                              className="block py-2"
                              href="/product-category/galaxy-merch/"
                            >
                              Movie Merchandise
                            </a>
                          </li>
                          
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*  */}
              <div className="hover relative">
                <div className="px-3 text-left md:cursor-pointer group hover:text-orange-500 transition-all duration-300">
                  <a
                    href=""
                    className="py-7 flex text-sm justify-between items-center md:pr-0 pr-5 group capitalize hover:text-orange-500 transition-all duration-300"
                  >
                    Góc điện ảnh{" "}
                    <span className="text-xs md:hidden inline text-[#777777]">
                      <i className="chevron-down transition-all duration-300 ease-in-out"></i>
                    </span>
                    <span className="text-xs md:ml-2 md:block hidden group-hover:text-primary transition-all duration-300 ease-in-out text-[#777777]">
                      <Arrow />
                    </span>
                  </a>
                  <div>
                    <div className="absolute top-[65px] -left-[45px] hidden group-hover:md:block hover:md:block z-[800]">
                      <div
                        className="bg-white min-w-[200px] text-center border border-white border-solid rounded"
                        style={{
                          boxShadow:
                            "0 6px 16px 0 rgba(0,0,0,.08), 0 3px 6px -4px rgba(0,0,0,.12), 0 9px 28px 8px rgba(0,0,0,.05)",
                        }}
                      >
                        <ul>
                          <li className="text-sm text-black hover:text-[#f26b38] hover:pl-0.5 hover:border-l-4 capitalize hover:border-[#fd841f] hover:bg-[#fb770b1a] transition-all duration-300">
                            <a
                              className="block py-2"
                              href="/product-category/galaxy-merch/"
                            >
                              Thể loại phim
                            </a>
                          </li>
                          <li className="text-sm text-black hover:text-[#f26b38] hover:pl-0.5 hover:border-l-4 capitalize hover:border-[#fd841f] hover:bg-[#fb770b1a] transition-all duration-300">
                            <a
                              className="block py-2"
                              href="/product-category/movie-merch/"
                            >
                              Diễn viên
                            </a>
                          </li>
                          <li className="text-sm text-black hover:text-[#f26b38] hover:pl-0.5 hover:border-l-4 capitalize hover:border-[#fd841f] hover:bg-[#fb770b1a] transition-all duration-300">
                            <a
                              className="block py-2"
                              href="/product-category/movie-merch/"
                            >
                              Đạo diễn
                            </a>
                          </li>
                          <li className="text-sm text-black hover:text-[#f26b38] hover:pl-0.5 hover:border-l-4 capitalize hover:border-[#fd841f] hover:bg-[#fb770b1a] transition-all duration-300">
                            <a
                              className="block py-2"
                              href="/product-category/movie-merch/"
                            >
                              Bình luận phim
                            </a>
                          </li>
                          <li className="text-sm text-black hover:text-[#f26b38] hover:pl-0.5 hover:border-l-4 capitalize hover:border-[#fd841f] hover:bg-[#fb770b1a] transition-all duration-300">
                            <a
                              className="block py-2"
                              href="/product-category/movie-merch/"
                            >
                              Blog điện ảnh
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*  */}

              {/*  */}
              <div className="hover relative">
                <div className="px-3 text-left md:cursor-pointer group hover:text-orange-500 transition-all duration-300">
                  <a
                    href=""
                    className="py-7 flex text-sm justify-between items-center md:pr-0 pr-5 group capitalize hover:text-orange-500 transition-all duration-300"
                  >
                    Sự kiện{" "}
                    <span className="text-xs md:hidden inline text-[#777777]">
                      <i className="chevron-down transition-all duration-300 ease-in-out"></i>
                    </span>
                    <span className="text-xs md:ml-2 md:block hidden group-hover:text-primary transition-all duration-300 ease-in-out text-[#777777]">
                      <Arrow />
                    </span>
                  </a>
                  <div>
                    <div className="absolute top-[65px] -left-[45px] hidden group-hover:md:block hover:md:block z-[800]">
                      <div
                        className="bg-white min-w-[200px] text-center border border-white border-solid rounded"
                        style={{
                          boxShadow:
                            "0 6px 16px 0 rgba(0,0,0,.08), 0 3px 6px -4px rgba(0,0,0,.12), 0 9px 28px 8px rgba(0,0,0,.05)",
                        }}
                      >
                        <ul>
                          <li className="text-sm text-black hover:text-[#f26b38] hover:pl-0.5 hover:border-l-4 capitalize hover:border-[#fd841f] hover:bg-[#fb770b1a] transition-all duration-300">
                            <a
                              className="block py-2"
                              href="/product-category/galaxy-merch/"
                            >
                              Ưu đãi
                            </a>
                          </li>
                          <li className="text-sm text-black hover:text-[#f26b38] hover:pl-0.5 hover:border-l-4 capitalize hover:border-[#fd841f] hover:bg-[#fb770b1a] transition-all duration-300">
                            <a
                              className="block py-2"
                              href="/product-category/movie-merch/"
                            >
                              Phim hay tháng
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*  */}

              {/* Call API để lấy các rạp */}
              <div className="hover relative">
                <div className="px-3 text-left md:cursor-pointer group hover:text-orange-500 transition-all duration-300">
                  <a
                    href=""
                    className="py-7 flex text-sm justify-between items-center md:pr-0 pr-5 group capitalize hover:text-orange-500 transition-all duration-300"
                  >
                    Rạp/Giá vé{" "}
                    <span className="text-xs md:hidden inline text-[#777777]">
                      <i className="chevron-down transition-all duration-300 ease-in-out"></i>
                    </span>
                    <span className="text-xs md:ml-2 md:block hidden group-hover:text-primary transition-all duration-300 ease-in-out text-[#777777]">
                      <Arrow />
                    </span>
                  </a>
                  <div>
                    <div className="absolute top-[65px] -left-[45px] hidden group-hover:md:block hover:md:block z-[800]">
                      <div
                        className="bg-white min-w-[200px] text-center border border-white border-solid rounded"
                        style={{
                          boxShadow:
                            "0 6px 16px 0 rgba(0,0,0,.08), 0 3px 6px -4px rgba(0,0,0,.12), 0 9px 28px 8px rgba(0,0,0,.05)",
                        }}
                      >
                        <ul>
                          <li className="text-sm text-black hover:text-[#f26b38] hover:pl-0.5 hover:border-l-4 capitalize hover:border-[#fd841f] hover:bg-[#fb770b1a] transition-all duration-300">
                            <a
                              className="block py-2"
                              href="/product-category/galaxy-merch/"
                            >
                              Galaxy Nguyễn Du
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*  */}
            </div>
          </div>

          {/* Phần đăng nhập */}

<div className="hidden xl:flex xl:grow xl:justify-end items-center relative transition-all duration-300">
              <div className="search mr-4">
              <a
                href=""
                className="font-light cursor-pointer text-sm text-[#777]"
                title="Tìm kiếm"
              >
                <Search />
              </a>
            </div>
            <button onClick={() => setOpenSignIn(true)} data-dialog-target="modal" className="ml-2 text-sm text-[#777] capitalize cursor-pointer transition-all duration-300 hover:text-[#f26b38]">
              Đăng nhập
            </button>
            <Signin open={openSignIn} setOpen={setOpenSignIn} />
            <div className="hover">
              <div className="px-3 py-7 text-left md:cursor-pointer group relative  transition-all duration-300 flex">
                <a href="#" className="cursor-pointer logo__header grow-0">
                  <img
                    src="../../images/join-member-Gstar.svg"
                    alt="Galaxy - Cinema"
                    loading="lazy"
                    width="100"
                    height="42"
                    decoding="async"
                    data-nimg="1"
                    style={{ color: "transparent" }}
                  />
                </a>
                <div className="absolute top-20 right-0 hidden md:group-hover:block z-[400] transition-all duration-300 ease-in-out">
                  <div
                    className="bg-white min-w-[850px] max-w-[1360px] border  border-white border-solid rounded px-6 py-4"
                    style={{
                      boxShadow:
                        "0 6px 16px 0 rgba(0,0,0,.08), 0 3px 6px -4px rgba(0,0,0,.12), 0 9px 28px 8px rgba(0,0,0,.05)",
                    }}
                  >
                  <div className="grid grid-cols-4 gap-5">
                    {/*  */}
                    <div className="flex flex-col justify-start items-center gap-4 pt-6">
                      <img
                        alt="Image Rules"
                        loading="lazy"
                        width={85}
                        height={80}
                        decoding="async"
                        data-nimg={1}
                        className="w-[85px] h-[80px]"
                        style={{ color: "transparent" }}
                        src="../../images/icon-rules.png"
                      />
                      <h3 className="text-sm font-bold not-italic capitalize text-center">
                        Thể lệ
                      </h3>
                      <a
                        className="w-[80px] h-8 leading-8 text-center text-[#f58020] border border-[#f58020] rounded text-[14px] font-bold not-italic hover:bg-[#f58020] hover:text-white transition-all duration-300 focus:ring-1 focus:outline-none focus:ring-[#fb9440] capitalize"
                        href="#"
                      >
                        Chi tiết
                      </a>
                    </div>
                    {/*  */}
                    {/*  */}
                    <div className="flex flex-col justify-start items-center gap-4 pt-6">
                      <img
                        alt="Image login"
                        loading="lazy"
                        width={85}
                        height={80}
                        decoding="async"
                        data-nimg={1}
                        className="w-[85px] h-[80px]"
                        style={{ color: "transparent" }}
                        src="../../images/icon-login.svg"
                      />
                      <h3 className="text-sm font-bold not-italic capitalize text-center">
                        Quyền lợi
                      </h3>
                      <a
                        className="w-[80px] h-8 leading-8 text-center text-[#f58020] border border-[#f58020] rounded text-[14px] font-bold not-italic hover:bg-[#f58020] hover:text-white transition-all duration-300 focus:ring-1 focus:outline-none focus:ring-[#fb9440] capitalize"
                        href="#"
                      >
                        Chi tiết
                      </a>
                    </div>
                    {/*  */}
                    {/*  */}
                    <div className="flex flex-col justify-start items-center gap-4 pt-6">
                      <img
                        alt="Image faq"
                        loading="lazy"
                        width={85}
                        height={80}
                        decoding="async"
                        data-nimg={1}
                        className="w-[85px] h-[80px]"
                        style={{ color: "transparent" }}
                        src="../../images/faq.png"
                      />
                      <h3 className="text-sm font-bold not-italic capitalize text-center">
                        Hướng dẫn
                      </h3>
                      <a
                        className="w-[80px] h-8 leading-8 text-center text-[#f58020] border border-[#f58020] rounded text-[14px] font-bold not-italic hover:bg-[#f58020] hover:text-white transition-all duration-300 focus:ring-1 focus:outline-none focus:ring-[#fb9440] capitalize"
                        href="#"
                      >
                        Chi tiết
                      </a>
                    </div>
                    {/*  */}
                    <div className="flex flex-col justify-between items-center gap-4">
                      <img
                        alt="Image Rules"
                        loading="lazy"
                        width={85}
                        height={80}
                        decoding="async"
                        data-nimg={1}
                        className="w-[85px] h-[80px]"
                        style={{ color: "transparent" }}
                        src="/images/bear_glx.png"
                      />
                      <h3 className="text-sm font-bold not-italic capitalize text-center">
                        Đăng Ký Thành Viên G-star Nhận Ngay Ưu Đãi!
                      </h3>
                      <button className="w-[96px] h-8 text-white border border-[#f58020] rounded text-[14px] font-bold not-italic bg-[#f58020] hover:text-white transition-all duration-300 ease-in-out focus:ring-1 focus:outline-none focus:ring-[#fb9440] capitalize cursor-pointer" 
                      onClick={()=>{setOpenRegister(true)}}>
                        Đăng ký
                        
                      </button>
                      
                        
                      
                    </div>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* reponsive */}
          <div className="flex md:grow md:basis-6/12 justify-end xl:hidden items-center">
            <a className="text-sm text-[#777] capitalize cursor-pointer transition-all duration-300 hover:text-[#f26b38] flex">
              <span>
                <Member />
              </span>
              Đăng nhập
            </a>
            <button
              className="ml-4"
              data-hs-overlay="#hs-overlay-unstyled"
              aria-controls="hs-overlay-unstyled"
              aria-label="Toggle navigation"
            >
              <span onClick={()=>{setOpen(true)}}>
                <Menu />
              </span>
            </button>
          </div>
          {/*  */}
        </nav>
      </div>

      {/* reponsive */}
      <nav
  className={`
    fixed top-0 right-0 bottom-0
    w-[287px] md:w-[346px]
    bg-white z-[1030]
    pl-8 pt-6 pr-4 md:px-11
    transition-transform duration-500 ease-in-out
    transform
    ${open ? "translate-x-0" : "translate-x-full"}
    xl:hidden
  `}
>
        <div className="flex justify-end">
          <button>
            <span onClick={()=>{setOpen(false)}}>
              <Close />
            </span>
          </button>
        </div>
        {/* inout tìm kiếm */}
        <div className="mt-4">
          <div className="relative">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="magnifying-glass"
              className="w-4 h-4 svg-inline--fa fa-magnifying-glass absolute top-[30%] left-[5%] text-[#333333]"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
              />
            </svg>
            <input
              type="text"
              placeholder="Tìm kiếm"
              className="w-full border rounded h-[40px] py-2 outline-none border-[#D0D0D0] px-10"
            />
          </div>
        </div>

        {/*  */}

        {/*mua vé và đăng kí */}
        <div className="flex gap-2 mt-4 justify-center">
          <a className="md:hidden block text-center w-full">
            <img
              alt="Ticket"
              loading="lazy"
              width={87}
              height={27}
              decoding="async"
              data-nimg={1}
              className="max-w-min w-[87px] h-[27px] inline-block object-cover duration-500 ease-in-out group-hover:opacity-100 scale-100 blur-0 grayscale-0"
              style={{ color: "transparent" }}
              src="/images/btn-ticket.png"
            />
          </a>
          <div className="flex justify-center items-center w-full">
            <div className="flex items-center flex-wrap justify-center flex-auto mr-1">
              <a className="cursor-pointer logo__header grow-0">
                <img
                  alt="Galaxy - Cinema"
                  loading="lazy"
                  width={79}
                  height={42}
                  decoding="async"
                  data-nimg={1}
                  style={{ color: "transparent" }}
                  src="/images/join-member-Gstar.svg"
                />
              </a>
            </div>
          </div>
          <div className="flex items-center flex-wrap justify-end flex-auto mr-1 hidden" />
        </div>

        {/*  */}

        {/* Menu */}
        <div className="mt-4 flex flex-col">
          <ul className="flex flex-col justify-start items-start grow-0 h-full gap-1 ">
            {/*  */}
            <div className="text-left capitalize">

  {/* <button
    onClick={() => setDown(!down)}
    className="flex text-sm items-center transition-all duration-200"
  >
    <span className="mr-2">Phim</span>

    <div
      className={`transition-transform duration-300 ${
        down ? "rotate-180" : ""
      }`}
    >
      <Arrow />
    </div>
  </button>

 
  <section
    className={`
      overflow-hidden
      transition-all duration-500 ease-in-out
      ${down ? "max-h-[500px] mt-2" : "max-h-0"}
    `}
  >
    <ul className="pl-5">
      <li className="py-1 text-sm hover:pl-1 hover:border-l-4 hover:border-[#fd841f] hover:bg-[#fb770b1a] transition-all">
        Phim đang chiếu
      </li>
      <li className="py-1 text-sm hover:pl-1 hover:border-l-4 hover:border-[#fd841f] hover:bg-[#fb770b1a] transition-all">
        Phim sắp chiếu
      </li>
      <li className="py-1 text-sm hover:pl-1 hover:border-l-4 hover:border-[#fd841f] hover:bg-[#fb770b1a] transition-all">
        Phim IMAX
      </li>
    </ul>
  </section> */}
  {/*  */}
  <div className="pb-2">
  <div
    onClick={() => toggleMenu("phim")}
    className="flex text-sm items-center cursor-pointer pr-5 transition-all duration-300"
  >
    <span className={`${openMenu === "phim" ? "text-[#F58020]" : ""} mr-2`}>
      Phim
    </span>

    <div
      className={`transition-transform duration-300 ${
        openMenu === "phim" ? "rotate-180" : ""
      }`}
    >
      <Arrow />
    </div>
  </div>

  <section
    className={`overflow-hidden transition-all duration-500 ease-in-out ${
      openMenu === "phim" ? "max-h-[300px] mt-2" : "max-h-0"
    }`}
  >
    <ul className="pl-5">
      <li className="text-sm py-1 hover:text-[#F58020]">
        Phim đang chiếu
      </li>
      <li className="text-sm py-1 hover:text-[#F58020]">
       Phim sắp chiếu
      </li>
      <li className="text-sm py-1 hover:text-[#F58020]">
       Phim IMAX
      </li>
    </ul>
  </section>
</div>
  {/*  */}
</div>
            {/*  */}
            <div className="pb-2">
  <div
    onClick={() => toggleMenu("starshop")}
    className="flex text-sm  items-center cursor-pointer pr-5 transition-all duration-300"
  >
    <span className={`${openMenu === "starshop" ? "text-[#F58020]" : ""} mr-2`}>
      Star Shop
    </span>

    <div
      className={`transition-transform duration-300 ${
        openMenu === "starshop" ? "rotate-180" : ""
      }`}
    >
      <Arrow />
    </div>
  </div>

  <section
    className={`overflow-hidden transition-all duration-500 ease-in-out ${
      openMenu === "starshop" ? "max-h-[300px] mt-2" : "max-h-0"
    }`}
  >
    <ul className="pl-5">
      <li className="text-sm py-1 hover:text-[#F58020]">
        Seasonal Merchandise
      </li>
      <li className="text-sm py-1 hover:text-[#F58020]">
        Movie Merchandise
      </li>
    </ul>
  </section>
</div>
            {/*  */}
            <div className="pb-2">
  <div
    onClick={() => toggleMenu("gocdienanh")}
    className="flex text-sm items-center cursor-pointer pr-5 transition-all duration-300"
  >
    <span className={`${openMenu === "gocdienanh" ? "text-[#F58020]" : ""} mr-2`}>
      Góc điện ảnh
    </span>

    <div
      className={`transition-transform duration-300 ${
        openMenu === "gocdienanh" ? "rotate-180" : ""
      }`}
    >
      <Arrow />
    </div>
  </div>

  <section
    className={`overflow-hidden transition-all duration-500 ${
      openMenu === "gocdienanh" ? "max-h-[400px] mt-2" : "max-h-0"
    }`}
  >
    <ul className="pl-5">
      <li className="text-sm py-1 hover:text-[#F58020]">Thể loại phim</li>
      <li className="text-sm py-1 hover:text-[#F58020]">Diễn Viên</li>
      <li className="text-sm py-1 hover:text-[#F58020]">Đạo Diễn</li>
      <li className="text-sm py-1 hover:text-[#F58020]">Bình Luận Phim</li>
      <li className="text-sm py-1 hover:text-[#F58020]">Blog Điện Ảnh</li>
    </ul>
  </section>
</div>
            {/*  */}
            <div className="pb-2">
  <div
    onClick={() => toggleMenu("sukien")}
    className="flex text-sm items-center cursor-pointer pr-5 transition-all duration-300"
  >
    <span className={`${openMenu === "sukien" ? "text-[#F58020]" : ""} mr-2`}>
      Sự kiện
    </span>

    <div
      className={`transition-transform duration-300 ${
        openMenu === "sukien" ? "rotate-180" : ""
      }`}
    >
      <Arrow />
    </div>
  </div>

  <section
    className={`overflow-hidden transition-all duration-500 ${
      openMenu === "sukien" ? "max-h-[300px] mt-2" : "max-h-0"
    }`}
  >
    <ul className="pl-5">
      <li className="text-sm py-1 hover:text-[#F58020]">Ưu đãi</li>
      <li className="text-sm py-1 hover:text-[#F58020]">
        Phim Hay Tháng
      </li>
    </ul>
  </section>
</div>
            {/*  */}
            <div>
  <div
    onClick={() => toggleMenu("rap")}
    className="flex text-sm items-center cursor-pointer pr-5 transition-all duration-300"
  >
    <span className={`${openMenu === "rap" ? "text-[#F58020]" : ""} mr-2`}>
      Rạp/Giá vé
    </span>

    <div
      className={`transition-transform duration-300 ${
        openMenu === "rap" ? "rotate-180" : ""
      }`}
    >
      <Arrow />
    </div>
  </div>

  <section
    className={`overflow-hidden transition-all duration-500 ${
      openMenu === "rap"
        ? "max-h-[400px] mt-2 overflow-y-auto"
        : "max-h-0"
    }`}
  >
    <ul className="pl-5">
      <li className="text-sm py-1 hover:text-[#F58020]">
        Galaxy CineX - Hanoi Centre
      </li>
    </ul>
  </section>
</div>
          </ul>
        </div>
        {/*  */}
      </nav>
      <Register open={openRegister} setOpen={setOpenRegister} />
    </header>
  );
};

export default Header;
