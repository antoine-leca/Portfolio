import React from 'react';

const Header = () => {
    return (
        <header className="drawer drawer-end main-font-r">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                {/* Navbar */}
                <div className="navbar w-full">
                    <a className="mx-2 flex-1 px-2 text-3xl main-font-m whitespace-nowrap" href="/">Antoine LECA</a>
                    <h2 className='flex-3 text-xl text-center hidden lg:block'>Actuellement en recherche d'alternance</h2>
                    <h2 className='flex-3 text-xl text-center hidden lg:block'>Marseille, FRANCE</h2>
                    <div className="flex-none lg:hidden">
                        <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                className="inline-block h-6 w-6 stroke-current"
                            >
                                <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                                ></path>
                            </svg>
                        </label>
                    </div>
                    <div className="hidden flex-none lg:block">
                        <ul className="menu menu-horizontal">
                        {/* Navbar menu content here */}
                            <li><a className='text-xl' href='/'>Accueil</a></li>
                            <li><a className='text-xl' href='/projets'>Projets</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu bg-main min-h-full w-80 p-4 pt-[64px]">
                {/* Sidebar content here */}
                    <li><a className='text-xl' href='/'>Accueil</a></li>
                    <li><a className='text-xl' href='/projets'>Projets</a></li>
                </ul>
            </div>
        </header>
    );
};

export default Header;