import Contact from "./Contact.jsx";

export default function App() {
    return (
        <>
            <header className="my-0 p-1 text-center mx-auto max-w-[1200px] bg-amber-100 font-bold text-4xl text-green-700">
                Feline Contacts
            </header>
            <div className=" xl:p-0 max-lg:absolute p-26 top-[15%] max-sm:p-12">
                <div className="my-2 mx-auto max-w-[700px] grid grid-cols-2 gap-x-0.5 gap-y-8 justify-center justify-items-center  ">
                    <Contact
                        img="./mr-whiskerson.png"
                        name="Mr. Whiskerson"
                        phone="(212) 555-1234"
                        email="abc@gmail.com"
                    />
                    <Contact
                        img="./felix.png"
                        name="Mr. Felix"
                        phone="(212) 555-1234"
                        email="abc@gmail.com"
                    />
                    <Contact
                        img="./fluffykins.png"
                        name="Mr. Fluffy Kins"
                        phone="(212) 555-1234"
                        email="abc@gmail.com"
                    />
                    <Contact
                        img="./pumpkin.png"
                        name="Mr. Pumpkin"
                        phone="(212) 555-1234"
                        email="abc@gmail.com"
                    />
                </div>
            </div>
        </>
    );
}
