import { usePage } from '@inertiajs/react';
import { useState } from 'react';

export default function Authenticated({ children }) {
    const user = usePage().props.auth.user;

    const [sideBarOpen, setSideBarOpen] = useState(true);

    return (
        <div
            className={`grid transition-all duration-500 ${
                sideBarOpen
                    ? 'md:grid-cols-[15rem_1fr]'
                    : 'md:grid-cols-[0rem_1fr]'
            } grid-cols-none`}
        >
            <SideBar
                open={sideBarOpen}
                openHandler={() => setSideBarOpen(!sideBarOpen)}
                t={dict?.layout}
            />
            <div></div>
            <main>{children}</main>
        </div>
    );
}
