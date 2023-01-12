import { Container } from "react-bootstrap"
import { AuthProvider } from "../Context/AuthContext"
import Login from "./Login"


function LoginPage(){
    return(
        <>
        <AuthProvider>
            <Container  
            className="d-flex align-items-center justify-content-center" 
            style={{minHeight: "100vh"}}
            >
                <div className="w-100" 
                style={{maxWidth: '400px'}}>
                    <Login></Login>
                </div>
            </Container>
        </AuthProvider>
        </>
    )
}


export default LoginPage