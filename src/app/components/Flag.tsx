import React from 'react';
import { CountryFlag } from 'react-country-flags-lazyload';

interface FlagProps {
    country: string;
}

const Flag: React.FC<FlagProps> = ({ country }) => {
    if (!country) {
        return null;
    }
    return <CountryFlag countryCode={country as any} className="rounded-full h-5 w-5 flex self-center" />;
};

export default Flag;
