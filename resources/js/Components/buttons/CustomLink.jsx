import { Link } from '@inertiajs/react';

export default function CustomLink({ label, href, Icon }) {
    return (
        <Link
            href={href}
            className="relative top-1 rounded-full border border-black py-1 pl-4 pr-1 transition-colors duration-500 hover:bg-black hover:text-white"
        >
            <Icon className="ml-2 inline" />
            {label}
        </Link>
    );
}
