import { useState } from 'react'
import useLocalStorage from './ToggleLocalStorage.js'
const useDarkMode = (key) => {
    const [someValue, setSomeValue] = useLocalStorage(key, false)
    return [someValue, setSomeValue];
};
export default useDarkMode; 