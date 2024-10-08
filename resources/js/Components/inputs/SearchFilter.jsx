import { Search } from 'lucide-react';
import CustomInput from './CustomInput';

function SearchFilter({ value, onChange, placeholder, name }) {
    return (
        <div className="flex-1">
            <CustomInput
                defaultValue={value}
                id="clients-search"
                label="بحث"
                name={name}
                onChange={onChange}
                placeholder={placeholder}
                icon={<Search size={24} color="black" />}
            />
        </div>
    );
}

export default SearchFilter;
