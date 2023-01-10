const Login = () => {
    return(
        <form className="form-login">
                <div className="containerForm">
                    <h1>Log in to your account.</h1>

                    <label for="username">Username: </label>
                    <input placeholder="Username" type="text" name="username"></input> 
                    
                    <br />
                    <br />
                
                    <label for="password">Password:</label>
                    <input placeholder="Password" type="password" name="password"></input>


                    <br />
                    <br />

                    <button type="submit" class="registerbtn">Log in</button>
              </div>
          </form> 
    )
}


export default Login;