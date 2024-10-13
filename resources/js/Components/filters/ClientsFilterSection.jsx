import SearchFilter from '../inputs/SearchFilter';
import PrimaryButton from '../PrimaryButton';

function FilterSection() {
    const queryParams = new URLSearchParams(window.location.search);
    return (
        <div className="mb-5 py-3">
            <form action="" method="get" className="flex items-end gap-2">
                <SearchFilter
                    value={queryParams.get('search')}
                    name="search"
                    placeholder="البحث باستخدام الاسم أو رقم التعريف"
                />
                <PrimaryButton type="submit" className="w-24">
                    بحث
                </PrimaryButton>
            </form>
        </div>
    );
}

export default FilterSection;
