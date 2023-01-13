import { useState } from "react";
import { Alert, Button, Card } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../Pages/Context/AuthContext";


export default function Dashboard(){

    const [error, setError] = useState('')
    const { logout, currentUser } = useAuth()

    const navigate = useNavigate()
    const goback = () => {
        navigate('/')
    }


  async  function handleLogout(e){
        setError('')

        try {
            await logout()
            goback()
            
        } catch{
            setError('Failed to Log out.')
        }
    }

    return (
        <>
            <Card>   
                <Card.Body>
                    <h1 className="text-center mb-4">Profile:</h1>
                    {error && <Alert variant="danger">{error}</Alert>}   
                    <strong>Email: </strong> {currentUser && currentUser.email}
                </Card.Body>   
            </Card>
            <div className="w-100 text-center mt-20">
                <Button variant="link" onClick={handleLogout}>Log Out</Button>
            </div>
        </>
    )
}