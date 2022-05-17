import React from 'react'

const Signup = (props) => {



    return(
        <div className="signupFrm">
            <form action="" className="form">
                <h1 className="title">Signup</h1>
                <div className="inputcontainer">
                <input type="text" className="input" placeholder="FirstName"/>
                <label for="" className="label">FirstName</label>
                </div>
                <div className="inputcontainer">
                <input type="text" className="input" placeholder="LastName"/>
                <label for="" className="label">LastName</label>
                </div>
                <div className="inputcontainer">
                <input type="text" className="input" placeholder="Email"/>
                <label for="" className="label">Email</label>
                </div>
                <div className="inputcontainer">
                <input type="password" className="input" placeholder="Password"/>
                <label for="" className="label">LastName</label>
                </div>
                <input type="submit" class="submitBtn" value="Sign up"></input>
            </form>
        </div>  
    )
}

export default Signup

//form deisned from source: https://www.freecodecamp.org/news/how-to-build-sign-up-form-with-html-and-css/