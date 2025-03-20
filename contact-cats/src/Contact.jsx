export default function Contact(props) {
    return (
        <div className="contact-card p-0 max-w-[300px] max-h-[500px] rounded-2xl shadow-(--myproperty2)">
            <img src={props.img} alt="" className="my-0 mx-auto  p-1.5 rounded-2xl w-[90%]" />
            <article className="ml-6 mb-2 p-0">
                <h1 className="p-1 font-bold text-2xl">{props.name}</h1>
                <div className=" flex gap-2 p-1.5 items-center">
                    <img src="./phone-icon.png" alt="Phone Icon" className="w-[13px] h-[13px]"/>
                    <div className="text-[13px]">{props.phone}</div>
                </div>
                <div className=" flex gap-2 p-1.5 items-center">
                    <img className="w-[19px] h-[16px] " src="./mail-icon.png" alt="Mail Icon" />
                    <div className="text-[13px]">{props.email}</div>
                </div>
            </article>
        </div>
    );
}
