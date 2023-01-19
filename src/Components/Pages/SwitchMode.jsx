import Button from 'react-bootstrap/Button';
import { useState } from "react";
import { Card } from "react-bootstrap";
import { Form, Link } from "react-router-dom";
import { useEffect } from 'react';



export default function SwitchMode(){
    const [theme, setTheme] = useState("light")


    function handleClick(){
        if (theme === "light"){
            setTheme("dark")
        } else{
            setTheme("light")
        }
    }

    useEffect(()=>{
        document.body.className = theme;
        // document.querySelector(".test").className = "testwe"

    }, [theme]);

    return(
        <>
            <Button onClick={handleClick}>The Theme is {theme}</Button>
        </>
    )
}