import { autocompleteFetch } from '@/actions/autocomplete';
import { router } from '@inertiajs/react';
import { useState } from 'react';
import AutocompleteInput from '../inputs/autocomplete/Autocomplete';
import PrimaryButton from '../PrimaryButton';

function ContractsFilterSection() {
    const queryParams = new URLSearchParams(window.location.search);
    const [filters, setFilters] = useState({});
    const submitForm = (e) => {
        e.preventDefault();
        router.get(route('contracts.index'), { ...filters });
    };
    console.log(queryParams.get('q'));

    return (
        <div className="mb-5 py-3">
            <form
                onSubmit={submitForm}
                method="get"
                className="flex items-end gap-2"
            >
                <AutocompleteInput
                    placeholder={'إختر زبونا'}
                    dataFunction={async (fetchParams) =>
                        autocompleteFetch('clients', fetchParams)
                    }
                    defaultValue={queryParams.get('q')}
                    choiceHandler={(choice) =>
                        setFilters((p) => {
                            return { ...p, q: choice };
                        })
                    }
                    listItemAtributeName={'full_name'}
                    id="contract-filter-form"
                    label="الزبون"
                />
                <PrimaryButton type="submit" className="w-24">
                    بحث
                </PrimaryButton>
            </form>
        </div>
    );
}

export default ContractsFilterSection;
