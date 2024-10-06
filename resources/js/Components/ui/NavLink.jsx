import { Link } from '@inertiajs/react';

function NavLink({ showHandler, link, label, subLink, icon }) {
    const isCurrentLink = route().current(link);
    return (
        <Link
            onClick={showHandler}
            className={`${isCurrentLink ? 'bg-primary text-secondary' : 'bg-secondary text-primary hover:bg-muted'} ${
                subLink ? 'py-1 pl-6 pr-2' : 'px-2 py-2 font-medium'
            } group mb-2 flex w-full items-center gap-3 rounded-md text-sm text-white`}
            href={link}
        >
            <span
                className={`${isCurrentLink ? 'h-4' : 'h-1'} w-1 rounded-full bg-white transition-all group-hover:h-4`}
            />
            {icon}
            {label}
        </Link>
    );
}

export default NavLink;
