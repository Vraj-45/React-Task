export default function Team() {
    const team = [
        { name: "Jessica D’suza", img: "/images/Person 1 img 1.png" },
        { name: "Johny Williams", img: "/images/Person 2 img 1.png" },
        { name: "Sanya R.", img: "/images/Person 3 img 1.png" }
    ];

    return (
        <section id="team" className="px-2 py-16 bg-white relative overflow-hidden">
            <img
                src="/images/Asset 5 2.png"
                alt=""
                className="absolute top-0 left-0 w-[280px] z-0 pointer-events-none select-none"
                draggable="false"
            />

            <div className="flex flex-col items-center">
                <h2 className="text-5xl text-center font-extrabold text-black mb-2 tracking-tight">OUR TEAM</h2>
                <div className="w-[220px] h-[6px] bg-gray-200 rounded-full mb-6 relative flex justify-center">
                    <div className="absolute left-0 -translate-x-1/2 top-0 h-[6px] w-[80px] bg-gray-400 rounded-full" />
                </div>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-end gap-2 md:gap-12 mt-8">
                {team.map((t, i) => (
                    <div key={i} className="flex flex-col items-center w-[260px]">
                        <div className="relative w-[220px] h-[160px] flex items-center justify-center">
                            <img
                                src={t.img}
                                alt=""
                                className="absolute inset-0 w-full h-full object-contain"
                                draggable="false"
                            />
                            <img
                                src={t.img}
                                alt={t.name}
                                className="relative z-10 w-[200px] h-[120px] object-cover rounded-[40px]"
                                draggable="false"
                            />
                        </div>
                        <div className="mt-4 text-lg font-normal text-black">{t.name}</div>
                    </div>
                ))}
            </div>
        </section>
    );
}
