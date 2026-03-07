import React from 'react'
import Header from '../../layouts/header'
import Footer from '../../layouts/footer'

const BookTicket = () => {
  return (
    <div>
        <Header/>
        <div>
            <div className="relative bg-black flex justify-center w-full h-full">

  <div className="absolute w-full h-full z-[10] bg-[#0003]"></div>

  <div className="relative h-full">

    <div className="absolute top-0 left-0 z-[100]">
      <img
        src="/images/blur-left.png"
        className="w-full lg:h-[500px] object-cover lg:block hidden"
      />
    </div>

    <div className="relative">
      <img
        src="/images/movies/posters/tho-oi.jpg"
        className="w-[860px] h-full lg:h-[500px] object-cover"
      />

      <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[200] cursor-pointer">
        <img
          src="/images/button-play.png"
          className="w-[40px] h-[40px] lg:w-[64px] lg:h-[64px]"
        />
      </button>
    </div>

    <div className="absolute top-0 right-0 z-[100] lg:block hidden">
      <img
        src="/images/blur-right.png"
        className="w-full lg:h-[500px] object-cover"
      />
    </div>

  </div>
</div>
        </div>
        <Footer/>
    </div>
  )
}

export default BookTicket