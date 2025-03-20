export default function App(props) {
    return (
        <main className="bg-white/70 border-2  border-amber-200 rounded-lg p-6 flex gap-6 ">
            <aside className=" ">
                <img
                    className="rounded-2xl min-h-[220px] max-w-[160px] object-cover"
                    src={props.img.src}
                    alt={props.img.alt}
                />
            </aside>
            <article className="mt-3">
                <div className="flex gap-[10px] items-center">
                    <div className="flex gap-[5px] items-center">
                        <img
                            className="max-w-[15px] max-h-[15px]"
                            src="./marker.png"
                            alt=""
                        />
                        <div>{props.country}</div>
                    </div>

                    <a
                        className="underline text-red-400"
                        href={props.googleMapsLink}
                    >
                        View on Google Maps
                    </a>
                </div>
                <h1 className="font-bold text-3xl mt-2 mb-4">{props.title}</h1>
                <div className="font-bold mb-2">{props.dates}</div>
                <p>{props.text}</p>
            </article>
        </main>
    );
}
