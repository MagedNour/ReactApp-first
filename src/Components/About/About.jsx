import React from 'react';
import SectionDivider from '../SectionDivider/SectionDivider.jsx';

export default function About(props) {
    return (
        <section className='bg-primary py-20'>
            <div className="section-title text-center mx-auto flex flex-col justify-end items-center ">
                <h2 className='text-5xl font-semibold text-white'>About</h2>
                <SectionDivider color="white"/>
            </div>

            <div className="container w-2/3 mx-auto mt-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-white text-xl gap-x-32 leading-8">
                    <div className="col-md-6">
                        <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                    </div>
                    <div className="col-md-6">
                        <p>You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!</p>
                    </div>
                </div>
            </div>
        </section>
    );
}