
export default function Footer(props) {
    return (
        <>
            <footer className=" bg-[#2D3E50]">
                <div className="container py-14 px-8 mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white text-center">
                        <div className="col-span-1">
                            <h3 className="text-3xl font-bold">LOCATION</h3>
                            <p className="mt-5 w-2/3 mx-auto">2215 John Daniel Drive Clark, MO 65243</p>
                        </div>
                        <div className="col-span-1 ">
                            <h3 className="text-3xl font-bold">AROUND THE WEB</h3>
                            <div className="social-icons flex justify-center gap-x-4 py-10">
                                <a className="w-[55px] h-[55px] border rounded-full flex justify-center items-center text-xl hover:bg-white hover:text-black">
                                    <i className="fa-brands  fa-facebook-f"></i>
                                </a>
                                <a className="w-[55px] h-[55px] border rounded-full flex justify-center items-center text-xl hover:bg-white hover:text-black">
                                    <i className="fa-brands  fa-twitter"></i>
                                </a>
                                <a className="w-[55px] h-[55px] border rounded-full flex justify-center items-center text-xl hover:bg-white hover:text-black">
                                    <i className="fa-brands  fa-linkedin-in"></i>
                                </a>
                                <a className="w-[55px] h-[55px] border rounded-full flex justify-center items-center text-xl hover:bg-white hover:text-black">
                                    <i className="fa-brands  fa-youtube"></i>
                                </a>
                            </div>
                        </div>

                        <div className="col-span-1">
                            <h3 className="text-3xl font-bold">ABOUT FREELANCER</h3>
                            <p className="font-bold mt-5">Freelance is a free to use, MIT licensed Bootstrap theme created by Hamza Nouh</p>
                        </div>
                    </div>
                </div>
                <div className="copyrights bg-[#1A252F] py-5 text-center text-white">
                    <p>Copyright © Maged Nour 2024</p>
                </div>

            </footer>

        </>
    );
}
