import React from 'react'
import Star from '../icon/star'

const Card = () => {
  return (
    <div className='inline-block whitespace-nowrap relative max-w-full w-[140px] h-[200px]'>
        <div className='inline-block cursor-pointer rounded overflow-hidden card__movies max-w-full false '>
            <div className='object-cover rounded relative card__img max-w-full'>
                <div className='absolute hidden md:block w-full h-full z-10 cursor-pointer bg-[#00000080] transition-all duration-300 ease-in-out opacity-0 hover:opacity-100'>
                    <div className='card__hover__content flex flex-col justify-center items-center w-full h-full'>
                        <a href="" type='button' className='text-white bg-[#f26b38] w-[120px] h-[40px] hover:bg-[#fb9440] rounded text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-[#fb9440] dark:focus:ring-[#fb9440]'>
                            
                        </a>
                    </div>
                </div>
                {/* thêm link khi ấn vào ảnh */}
                <a href=""> 
                    {/* dữ liệu động sửa lại ảnh */}
                    <img
  alt="tho-oi"
  width={140}
  height={200}
  className="w-[140px] h-[200px] object-cover duration-500 ease-in-out group-hover:opacity-100 scale-100 blur-0 grayscale-0"
  src="../../../public/images/moives/tho-oi.png"
/>

                </a>
                <div className='vote'>
                    <p className='absolute right-[5px] bottom-10 flex items-center justify-center'>
                        <span>
                            <Star/>
                        </span>
                        {/* dữ liệu động */}
                        <span className='text-[18px] font-bold text-white'>9.2</span>
                    </p>
                </div>
                <div className="age__limit absolute bottom-[6px] right-[6px]"><span className="bg-[#F58020] px-1 py-[2px] text-sm text-white font-bold not-italic rounded">T18</span></div>

            </div>
        </div>
        {/* name */}
        <div className="Card_card__title mt-2" style={{width: 128}}><a type="button" className="text-sm font-semibold not-italic w-[140px]" href="/dat-ve/tho-oi/">Thỏ Ơi!!</a></div>

    </div>
  )
}

export default Card