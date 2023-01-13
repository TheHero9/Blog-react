import { useState } from "react";
import { useRef } from "react";
import { Alert, Button, Card, Form } from "react-bootstrap";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";


const Login = () => {

    const emailRef = useRef()
    const passwordRef = useRef()
    const { login } = useAuth()

    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    //Go back to the main page
    const navigate = useNavigate()      
    const goback = () => {
        navigate('/')
    }

    async function handleSubmit(e){

        //Prevent from refreshing
        e.preventDefault()

        try{
            setError('')
            setLoading(true)

            //Do the signup
           await  login(emailRef.current.value, passwordRef.current.value)
            goback()

        } catch(error) {
            console.log(error)
            setError('Failed to log in')
        }

        setLoading(false)
    
    }

    return(
        <>

         
          <Card>
            <Card.Body className="flex-my">
                <h2> Log In</h2>
                {error && <Alert variant="danger">{error}</Alert>}
                <Form onSubmit={handleSubmit}>
                    <Form.Group id='email'>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" ref={emailRef} required/>
                    </Form.Group>

                    <Form.Group id='password'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" ref={passwordRef} required/>
                    </Form.Group>

            

                    <Button disabled={loading} className="w-100 mt-3" type="submit">
                       Log In
                    </Button>
                </Form>
                <div className="w-100 text-center mt-4">
                    <Link  to="/forgot-password" relative="path">Forgot Password?</Link>
                </div>
            </Card.Body>
          </Card>


          <div className="w-100 text-center mt-2">
            Need an account? <Link  to="/register" relative="path">Sign Up</Link>
          </div>

        </>
    )
}


export default Login;