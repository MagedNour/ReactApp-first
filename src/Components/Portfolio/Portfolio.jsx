import React, { useState } from 'react';
import SectionDivider from '../SectionDivider/SectionDivider';
import cabin from '../../../src/assets/imgs/cabin.4417330275f78faa31c3.png';
import cake from '../../../src/assets/imgs/cake.6554473016d32b343f02.png';
import circus from '../../../src/assets/imgs/circus.494a4a914b5471b41f3e.png';
import game from '../../../src/assets/imgs/game.a940b57aa7bab2eacc52.png';
import safe from '../../../src/assets/imgs/safe.01792c0bdc342bf4bf9c.png';
import submarine from '../../../src/assets/imgs/submarine.48c9704ca7f8ce901038.png';
import Modal from '../Modal/Modal';





export default function Portfolio(props) {

    const [isModalOpen, setModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedTitle, setSelectedTitle] = useState("")
    console.log(isModalOpen);

    // Function to show the modal with the selected image
    const showModal = (src , title) => {
        
        setSelectedImage(src);
        setSelectedTitle(title)
        setModalOpen(true);
    };

    // Function to close the modal
    const closeModal = () => {
        setModalOpen(false);
        setSelectedImage(null);
    };

    return (
        <>

            <section className='portfolio py-20'>
                <div className="section-title text-center mx-auto flex flex-col justify-end items-center ">
                    <h2 className='text-5xl font-semibold text-[#2c3e50]'>PORTFOLIO</h2>
                    <SectionDivider color="#2c3e50" />
                </div>

                <div className="container p-8 mt-8 mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div onClick={() => { showModal(cabin, "LOG CABIN") }} className="col-span-1 rounded-lg overflow-hidden bg-blue-400 relative">
                            <div className="layer absolute bg-primary bg-opacity-75 cursor-pointer inset-0 flex justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                                <i className="fa-solid fa-plus text-8xl text-white"></i>
                            </div>

                            <img className='w-full ' src={cabin} alt="avatarImage" />
                        </div>

                        <div onClick={() => { showModal(cake, "TASTY CAKE") }} className="col-span-1 rounded-lg overflow-hidden bg-blue-400 relative">
                            <div className="layer absolute bg-primary bg-opacity-75 cursor-pointer inset-0 flex justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                                <i className="fa-solid fa-plus text-8xl text-white"></i>
                            </div>

                            <img className='w-full ' src={cake} alt="cake" />
                        </div>

                        <div onClick={() => { showModal(circus, "CIRCUS TENT") }} className="col-span-1 rounded-lg overflow-hidden bg-blue-400 relative">
                            <div className="layer absolute bg-primary bg-opacity-75 cursor-pointer inset-0 flex justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                                <i className="fa-solid fa-plus text-8xl text-white"></i>
                            </div>

                            <img className='w-full ' src={circus} alt="circus" />
                        </div>

                        <div onClick={() => { showModal(game, "Controller") }} className="col-span-1 rounded-lg overflow-hidden bg-blue-400 relative">
                            <div className="layer absolute bg-primary bg-opacity-75 cursor-pointer inset-0 flex justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                                <i className="fa-solid fa-plus text-8xl text-white"></i>
                            </div>

                            <img className='w-full ' src={game} alt="game" />
                        </div>

                        <div onClick={() => { showModal(safe, "LOCKED SAFE") }} className="col-span-1 rounded-lg overflow-hidden bg-blue-400 relative">
                            <div className="layer absolute bg-primary bg-opacity-75 cursor-pointer inset-0 flex justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                                <i className="fa-solid fa-plus text-8xl text-white"></i>
                            </div>

                            <img className='w-full ' src={safe} alt="safe" />
                        </div>

                        <div onClick={() => { showModal(submarine, "SUBMARINE") }} className="col-span-1 rounded-lg overflow-hidden bg-blue-400 relative">
                            <div className="layer absolute bg-primary bg-opacity-75 cursor-pointer inset-0 flex justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                                <i className="fa-solid fa-plus text-8xl text-white"></i>
                            </div>

                            <img className='w-full ' src={submarine} alt="submarine" />
                        </div>

                    </div>
                </div>
            </section>
           {
            isModalOpen? <Modal src = {selectedImage} title = {selectedTitle} closeModal ={closeModal} />:null
           }



        </>
    );
}
