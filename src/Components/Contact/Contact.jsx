import SectionDivider from "../SectionDivider/SectionDivider.jsx";




export default function Contact(props) {
    return (
        <>
            <section className="py-20">

                <div className="section-title text-center mx-auto flex flex-col justify-end items-center ">
                    <h2 className='text-5xl font-semibold text-[#2c3e50]'>CONTACT ME</h2>
                    <SectionDivider color="##2c3e50" />
                </div>

                <div className="container w-2/3 mx-auto py-20">
                    <form>
                        <input className="placeholder-gray-500 outline-none w-full text-2xl" type="text" name="name" placeholder="Name"/>
                        <input className="placeholder-gray-500 outline-none w-full text-2xl my-10" type="email" name="email" placeholder="Email Address" />
                        <input className="placeholder-gray-500 outline-none w-full text-2xl" type="tel" name="phone" placeholder="Phone Number"/>
                        <textarea className="placeholder-gray-500 outline-none w-full text-2xl mt-10 mb-5" name="message" cols="30" rows="5" placeholder="Message"></textarea>

                        <button type="button" className="bg-primary px-10 py-5 rounded-lg text-white text-xl cursor-pointer transition-colors duration-150 hover:bg-[#19a98c]">send</button>
                    </form>
                </div>
            </section>

        </>
    );
}
