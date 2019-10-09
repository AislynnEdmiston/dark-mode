import { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';

export function useDarkMode (value) {
    const [darkMode, setDarkMode] = useLocalStorage('DarkModeKey', false);

    useEffect(()=>{
        const body = document.querySelector('body');

        if(darkMode === true){
            body.classList.add('dark-mode')
        } else {
            body.classList.remove('dark-mode')
        }

    }, [darkMode])
    

    return [darkMode, setDarkMode]
}