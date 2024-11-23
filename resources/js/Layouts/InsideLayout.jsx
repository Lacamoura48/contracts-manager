import FamousLink from '@/Components/buttons/FamousLink';
import { Head } from '@inertiajs/react';
import { ChevronLeft } from 'lucide-react';

export default function InsideLayout({
    children,
    headerTitle,
    headerLink,
    rightLink,
    noBack,
}) {
    return (
        <>
            <Head title={headerTitle} />
            <div className="px-2 pb-44 md:px-0 md:pb-10">
                <div className="flex flex-row-reverse justify-between pt-4">
                    {!noBack && (
                        <button
                            onClick={() => history.back()}
                            className="relative top-1 rounded-full border bg-black px-2 py-1 text-lg text-white transition-colors duration-500 hover:bg-black hover:text-white"
                        >
                            رجوع
                            <ChevronLeft className="mr-1 inline" />
                        </button>
                    )}
                    {rightLink && (
                        <FamousLink
                            href={rightLink.url}
                            Icon={rightLink.icon}
                            label={rightLink.label}
                        />
                    )}
                </div>
                <div className="mx-auto max-w-7xl pt-10 sm:px-6 lg:px-8">
                    <div className="mb-6 flex flex-col items-center gap-5 md:flex-row">
                        <h1 className="text-center text-4xl font-bold md:text-start md:text-5xl">
                            {headerTitle}
                        </h1>
                        <div className="flex flex-wrap justify-center gap-2 md:justify-normal">
                            {headerLink &&
                                headerLink.map((hLink) => {
                                    return (
                                        <FamousLink
                                            key={hLink.label}
                                            href={hLink.url}
                                            Icon={hLink.icon}
                                            label={hLink.label}
                                        />
                                    );
                                })}
                        </div>
                    </div>

                    <div className="bg-white shadow-sm sm:rounded-lg">
                        {children}
                    </div>
                </div>
            </div>
        </>
    );
}
