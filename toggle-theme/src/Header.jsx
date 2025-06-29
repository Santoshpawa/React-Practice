import { useState , useEffect} from "react";
import './Header.css'
export default function Header(){
    const [theme , setTheme] = useState('');
    useEffect(()=>{
        setTheme(localStorage.getItem('theme') || 'light');
    }, [])
    
    return(
        <>
        <div className="header">
            <p>
                { theme == 'dark'  && <span className="material-symbols-outlined" onClick = {()=>{setTheme('light');
                 localStorage.setItem('theme', "light");
                 }}>light_mode</span>}
                { theme == 'light'  && <span className="material-symbols-outlined" onClick = {()=>{setTheme('dark');
                 localStorage.setItem('theme', "dark");
                 }}>dark_mode</span>}
            </p>
        </div>
        </>
    )
}