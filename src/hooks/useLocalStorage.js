import { useState } from 'react';

export function useLocalStorage (key, initialValue) {
    const [sortedValue, setSortedValue] = useState(() => {
        const item = window.localStorage.getItem(key);

        return item ? JSON.parse(item) : initialValue;
    })

    return [sortedValue]
}