

const CardHome = () => {
  return (
    <div>
     <div className="relative group overflow-hidden cursor-pointer">

  <img
    src="/images/moives/tho-oi.png"
    className="w-full duration-300 group-hover:scale-110"
  />

  <div className="absolute h-full w-full bg-black flex justify-center items-center
  -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-50
  transition-all duration-300">
    Overlay
  </div>

</div>
        
    </div>
  );
};

export default CardHome;