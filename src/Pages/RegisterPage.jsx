import { Container } from "react-bootstrap"
import { AuthProvider } from "../Context/AuthContext"
import Register from "./Register"


function RegisterPage(){
    return(
        <>
        <AuthProvider>
            <Container  
            className="d-flex align-items-center justify-content-center" 
            style={{minHeight: "100vh"}}
            >
                <div className="w-100" 
                style={{maxWidth: '400px'}}>
                    <Register></Register>
                </div>
            </Container>
        </AuthProvider>
        </>
    )
}


export default RegisterPage