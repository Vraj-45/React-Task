export default function Clients() {
    const clients = [
        "/images/Layer 19.png", "/images/Layer 20.png", "/images/1280px-Brigitte-Logo.png",
        "/images/Layer 22.png", "/images/BHP_2017_logo.png",
        "/images/Layer 21.png", "/images/Layer 23.png", "/images/Layer 24.png", "/images/MelbourneWaterLogo-1024x282.png"
    ];

    const logoHeights = [
        "h-25", 
        "h-23", 
        "h-14", 
        "h-20", 
        "h-16", 
        "h-20", 
        "h-20", 
        "h-18", 
        "h-18"  
    ];

    return (
        <section id="clients" className="px-2 py-16 text-center relative overflow-hidden">
            
            <img
                src="/images/Assets 9 1.png"
                alt=""
                className="absolute top-0 left-0 w-[150px] z-0 pointer-events-none select-none"
                draggable="false"
            />
            <div className="flex flex-col items-center">
                <h2 className="text-5xl text-center font-extrabold text-black mb-2 tracking-tight">OUR CLIENTS</h2>
                <div className="w-[220px] h-[6px] bg-gray-200 rounded-full mb-6 relative flex justify-center">
                    <div className="absolute left-0 -translate-x-1/2 top-0 h-[6px] w-[80px] bg-gray-400 rounded-full" />
                </div>
            </div>
            <div className="max-w-6xl mx-auto mt-10">
                <div className="grid grid-cols-5 gap-y-12 gap-x-2">
                    {clients.slice(0, 5).map((logo, i) => (
                        <div key={i} className="flex justify-center items-center">
                            <img src={logo} alt="client" className={`${logoHeights[i]} object-contain`} />
                        </div>
                    ))}
                </div>
                <div className="grid grid-cols-4 gap-y-12 gap-x-2 mt-12">
                    {clients.slice(5).map((logo, i) => (
                        <div key={i} className="flex justify-center items-center">
                            <img src={logo} alt="client" className={`${logoHeights[i + 5]} object-contain`} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
