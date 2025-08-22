export default function Hero() {
  return (
    <section className="relative flex flex-row items-stretch justify-between px-10 pt-12 pb-0 bg-white overflow-hidden min-h-[640px]">
      
      <div className="absolute left-0 bottom-0" style={{ width: 850, height: 720 }}>
        
        <img
          src="/images/Asset 3.png"
          alt=""
          className="absolute left-0 bottom-0 h-[420px] w-[200px] z-0 select-none pointer-events-none"
          draggable="false"
        />

        
        <img
          src="/images/Graphic 1 2.png" 
          alt="background graphic"
  className="absolute left-0 bottom-[-100px] min-w-[125%] min-h-[110%] z-10 opacity-40 pointer-events-none select-none"
          draggable="false"
        />


        <img
          src="/images/hero.png"
          alt="hero"
          className="absolute left-[90px] bottom-0 z-20 h-[380px] w-[460px] min-w-[320px] max-w-[500px]"
          draggable="false"
        />
      </div>

      
      <div className="ml-auto w-1/2 flex flex-col items-start pl-10 justify-center relative z-30 -top-20 -left-55">
        <h2 className="text-5xl font-rubik font-bold text-gray-900 leading-tight mb-5">
          Mendelson <br />Communication <br /> and Engagement
        </h2>
        <p className="text-base text-gray-600 max-w-md">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada sed
          ipsum, ut quam volutpat, tortor.
        </p>
      </div>

      
      <img
        src="/images/Assets 4.png"
        alt=""
        className="absolute right-0 bottom-0 h-[210px] w-[200px] select-none pointer-events-none z-0"
        draggable="false"
      />
    </section>
  );
}
