import { Link, usePage } from '@inertiajs/react';
import {
    ChevronRight,
    Home,
    ScrollText,
    Settings,
    Settings2,
    Upload,
    Users,
} from 'lucide-react';
import { useState } from 'react';
import NavLink from './NavLink';

function SideBar({ open, openHandler }) {
    const [shown, setShown] = useState(false);
    const { auth } = usePage().props;

    return (
        <>
            <nav
                className={
                    'bg-primary z-20 flex h-16 w-full items-center gap-2 bg-black pl-4 md:hidden'
                }
            >
                <div className="mx-auto h-14 w-24">
                    <img
                        className="mx-auto block h-full w-full object-contain"
                        src={auth.user.logo || '/icons/logo.png'}
                        alt="logo"
                    />
                </div>
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
                        <div className="mx-auto h-24 w-28">
                            <img
                                className="mx-auto block h-full w-full object-contain"
                                src={auth.user.logo || '/icons/logo.png'}
                                alt="logo"
                            />
                        </div>
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
                            link={'clients.index'}
                            label="الزبناء"
                            icon={<Users size={22} />}
                        />
                        <NavLink
                            showHandler={() => setShown(false)}
                            link={'contracts.index'}
                            label="العقود"
                            icon={<ScrollText size={22} />}
                        />
                        <NavLink
                            showHandler={() => setShown(false)}
                            link={'bonds.index'}
                            label="الدفعات"
                            icon={<Upload size={22} />}
                        />
                        <NavLink
                            showHandler={() => setShown(false)}
                            link={'profile.edit'}
                            label="الإعدادات"
                            icon={<Settings2 size={22} />}
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
                    <p className="mx-auto mt-auto pb-5 text-gray-600">0.0.6</p>
                </div>
            </aside>
            <div className="fixed bottom-0 left-0 right-0 z-[30] flex h-16 flex-row-reverse items-center bg-black p-1 md:hidden">
                <Link
                    className={`${route().current('dashboard') && 'rounded-md bg-white'} flex h-full flex-1 items-center justify-center p-5 transition-colors duration-500`}
                    href="/dashboard"
                >
                    <Home
                        size={25}
                        color={route().current('dashboard') ? 'black' : 'white'}
                    />
                </Link>
                <Link
                    className={`${route().current('clients.index') && 'rounded-md bg-white'} flex h-full flex-1 items-center justify-center p-5 transition-colors duration-500`}
                    href="/clients"
                >
                    <Users
                        size={25}
                        color={
                            route().current('clients.index') ? 'black' : 'white'
                        }
                    />
                </Link>
                <Link
                    className={`${route().current('contracts.index') && 'rounded-md bg-white'} flex h-full flex-1 items-center justify-center p-5 transition-colors duration-500`}
                    href="/contracts"
                >
                    <ScrollText
                        size={25}
                        color={
                            route().current('contracts.index')
                                ? 'black'
                                : 'white'
                        }
                    />
                </Link>
                {/* <Link
                    className={`${route().current('bonds.index') && 'rounded-md bg-white'} flex h-full flex-1 items-center justify-center p-5 transition-colors duration-500`}
                    href="/bonds"
                >
                    <Upload
                        size={25}
                        color={
                            route().current('bonds.index') ? 'black' : 'white'
                        }
                    />
                </Link> */}
                <Link
                    className={`${route().current('profile.edit') && 'rounded-md bg-white'} flex h-full flex-1 items-center justify-center p-5 transition-colors duration-500`}
                    href={route('profile.edit')}
                >
                    <Settings
                        size={25}
                        color={
                            route().current('profile.edit') ? 'black' : 'white'
                        }
                    />
                </Link>
            </div>
        </>
    );
}

export default SideBar;
