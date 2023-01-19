import { Button } from 'react-bootstrap'
import React, {useState} from 'react'
import ThemeContextComponent from './FunctionComponent'
import { ThemeProvider } from './Context/ThemeContext'

export default function AppTest(){
    return(
        <ThemeProvider>    
            <ThemeContextComponent/>
        </ThemeProvider>
    )
}