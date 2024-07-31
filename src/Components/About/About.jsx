import React from 'react';
import SectionDivider from '../SectionDivider/SectionDivider.jsx';

export default function About(props) {
    return (
        <section className='bg-primary min-h-screen flex items-center justify-center'>
            <div className="about-content">
                <div className="section-title text-center mx-auto flex flex-col justify-end items-center ">
                    <h2 className='text-5xl font-semibold text-white'>About</h2>
                    <SectionDivider color="white" />
                </div>

                <div className="container w-10/12 mx-auto mt-10 ">
                    <div className="grid grid-cols-1 md:grid-cols-2 text-white text-xl  leading-8">
                        <div className="col-span-1">
                            <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                        </div>
                        <div className="col-span-1">
                            <p>You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}