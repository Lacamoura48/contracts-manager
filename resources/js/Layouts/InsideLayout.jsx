import CustomLink from '@/Components/buttons/CustomLink';
import { Head } from '@inertiajs/react';

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
                        <div className="flex flex-wrap gap-2">
                            {headerLink &&
                                headerLink.map((hLink) => {
                                    return (
                                        <CustomLink
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
