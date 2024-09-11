import React, {useState} from 'react';
import { BrowserRouter as  Route } from 'react-router-dom';

function LoginForm({Login, error}) {
    const [details, setDetails] = useState({name:"", email:"", password:""});

    const submitHandler =e => {
        e.preventDefault();
        Login(details);
    }
    return (
        <form onSubmit={submitHandler}>
            <div className="form-inner">
                <h2>Login</h2>
                {/* Error! */}
                <div className = "form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" id="name"/>
                </div>
                <div className = "form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" id="email"/>
                </div>
                <div className = "form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" id="password"/>
                </div>
                <input type="submit" value="LOGIN"/>
                </div> 

        </form>
    )
}

export default LoginForm;
