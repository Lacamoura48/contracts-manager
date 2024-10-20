import { Link, usePage } from '@inertiajs/react';
import PaginationArrow from './PaginationArrow';

function Pagination({ data }) {
    return (
        <div className="flex flex-row-reverse">
            {data?.links.map((link, index) => {

                if (index === 0)
                    return (
                        <PaginationArrow
                            direction={true}
                            key={link.label}
                            url={link.url}
                        />
                    );
                if (index === data.links.length - 1)
                    return <PaginationArrow key={link.label} url={link.url} />;
                return (
                    <Link
                        key={link.label}
                        href={link.url}
                        className="mx-1 hidden transform rounded-md bg-white px-4 py-2 text-gray-700 transition-colors duration-300 hover:bg-black hover:text-white sm:inline dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-black dark:hover:text-gray-200"
                    >
                        {link.label}
                    </Link>
                );
            })}
        </div>
    );
}

export default Pagination;
