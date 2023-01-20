import React from "react"
import { Button } from "react-bootstrap"
import { FaMoon } from "react-icons/fa"
import { useThemeUpdate } from "./Context/ThemeContext"
import { useTheme } from "./Context/ThemeContext"



export default function TestDiv(){

    const lightTheme = useTheme()
    const toggleTheme = useThemeUpdate()
    
    const themeStyles = {
        backgroundColor: lightTheme ? 'red' : 'blue',
        color: !lightTheme ? 'red' : 'blue'
    }

    return(
        <div>
            <Button className="buttonMode" onClick={toggleTheme}><FaMoon/></Button>
            <h1 style={themeStyles}>Lets see my color: {lightTheme} </h1>
        </div>
    )
}