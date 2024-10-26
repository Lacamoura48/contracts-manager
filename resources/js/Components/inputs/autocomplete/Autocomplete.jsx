import debounce from 'lodash/debounce';
import { FileQuestion, Loader2 as Loader } from 'lucide-react';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import AutocompleteModal from './AutocompleteModal';

function AutocompleteInput({
    placeholder,
    dataFunction,
    choiceHandler,
    choice,
    defaultValue,
    listItemAtributeName,
    error,
    id,
    label,
}) {
    const inputRef = useRef(null);

    const [open, setOpen] = useState(false);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [hasNextPage, setHasNextPage] = useState(false);
    const [page, setPage] = useState(1);
    const { ref } = useInView({
        onChange: (inView) => {
            inView && setPage((prev) => prev + 1);
        },
    });
    const getResults = useCallback(
        async (pageNum, showLoader = true, emptyList = true) => {
            page === 1 && showLoader && setLoading(true);
            const dataFunctionParams = {
                q: inputRef.current.value,
                id: !inputRef.current.value ? defaultValue : '',
                page: pageNum,
            };
            const result = await dataFunction(dataFunctionParams);
            if (result?.data.length !== 0) {
                emptyList
                    ? setData([...result.data])
                    : setData((prev) => [...prev, ...result.data]);
            } else {
                setData([]);
            }
            setLoading(false);
            result?.nextPage ? setHasNextPage(true) : setHasNextPage(false);
        },
        [page],
    );
    const changeHandler = debounce(async function (e) {
        const value = e.target.value;
        inputRef.current.value = value;
        await getResults(1, false, true);
    }, 200);

    function switchPopOver(to) {
        if (to === true) {
            setPage(1);
            getResults(1, true, true);
        }
        setTimeout(() => setOpen(to), 400);
    }

    function chooseOption(id, displayText) {
        inputRef.current.value = displayText;
        choiceHandler(id);
        setOpen(false);
    }
    useEffect(() => {
        async function handleDefaultValue() {
            const res = await dataFunction({
                q: inputRef.current.value,
                id: !inputRef.current.value ? defaultValue : '',
                page: 1,
            });
            inputRef.current.value = res?.data[0][listItemAtributeName];
        }

        if (defaultValue) {
            handleDefaultValue();
        }
    }, []);
    useEffect(() => {
        if (page !== 1) {
            getResults(page, false, false);
        }
    }, [page]);
    return (
        <div className="relative w-full">
            <label htmlFor={id} className="mb-1 text-black">
                {label}
            </label>
            <input
                className={`w-full border-none px-2 py-2 placeholder:text-gray-400 focus:ring-black ${
                    error ? 'bg-red-100' : 'bg-gray-100'
                } placeholder:text-placeholder rounded-lg`}
                ref={inputRef}
                onBlur={() => switchPopOver(false)}
                onFocus={() => switchPopOver(true)}
                onKeyDown={(e) =>
                    e.key === 'Backspace' && choice && choiceHandler('')
                }
                onChange={(e) => changeHandler(e)}
                placeholder={placeholder}
                id={id}
            />
            {error && <span className="text-xs text-red-600">{error}</span>}
            <AutocompleteModal open={open}>
                {loading ? (
                    <div className="text-primary">
                        <span className="mx-auto mt-5 block w-fit animate-spin">
                            <Loader size={20} />
                        </span>
                    </div>
                ) : data?.length ? (
                    <ul>
                        {data.map((result) => {
                            const displayText = result[listItemAtributeName];
                            const id = result.id;
                            return (
                                <li key={id}>
                                    <button
                                        type="button"
                                        onClick={() =>
                                            chooseOption(id, displayText)
                                        }
                                        className="hover:bg-secondary w-full cursor-pointer rounded-md px-2 py-1 text-start transition-colors"
                                    >
                                        {displayText}
                                    </button>
                                </li>
                            );
                        })}

                        {hasNextPage && (
                            <li
                                className="bg-secondary mt-4 h-10 w-full animate-pulse"
                                ref={ref}
                            ></li>
                        )}
                    </ul>
                ) : (
                    <p className="flex h-full w-full items-center justify-center">
                        <FileQuestion color="rgb(160,160,160)" size={80} />
                    </p>
                )}
            </AutocompleteModal>
        </div>
    );
}

export default AutocompleteInput;
