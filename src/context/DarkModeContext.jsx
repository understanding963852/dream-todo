import { useContext, useEffect, useState } from "react";
import { createContext } from "react";

const DarkModeContext=createContext();


//자식노드에게 전달할 우산을 만든다
//DarkModeContext에 있는 Provider를 이용하여 자식노드를 감싸준다.
export function DarkModeProvider({children}){
    const [darkMode, setDarkMode]=useState(false)
    const toggleDarkMode=()=>{
        setDarkMode(!darkMode)  //이전값을 받아서 그것의 반대로 만든다.
        updateDarkMode(!darkMode)
    }
    useEffect(()=>{
        const isDark= localStorage.theme === 'dark'

        setDarkMode(isDark)
        updateDarkMode(isDark)
       
    },[]) //[] 빈배열은 처음 한번 실행된다. 
    // 자식들에게 전달할 내용을 value안에 객체로 전달한다.
    return <DarkModeContext.Provider value={{darkMode,toggleDarkMode}}>{children}</DarkModeContext.Provider>
}

function updateDarkMode(darkMode){
    if(darkMode){
        document.documentElement.classList.add('dark');
        localStorage.theme='dark'
    }else{
        document.documentElement.classList.remove('dark');
        localStorage.theme='light'
    }
}

//외부에 자식들이 useDarkMode라고 하면 DarkModeContext를 사용할수 있게 하겠다.   
export const useDarkMode=()=>useContext(DarkModeContext)
