import { Head, Link } from '@inertiajs/react';
import { PlusCircle } from 'lucide-react';

export default function InsideLayout({ children, headerTitle, headerLink }) {
    return (
        <>
            <Head title={headerTitle} />
            <div className="px-2 pb-44 pt-10 md:px-0 md:pb-10">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="mb-6 flex flex-col items-center gap-5 md:flex-row">
                        <h1 className="text-center text-4xl font-bold md:text-start md:text-5xl">
                            {headerTitle}
                        </h1>
                        {headerLink && (
                            <Link
                                href={headerLink.url}
                                className="relative top-1 rounded-full border border-black py-1 pl-4 pr-1 transition-colors duration-500 hover:bg-black hover:text-white"
                            >
                                <PlusCircle className="ml-2 inline" />
                                {headerLink.label}
                            </Link>
                        )}
                    </div>

                    <div className="bg-white shadow-sm sm:rounded-lg">
                        {children}
                    </div>
                </div>
            </div>
        </>
    );
}
