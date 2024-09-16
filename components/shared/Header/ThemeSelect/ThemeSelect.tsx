import { FC, useEffect, useState } from 'react';
import Select, { SingleValue } from 'react-select';
import options from './options';
import { IOption, IThemeSelect } from './ThemeSelect.types';
import SkeletonThemeSelect from './SkeletonThemeSelect';

const ThemeSelect: FC<IThemeSelect> = ({ theme }) => {
    const [selectedOption, setSelectedOption] = useState<SingleValue<IOption>>(null);

    useEffect(() => {
        if (theme) {
            const defaultOption = options.find((option) => option.value === theme);
            if (defaultOption) setSelectedOption(defaultOption);
        }
    }, [theme]);

    if (!theme) return <SkeletonThemeSelect />;

    return (
        <Select
            value={selectedOption}
            onChange={setSelectedOption}
            options={options}
            placeholder="Theme"
            isSearchable={false}
            instanceId="theme-select"
            unstyled
            className="theme-select-container"
            classNamePrefix="theme-select"
        />
    );
};

export default ThemeSelect;
