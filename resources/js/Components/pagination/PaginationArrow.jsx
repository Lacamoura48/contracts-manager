import { Link } from '@inertiajs/react';

function PaginationArrow({ direction, url }) {
    return (
        <Link
            disabled={url ? true : false}
            href={url}
            className={`mx-1 flex items-center justify-center rounded-md bg-white px-4 py-2 capitalize ${direction ? 'ltr:-scale-x-100' : 'rtl:-scale-x-100'} ${!url && 'cursor-not-allowed'} dark:bg-gray-800`}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-5 w-5 ${url ? 'text-gray-200' : 'text-gray-500'}`}
                viewBox="0 0 20 20"
                fill={'currentColor'}
            >
                <path
                    fillRule="evenodd"
                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                    clipRule="evenodd"
                />
            </svg>
        </Link>
    );
}

export default PaginationArrow;
