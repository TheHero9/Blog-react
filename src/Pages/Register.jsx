import { useState } from "react";
import { useRef } from "react";
import { Alert, Button, Card, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

const Register = () => {

    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { signup, currentUser } = useAuth()

    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)



    async function handleSubmit(e){

        //Prevent from refreshing
        e.preventDefault()

        if(passwordRef.current.value !== passwordConfirmRef.current.value){
            return setError("Passwords do no match :?")
        }

        try{
            setError('')
            setLoading(true)

            //Do the signup
           await  signup(emailRef.current.value, passwordRef.current.value)
        } catch(error) {
            console.log(error)
            setError('Failed to create an account')
        }

        setLoading(false)
    
    }

    return(
        <>

         
          <Card>
            <Card.Body>
                <h2> Sign Up <br></br> (⚠️Work in progress)</h2>
                {currentUser && currentUser.email}
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

                    <Form.Group id='password-confirm'>
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" ref={passwordConfirmRef} required/>
                    </Form.Group>

                    <Button disabled={loading} className="w-20" type="submit">
                        Sign Up
                    </Button>
                </Form>
            </Card.Body>
          </Card>

          <div className="w-100 text-center mt-2">
            Already have an account? <Link  to="/login" relative="path">Log in</Link>
          </div>

        </>
    )
}


export default Register;