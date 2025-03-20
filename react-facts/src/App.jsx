function NavBar() {
    return (
        <nav className="text-2xl rounded-lg bg-reactfacts mb-10 p-5 font-bold">
            <img
                src="/react-logo.png"
                alt="React Logo"
                width="40px"
                className=" inline-block"
            />
            <h1 className="inline-block ml-2">ReactFacts</h1>
        </nav>
    );
}
function HeadingPart() {
    return (
        <h2 className="font-bold  text-4xl pl-8">Fun facts about React!</h2>
    );
}
function MainContent() {
    return (
        <main className="overflow-hidden pb-25 mt-5 ml-10 pl-8 bg-[url(/react-logo.png)]   bg-[315px]  bg-no-repeat ">
            <ul className="text-2xl list-disc leading-[2.5] ">
                <li> Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100K stars on GitHub</li>
                <li>Is maintained by Meta</li>
                <li>
                    Powers thousands of enterprise apps, including mobile apps
                </li>
            </ul>
        </main>
    );
}

export default function App() {
    return (
        <>
            <div className="min-h-[650px] rounded-lg border-2 my-5 max-w-xl mx-auto ">
                <NavBar />
                <HeadingPart />
                <MainContent />
            </div>
        </>
    );
}
