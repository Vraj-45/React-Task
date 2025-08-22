export default function Projects() {
    return (
        <section id="projects" className="px-2 py-16 bg-white relative overflow-hidden">
            
            <img
                src="/images/Asset 8 3.png"
                alt=""
                className="absolute top-0 right-0 w-[245px] z-0 pointer-events-none select-none"
                draggable="false"
            />
            <div className="flex flex-col items-center">
                <h2 className="text-5xl text-center font-extrabold text-black mb-2 tracking-tight">OUR PROJECTS</h2>
                <div className="w-[220px] h-[6px] bg-gray-200 rounded-full mb-6 relative flex justify-center">
                    <div className="absolute left-0 -translate-x-1/2 top-0 h-[6px] w-[80px] bg-gray-400 rounded-full" />
                </div>
            </div>
            <div className="flex justify-center mt-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl">
                    
                    <div className="relative row-span-2 min-h-[400px]">
                        <img
                            src="/images/Our Project_ 1 img 1.png"
                            alt="project1"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-cyan-900 bg-opacity-70 flex flex-col justify-center pl-10">
                            <span className="text-white text-3xl font-bold leading-tight">
                                PROJECTS<br />NAME
                            </span>
                        </div>
                    </div>
                    
                    <div className="flex flex-col h-full gap-6 ">
                        <div className="flex-1 ">
                            <img
                                src="/images/Our Project _ 2 img 1.png"
                                alt="project2"
                                className="w-full h-full object-cover"
                                style={{ aspectRatio: "auto 1/2" }}
                            />
                        </div>
                        <div className="flex-1">
                            <img
                                src="/images/Our Project_ 3 img 1.png"
                                alt="project3"
                                className="w-full h-full object-cover"
                                style={{ aspectRatio: "auto 1/2" }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
