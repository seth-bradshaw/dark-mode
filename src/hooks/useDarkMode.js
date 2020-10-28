import React from 'react';
import {useLocalStorage} from './useLocalStorage';

export const useDarkMode = (key) => {
    const [someValue, setSomeValue] = useLocalStorage(key, false)
    return [someValue, setSomeValue]
}