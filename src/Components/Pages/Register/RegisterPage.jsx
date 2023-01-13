import { Container } from "react-bootstrap"
import Register from "./Register"


function RegisterPage(){
    return(
        <>
            <Container  
            className="d-flex align-items-center justify-content-center" 
            style={{minHeight: "100vh"}}
            >
                <div className="w-100" 
                style={{maxWidth: '400px'}}>
                    <Register></Register>
                </div>
            </Container>
        </>
    )
}


export default RegisterPage