import { useState } from "react";
import React from "react";
import { useRef } from "react";
import { Alert, Button, Card, Container, Form } from "react-bootstrap";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "./Context/AuthContext";


export default function ForgotPassword() {
    const emailRef = useRef()

    const { resetPassword } = useAuth()

    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState('')

    async function handleSubmit(e){

        //Prevent from refreshing
        e.preventDefault()

        try{
            setMessage('')
            setError('')
            setLoading(true)

            //Do the reset
            await resetPassword(emailRef.current.value)
            setMessage("Check your inbox for instructions. ")
        } catch(error) {
            console.log(error)
            setError('Failed to reset password.')
        }

        setLoading(false)
    
    }

    return(
        <>
            <Container
            className="d-flex align-items-center justify-content-center" 
            style={{minHeight: "60vh"}}
            >
                 <div className="w-100" 
                style={{maxWidth: '400px'}}>
                    {message && <Alert className="mt-4">{message}</Alert>}
                    <Card>

                        <Card.Body className="flex-my">
                        
                            <h2> Reset your password</h2>
                            
                            {error && <Alert variant="danger">{error}</Alert>}

                            <Form onSubmit={handleSubmit}>
                                <Form.Group id='email'>
                                    <Form.Label className="text-label">E-mail:</Form.Label>
                                    <Form.Control type="email" ref={emailRef} required/>
                                </Form.Group>

                                <Button disabled={loading} className="w-100 mt-4 buttons-my" type="submit">
                                    Reset Password
                                </Button>

                            </Form>
                                <div className="w-100 text-center mt-4">
                                    <Link  to="/login" relative="path">Login</Link>
                                </div>

                        </Card.Body>
                    </Card>

                        <div className="w-100 text-center mt-2">
                            Need an account? <Link  to="/register" relative="path">Sign Up</Link>
                        </div>

                    </div>
            </Container>
         
         

        </>
    )
}
