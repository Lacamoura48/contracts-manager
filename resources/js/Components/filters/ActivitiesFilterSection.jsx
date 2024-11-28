import { autocompleteFetch } from '@/actions/autocomplete';
import { router } from '@inertiajs/react';
import { useState } from 'react';
import AutocompleteInput from '../inputs/autocomplete/Autocomplete';
import PrimaryButton from '../PrimaryButton';

function ActivitiesFilterSection() {
    const queryParams = new URLSearchParams(window.location.search);
    const [filters, setFilters] = useState({
        client_id: queryParams.get('client_id') || '',
    });
    const submitForm = (e) => {
        e.preventDefault();
        router.get(route('settings.activities'), { ...filters });
    };

    return (
        <div className="mb-5 py-3">
            <form
                onSubmit={submitForm}
                method="get"
                className="flex items-end gap-2"
            >
                <div className="flex-1">
                    <AutocompleteInput
                        placeholder={'إختر زبونا'}
                        dataFunction={async (fetchParams) =>
                            autocompleteFetch('clients', fetchParams)
                        }
                        defaultValue={queryParams.get('client_id')}
                        choiceHandler={(choice) =>
                            setFilters((p) => {
                                return { ...p, client_id: choice };
                            })
                        }
                        listItemAtributeName={'full_name'}
                        id="contract-filter-form"
                        label="الزبون"
                    />
                </div>
                <PrimaryButton type="submit" className="w-24">
                    بحث
                </PrimaryButton>
            </form>
        </div>
    );
}

export default ActivitiesFilterSection;
