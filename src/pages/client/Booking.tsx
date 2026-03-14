import React from 'react'
import Header from '../../layouts/header'
import Footer from '../../layouts/footer'
import data from '../../mock.json'
const Booking = () => {
    const seats = data.data.rows

console.log(seats);


  return (
    <div>
        <Header/>
        <div 
  className="block border-b border-[#f4f4f4]"
  style={{ transform: "matrix(1, 0, 0, -1, 0, 0)" }}
></div>
        <main className='booking__wrapper bg-[rgb(249,249,249)] md:pb-0'>
            <div className='booking__progress-bar flex justify-center items-center flex-nowrap bg-white relative md:mb-8 mb-0 w-full overflow-auto'>
                <ul className='flex  justify-center items-center text-grey-20 md:text-base text-[12px] font-semibold w-full flex-nowrap'>
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
<li className='pt-4 mb-4 pl-0 text-[rgb(3,78,162)]'>
    <button className="md:mx-3 mx-1">Chọn ghế</button>
    <div
    className="relative mt-4 h-0.5
    before:content-[''] before:absolute before:left-0 before:w-full before:h-0.75 before:bg-[#e9ecef]
    after:content-[''] after:absolute after:left-0 after:w-full after:h-0.75 after:bg-[#034ea2]"
  ></div>
</li>
{/* Chọn thức ăn */}
<li className='pt-4 mb-4 pl-0'>
    <button className="md:mx-3 mx-1 text-[#d3d0d0]">Chọn thức ăn</button>
    <div
    className="relative mt-4 h-0.5
    before:content-[''] before:absolute before:left-0 before:w-full before:h-0.75 before:bg-[rgb(233,236,239)]
    "
    // after:content-[''] after:absolute after:left-0 after:w-full after:h-0.75 after:bg-[#034ea2]
  ></div>
</li>
{/* Thanh toán */}
<li className='pt-4 mb-4 pl-0'>
    <button className="md:mx-3 mx-1 text-[#d3d0d0]">Thanh toán</button>
    <div
    className="relative mt-4 h-0.5
    before:content-[''] before:absolute before:left-0 before:w-full before:h-0.75 before:bg-[rgb(233,236,239)]
    "
    // after:content-[''] after:absolute after:left-0 after:w-full after:h-0.75 after:bg-[#034ea2]
  ></div>
</li>
{/* Xác nhận */}
<li className='pt-4 mb-4 pl-0'>
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
            <div className='md:container md:mx-auto xl:max-w-[1390px] lg:max-w-4xl md:max-w-4xl md:px-0 sm:px-[45px]  grid xl:grid-cols-3 grid-cols-1'>
                {/* bên trái */}
                <div className='col-span-2 xl:order-first order-last xl:h-full h-full overflow-hidden xl:overflow-auto xl:pb-10 md:pb-32 pb-10'>
                    <div className='bg-white px-6 py-4  rounded md:mb-8 mb-4 w-full'>
                        <div className='grid md:grid-cols-10 grid-cols-2'>
                            <div className="md:col-span-2"><label className="md:text-base text-sm font-semibold inline-block mt-2">Các suất chiếu</label></div>
                            <div className="col-span-8 flex-row gap-4 flex-wrap items-center flex">
  {Array(11).fill("10:00").map((time, i) => (
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
                    <div className='bg-white py-4 px-2 rounded md:mb-8 w-full'>
                      {/* ghế */}
                        <div className='md:block flex flex-wrap justify-center w-full h-full overflow-auto'>
                            <ul className='seat__layout-rows w-full max-w-4xl grid gri gap-3'>
                                
{
  seats.map((seat)=>{
    return (
      <li className="flex items-center justify-between">
  <div className="text-sm text-gray-500 font-semibold w-5 text-center">
    {seat.name}
  </div>

  <div className="flex flex-1 justify-center gap-1 md:gap-2">
  {seat.seats.map((s, i) => {

    if (s.type !== 2){
      return (
        <button key={i} className='text-xs md:text-sm w-5 border rounded transition duration-200 ease-in-out flex items-center justify-center gap-1 border-[rgb(208,208,208)] hover:bg-[rgb(245,128,32)] hover:border-[rgb(245,128,32)]'>
          {
            s.status === 1 ? <img src="/images/thumbnail-shopeepay-logo.png" alt="sold" height={20} width={20} /> : <span className='inline-block text-center text-[12px] text-black w-full leading-5'>{s.id}</span>
          }
        </button>
      )
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
          {
  s.status === 1 
  ? (
      <>
        <img src="/images/thumbnail-shopeepay-logo.png" alt="sold" height={20} width={20} />
        <img src="/images/thumbnail-shopeepay-logo.png" alt="sold" height={20} width={20} />
      </>
    )
  : (
      <>
        <span className="text-[12px]">{s.id}</span>
        <span className="text-[12px]">{nextSeat?.id}</span>
      </>
    )
}
         
        </div>
      </button>
    );

  })}
</div>

  <div className="text-sm text-gray-500 font-semibold w-5 text-center">
   {seat.name}
  </div>
</li>
    )
  })
}
                            </ul>
                        </div>
                        {/* màn hình */}
                        <div className='seat__layout-screen mt-4 md:mt-8'>
                          <p className='text-base text-center text-[rgb(204,204,204)]'>Màn hình</p>
                          <div className='border-2 border-[rgb(255,132,85)] mt-3'></div>
                          <div className='text-sm flex md:flex-row flex-col-reverse justify-between items-center py-9 gap-2'>
                            <div className='flex gap-2'>
                              <div className='flex items-center'>
                                <img src="/images/thumbnail-shopeepay-logo.png" alt="sales" height={20} width={20} />
                                <span className='ml-2'>Ghế đã bán</span>
                              </div>
                              <div className=''>
                                <span className='w-5 h-5 rounded bg-[rgb(245,128,32)] inline-block align-middle'></span>
                                <span className='ml-2'>Ghế đang chọn</span>
                              </div>
                            </div>
                            <div className='flex gap-2 flex-wrap md:justify-end justify-center'>
                              <div className="flex items-center"><span className="w-5 h-5 rounded border border-[rgb(208,208,208)] inline-block align-middle"></span><span className="ml-2">Ghế đơn</span></div>
                              <div className="flex items-center"><span className="w-[44px] md:w-[48px]  h-5 rounded border border[rgb(3,78,162)] inline-block align-middle"></span><span className="ml-2">Ghế đôi</span></div>
                            </div>
                          </div>
                        </div>
                    </div>
                </div>
                {/* bên phải */}
                <div className='col-span-1 xl:pl-4 xl:order-0 order-first py-4'>
                  <div className='booking__summary md:mb-4'></div>
                </div>
            </div>

        </main>
        <Footer/>
    </div>
  )
}

export default Booking