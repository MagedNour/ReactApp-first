import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import avatarImage from '../../../src/assets/imgs/avataaars.aa9aff02ddd0ef36a1724ecef4133df9.svg';
import SectionDivider from '../SectionDivider/SectionDivider';



export default function Home(props) {

   
    return (
        <>
            <Navbar />
            <main className='min-h-70vh bg-primary pt-32 md:pt-0 lg:pt-32'>
                <div className="container mx-auto flex flex-col justify-end items-center md:justify-center lg:justify-end min-h-70vh">

                    <img className='mb-10' src={avatarImage} width={"250px"} alt="avatarImage" />
                    <h1 className='text-6xl font-bold text-white text-center'>START REACT</h1>

                   <SectionDivider color = "white"/>

                   <p className='text-white my-5'>Graphic Artist - Web Designer - Illustrator</p>

                </div>
            </main>
        </>
    );
}

