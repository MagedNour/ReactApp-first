import React from 'react';
import SectionDivider from '../SectionDivider/SectionDivider.jsx';



function Modal({src,title, closeModal}) {
    
    
    return (
        <>
            <section className='bg-black bg-opacity-25 fixed inset-0 overflow-y-auto z-50'>
                <div className="modal-dialog  rounded-lg w-10/12 md:w-3/4 mx-auto bg-white mt-20 py-10 relative">
                    <button onClick={closeModal} className='absolute end-5 top-5 cursor-pointer'>
                    <i className="fa-solid fa-xmark text-3xl"></i>
                    </button>
                    <div className="section-title text-center mx-auto flex flex-col justify-end items-center ">
                        <h2 className='text-4xl lg:text-5xl font-semibold text-[#2c3e50] uppercase'>{title}</h2>
                        <SectionDivider color="#2c3e50" />
                    </div>

                    <div className="w-5/6 mx-auto rounded-lg overflow-hidden mt-10">
                        <img src={src} alt="Cabin" />
                        <p className='mt-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                    </div>
                </div>
            </section>

        </>
    );
}

export default Modal;