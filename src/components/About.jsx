import React from "react";

export default function About() {
  return (
    <section className="relative bg-white flex justify-center items-center py-16 px-2 min-h-[600px]">
      <div className="flex flex-col md:flex-row w-full max-w-7xl items-start gap-10">
        
        <div className="w-full max-w-[612px] mx-auto md:mx-0 flex justify-center items-start md:items-center pt-8 md:pt-20">
          <img
            src="/images/about us 1.png"
            className="w-[612px] h-[408px] object-contain"
            draggable="false"
            alt="About Us"
          />
        </div>
        
        <div className="flex-1 bg-white px-8 py-8 shadow-none z-10">
          
          <h2 className="text-5xl font-extrabold text-black mb-2 tracking-tight">
            ABOUT US
          </h2>
          
          <div className="w-[220px] h-[6px] bg-gray-200 rounded-full mb-6 relative">
            <div className="absolute left-0 top-0 h-[6px] w-[120px] bg-gray-400 rounded-full" />
          </div>
          
          <p className="text-lg w-[650px] text-black mb-8 leading-snug font-normal">
            We love what we do and are driven by achieving great results for our clients.
            <br />
            Our awards and impressive client list are testament to our high
            quality approach. We deliver value, creaKvity, results and
            excepKonel levels of <br />customer service and professionalism. We
            specialise in infrastructure development, energy and natural
            resources.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
            
            <div>
              <img
                src="/images/Enagagement icon 1.png"
                alt="Engagement Icon"
                className="w-10 h-10 mb-2"
                draggable="false"
              />
              <h3 className="text-2xl font-bold text-black mb-2">
                ENGAGEMENT
              </h3>
              <p className="text-lg text-black mb-1 leading-snug">
                We are engagement specialists,
                <br />
                who have led projects at all
                <br />
                levels of the IAP2 spectrum.
                <br />
                READ MORE
              </p>
            </div>
            
            <div>
              <img
                src="/images/coomunication icon 1.png"
                alt="Communications Icon"
                className="w-10 h-10 mb-2"
                draggable="false"
              />
              <h3 className="text-2xl font-bold text-black mb-2">
                COMMUNICATIONS
              </h3>
              <p className="text-lg text-black mb-1 leading-snug">
                We are award-winning leaders in
                <br />
                communications and campaign
                <br />
                management. READ MORE
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
