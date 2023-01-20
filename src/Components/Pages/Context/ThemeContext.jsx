import React, {useContext, useState} from "react"

const ThemeContext = React.createContext()
const ThemeUpdateContext = React.createContext()

export function useTheme(){
    return useContext(ThemeContext)
}

export function useThemeUpdate(){
    return useContext(ThemeUpdateContext)
}

export function ThemeProvider({children}){
    const [lightTheme, setLightTheme] = useState(true)

    function toggleTheme(){
        console.log(23)
        setLightTheme(prevTheme => !prevTheme)
    }

    return(
        <ThemeContext.Provider value={lightTheme}>
            <ThemeUpdateContext.Provider value={toggleTheme}>
             {children}
            </ThemeUpdateContext.Provider>
        </ThemeContext.Provider>
    )
}