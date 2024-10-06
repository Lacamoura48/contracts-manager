import { Head } from '@inertiajs/react';

export default function InsideLayout({ children, headerTitle }) {
    return (
        <>
            <Head title={headerTitle} />
            <div className="px-2 pb-44 pt-10 md:px-0 md:pb-10">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <h1 className="mb-6 text-5xl font-bold">{headerTitle}</h1>
                    <div className="bg-white shadow-sm sm:rounded-lg">
                        {children}
                    </div>
                </div>
            </div>
        </>
    );
}
