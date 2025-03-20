import Header from "./Header.jsx";
import EntrySection from "./EntrySection.jsx";
import Data from "./data.js";

export default function App() {
    const entries = Data.map((entry) => {
        return (
            <EntrySection
                {...entry}
                //key={entry.id}
                // img={entry.img}
                // title={entry.title}
                // country={entry.country}
                // dates={entry.dates}
                // text={entry.text}
                // googleMapsLink={entry.googleMapsLink}
                //entry={entry}
            />
        );
    });
    return (
        <>
            <div className="bg-[url(/travel.jpg)]  bg-no-repeat bg-cover bg-fixed bg-center">
                <div className="border-2 border-amber-200 rounded-lg max-w-[1100px] mx-auto my-0">
                    <Header />
                    {entries}
                </div>
            </div>
        </>
    );
}
