import React from 'react';
import {useLocalStorage} from './useLocalStorage';

export const useDarkMode = (key) => {
    const [someValue, setSomeValue] = useLocalStorage(key, false)
    const toggleDarkMode = () => {
        setSomeValue(!someValue)
    }

    return [someValue, toggleDarkMode]
}