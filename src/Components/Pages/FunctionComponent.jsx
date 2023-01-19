import React from "react"
import { Button } from "react-bootstrap"
import { useThemeUpdate } from "./Context/ThemeContext"
import { useTheme } from "./Context/ThemeContext"


export default function ThemeContextComponent(){
    const lightTheme = useTheme()
    const toggleTheme = useThemeUpdate()
    
    const themeStyles = {
        backgroundColor: lightTheme ? 'red' : 'blue',
        color: !lightTheme ? 'red' : 'blue'
    }

    
    return(
        <>
            <Button onClick={toggleTheme}>Toggle2</Button>
            <div style={themeStyles}> 
                <h1>Hello</h1>
            </div>
        </>
    )
}