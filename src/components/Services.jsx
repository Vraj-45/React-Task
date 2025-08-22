export default function Services() {
  const services = [
    {
      title: "ENGAGEMENT",
      img: "/images/Engagement vector 1.png",
      desc: `We love what we do and are driven by achieving great results for our clients.Our awards and impressive client list are testament to our high quality approach.We deliver value, creativity, results and exceptional levels of customer service and professionalism.We specialise in infrastructure development, energy and natural resources.`
    },
    {
      title: "COMMUNICATIONS",
      img: "/images/Coominucation vector 1.png",
      desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.\nFaucibus quam quis egestas orci. Scelerisque eu, vitae sapien, pellentesque et.Sit ac fames facilisis nibh faucibus.`
    },
    {
      title: "FACILITATION",
      img: "/images/facilation vector 1.png",
      desc: `We love what we do and are driven by achieving great results for our clients.Our awards and impressive client list are testament to our\n high quality approach.We deliver value, creativity, results and \nexceptional levels of customer service and professionalism.We\n specialise in infrastructure development, energy and \nnatural resources.`
    },
    {
      title: "CONSULTATION AND RESEARCH",
      img: "/images/Consultation vector 1.png",
      desc: `Lorem ipsum dolor sit amet, consectetur adipiscing \nelit.Faucibus quam quis egestas orci. Scelerisque eu, \nvitae sapien, pellentesque et.Sit ac fames facilisis \nnibh faucibus.`
    },
    {
      title: "TRAINING & MENTORING",
      img: "/images/Training and vector 1.png",
      desc: `We love what we do and are driven by achieving great results for our \nclients.Our awards and impressive client list are testament to our\n high quality approach.We deliver value, creativity, results and exceptional levels of customer service and professionalism.We\n specialise in infrastructure development, energy and natural \nresources.`
    }
  ];

  return (
    <section id="services" className="relative px-0 py-16 bg-white min-h-screen overflow-hidden font-rubik">
      
      <img
        src="/images/Asset 5 1.png"
        alt=""
        className="absolute top-0 left-0 w-[260px] z-0 pointer-events-none select-none"
        draggable="false"
      />
      
      <img
        src="/images/Asset 6 1.png"
        alt=""
        className="absolute top-[340px] right-0 w-[200px] z-0 pointer-events-none select-none"
        draggable="false"
      />
      
      <img
        src="/images/Asset 7 1.png"
        alt=""
        className="absolute top-[700px] left-0 w-[170px] z-0 pointer-events-none select-none"
        draggable="false"
      />
      
      <img
        src="/images/Asset 8 2.png"
        alt=""
        className="absolute top-[950px] right-0 w-[200px] z-0 pointer-events-none select-none"
        draggable="false"
      />
      
      <img src="/images/Asset 3.png" alt="" className="hidden md:block absolute top-0 left-0 w-[300px] opacity-30 -z-10" />
      <img src="/images/Assets 4.png" alt="" className="hidden md:block absolute top-0 right-0 w-[220px] opacity-30 -z-10" />
      <img src="/images/Asset 2.png" alt="" className="hidden md:block absolute bottom-0 left-0 w-[300px] opacity-30 -z-10" />
      <img src="/images/Asset 3.png" alt="" className="hidden md:block absolute bottom-0 right-0 w-[220px] opacity-30 -z-10" />

      
      <div className="flex flex-col items-center">
        <h2 className="text-5xl text-center font-extrabold text-black mb-2 tracking-tight">SERVICES</h2>
        <div className="w-[220px] h-[6px] bg-gray-200 rounded-full mb-6 relative flex justify-center">
          <div className="absolute left-0 -translate-x-0 top-0 h-[6px] w-[60px] bg-gray-400 rounded-full" />
        </div>
      </div>

      <div className="max-w-5xl mx-auto flex flex-col gap-10">
        
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div className="text-right">
            <h3 className="text-3xl font-bold mb-2 tracking-tight">ENGAGEMENT</h3>
            <p className="text-[16px] font-normal text-black leading-snug whitespace-pre-line">{services[0].desc}</p>
          </div>
          <div className="flex justify-center">
            <img src={services[0].img} alt={services[0].title} className="h-56 object-contain" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div className="flex justify-center order-2 md:order-1">
            <img src={services[1].img} alt={services[1].title} className="h-56 object-contain" />
          </div>
          <div className="order-1 md:order-2 text-right md:text-left">
            <h3 className="text-3xl font-bold mb-2 tracking-tight">COMMUNICATIONS</h3>
            <p className="text-[16px] font-normal text-black leading-snug whitespace-pre-line">{services[1].desc}</p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div className="text-right">
            <h3 className="text-3xl font-bold mb-2 tracking-tight">FACILITATION</h3>
            <p className="text-[16px] font-normal text-black leading-snug whitespace-pre-line">{services[2].desc}</p>
          </div>
          <div className="flex justify-center">
            <img src={services[2].img} alt={services[2].title} className="h-56 object-contain" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div className="flex justify-center order-2 md:order-1">
            <img src={services[3].img} alt={services[3].title} className="h-56 object-contain" />
          </div>
          <div className="order-1 md:order-2 text-right md:text-left">
            <h3 className="text-3xl font-bold mb-2 tracking-tight">CONSULTATION AND <br />RESEARCH`</h3>
            <p className="text-[16px] font-normal text-black leading-snug whitespace-pre-line">{services[3].desc}</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div className="text-right">
            <h3 className="text-3xl font-bold mb-2 tracking-tight">TRAINING & MENTORING</h3>
            <p className="text-[16px] font-normal text-black leading-snug whitespace-pre-line">{services[4].desc}</p>
          </div>
          <div className="flex justify-center">
            <img src={services[4].img} alt={services[4].title} className="h-56 object-contain" />
          </div>
        </div>
      </div>
    </section>
  );
}
