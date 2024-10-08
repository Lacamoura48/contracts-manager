import { Link } from '@inertiajs/react';
import { ChevronRight, Home, ScrollText, Settings, Users } from 'lucide-react';
import { useState } from 'react';
import NavLink from './NavLink';

function SideBar({ open, openHandler }) {
    const [shown, setShown] = useState(false);
    return (
        <>
            <nav
                className={
                    'bg-primary z-20 flex h-16 w-full items-center gap-2 bg-black pl-4 md:hidden'
                }
            >
                <img
                    className="mx-auto block w-20"
                    src="/icons/logo.png"
                    alt="logo"
                />
            </nav>
            <aside
                className={`translate-transform fixed right-0 top-0 z-50 hidden h-screen w-full bg-black px-2 duration-500 md:block md:w-[15rem] ${
                    shown ? 'translate-x-0' : 'translate-x-full'
                } pt-6 ${open ? 'sm:translate-x-0' : 'sm:-translate-x-block'}`}
            >
                <button
                    onClick={openHandler}
                    className={`absolute top-16 hidden h-9 w-9 items-center justify-center rounded-full bg-black shadow-lg transition-all duration-500 sm:flex ${
                        open ? '-left-4 rotate-0' : '-left-10 rotate-180'
                    }`}
                >
                    <ChevronRight color="white" size={25} />
                </button>
                <div
                    className={`flex h-[calc(100vh-2rem)] flex-col transition-opacity duration-500 ${
                        open ? 'opacity-100 delay-300' : 'opacity-0'
                    }`}
                >
                    <a href="/dashboard">
                        <img
                            width={120}
                            height={120}
                            className="mx-auto mb-8 block"
                            src={'/icons/logo.png'}
                            alt="carlock logo"
                        />
                    </a>

                    <div className="relative top-3 flex flex-col">
                        <NavLink
                            showHandler={() => setShown(false)}
                            link={'dashboard'}
                            label="الرئيسية"
                            icon={<Home size={22} />}
                        />

                        <NavLink
                            showHandler={() => setShown(false)}
                            link={'clients'}
                            label="الزبناء"
                            icon={<Users size={22} />}
                        />

                        {/* <NavlinksContainer
                            title="Reporting"
                            icon={<ClipboardList size={22} />}
                        >
                            <NavLink
                                showHandler={() => setShown(false)}
                                link={'/matchReport/arrangement'}
                                absoluteLink={'/matchReport/arrangement'}
                                label={t?.sideBar.arrangement}
                                subLink
                            />
                            <NavLink
                                showHandler={() => setShown(false)}
                                link={'/matchReport/recuperation'}
                                absoluteLink={'/matchReport/recuperation'}
                                label={t?.sideBar.recuperation}
                                subLink
                            />
                            <NavLink
                                showHandler={() => setShown(false)}
                                link={'/agents-performance'}
                                label={t?.sideBar['agents-performance']}
                                subLink
                            />
                        </NavlinksContainer> */}
                    </div>
                    <p className="mx-auto mt-auto pb-5 text-gray-600">0.0.1</p>
                </div>
            </aside>
            <div className="fixed bottom-0 left-0 right-0 z-[30] flex h-20 flex-row-reverse items-center bg-black p-1 md:hidden">
                <Link
                    className={`${route().current('dashboard') && 'rounded-md bg-white'} flex h-full flex-1 items-center justify-center p-5`}
                    href="/dashboard"
                >
                    <Home
                        size={25}
                        color={route().current('dashboard') ? 'black' : 'white'}
                    />
                </Link>
                <Link
                    className={`${route().current('clients') && 'rounded-md bg-white'} flex h-full flex-1 items-center justify-center p-5`}
                    href="/clients"
                >
                    <Users
                        size={25}
                        color={route().current('clients') ? 'black' : 'white'}
                    />
                </Link>
                <Link
                    className={`${route().current('contracts') && 'rounded-md bg-white'} flex h-full flex-1 items-center justify-center p-5`}
                    href="#"
                >
                    <ScrollText
                        size={25}
                        color={route().current('contracts') ? 'black' : 'white'}
                    />
                </Link>
                <Link
                    className={`${route().current('settings') && 'rounded-md bg-white'} flex h-full flex-1 items-center justify-center p-5`}
                    href="#"
                >
                    <Settings
                        size={25}
                        color={route().current('settings') ? 'black' : 'white'}
                    />
                </Link>
            </div>
        </>
    );
}

export default SideBar;
