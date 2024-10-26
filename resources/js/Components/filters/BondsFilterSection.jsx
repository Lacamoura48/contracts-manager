import { autocompleteFetch } from '@/actions/autocomplete';
import { router } from '@inertiajs/react';
import { useState } from 'react';
import AutocompleteInput from '../inputs/autocomplete/Autocomplete';
import CustomInput from '../inputs/CustomInput';
import CustomSelect from '../inputs/CustomSelect';
import PrimaryButton from '../PrimaryButton';

function BondsFilterSection() {
    const queryParams = new URLSearchParams(window.location.search);
    const [filters, setFilters] = useState({
        month: queryParams.get('month') || '',
        client_id: queryParams.get('client_id') || '',
        status: queryParams.get('status') || '',
    });
    const submitForm = (e) => {
        e.preventDefault();
        router.get(route('bonds.index'), { ...filters });
    };

    return (
        <div className="mb-5 py-3">
            <form
                onSubmit={submitForm}
                method="get"
                className="grid grid-cols-2 items-end gap-2 md:grid-cols-4"
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

                <CustomInput
                    type="month"
                    label="الشهر"
                    onChange={(e) =>
                        setFilters((p) => {
                            return { ...p, month: e.target.value };
                        })
                    }
                    name="bonds_month"
                    defaultValue={queryParams.get('month')}
                    id="bonds-month"
                />
                <CustomSelect
                    onChange={(e) =>
                        setFilters((p) => {
                            return { ...p, status: e.target.value };
                        })
                    }
                    id="filters-bonds-status"
                    name="status"
                    defaultValue={filters.status || 'null'}
                >
                    <option value="">الحالة</option>
                    <option value="coming">القادمة</option>
                    <option value="pending">المستحقة</option>
                    <option value="late">المتأخرة</option>
                    <option value="very_late">المتعترة</option>
                </CustomSelect>
                <PrimaryButton type="submit" className="w-24">
                    بحث
                </PrimaryButton>
            </form>
        </div>
    );
}

export default BondsFilterSection;
