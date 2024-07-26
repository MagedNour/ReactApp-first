import React, { useState } from 'react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState('Portfolio');

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    // Function to handle nav item click
    const handleNavItemClick = (itemName) => {
        setSelectedItem(itemName);
    };

    return (
        <>
            <nav className='bg-[#2D3E50] w-full font-montserrat fixed z-40'>
                <div className='container mx-auto px-5 flex flex-col lg:flex-row justify-between items-center py-8'>
                    <div className="flex justify-between items-center w-full">
                        <div className="brand text-xl lg:text-3xl text-white font-bold uppercase cursor-pointer">
                            Start React
                        </div>
                        <button
                            onClick={toggleNavbar}
                            className="navbar-toggler lg:hidden text-white text-xl border border-4 border-transparent bg-primary p-2 rounded-md focus:border-white"
                        >
                            <span>Menu</span>
                            <i className="fa-solid fa-bars ms-2"></i>
                        </button>
                    </div>
                    <div className={`nav-items w-full lg:w-auto lg:block transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen mt-4' : 'max-h-0 mt-0'} lg:max-h-max overflow-hidden lg:overflow-visible`}>
                        <ul className='flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-20'>
                            <li className='nav-item'>
                                <a
                                    className={`nav-link cursor-pointer hover:text-primary text-white font-bold py-5 px-10 rounded-md inline-block w-full ${selectedItem === 'Portfolio' ? 'bg-primary hover:text-white' : ''}`}
                                    onClick={() => handleNavItemClick('Portfolio')}
                                >
                                    Portfolio
                                </a>
                            </li>
                            <li className='nav-item'>
                                <a
                                    className={`nav-link cursor-pointer hover:text-primary text-white font-bold py-5 px-10 rounded-md inline-block w-full ${selectedItem === 'About' ? 'bg-primary hover:text-white' : ''}`}
                                    onClick={() => handleNavItemClick('About')}
                                >
                                    About
                                </a>
                            </li>
                            <li className='nav-item'>
                                <a
                                    className={`nav-link cursor-pointer hover:text-primary text-white font-bold py-5 px-10 rounded-md inline-block w-full ${selectedItem === 'Contact' ? 'bg-primary hover:text-white' : ''}`}
                                    onClick={() => handleNavItemClick('Contact')}
                                >
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}
