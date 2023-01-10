const Register = () => {
    return(
        <>
            <form className="form-login">
                

                <div className="containerForm">
                    <h1>Make a registration.</h1>

                    <label for="username">Username: </label>
                    <input placeholder="Username" type="text" name="username"></input> 
                    
                    <br />
                    <br />
                
                    <label for="password">Password:</label>
                    <input placeholder="Password" type="password" name="password"></input>


                    <br />
                    <br />

                    <label for="passwordConfirm">Confirm Password:</label>
                    <input placeholder="Confirm Password" type="password" name="passwordConfirm"></input>


                    <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>
                    <button type="submit" class="registerbtn">Register</button>

                    <div class="container signin">
                         <p>Already have an account? <a href="/login">Log in</a>.</p>
                    </div>
              </div>
              
          </form> 
        </>
    )
}


export default Register;