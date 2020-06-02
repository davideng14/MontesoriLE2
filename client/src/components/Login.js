import React from 'react';
import './Logins.scss';

const Login = () => {
    return (
        <section>
            <div className="loginContainer">
                <section>
                    <h2>Feria Empresarial LE2</h2>
                    <div>
                        <label>User:</label>
                        <input type="text" placeholder="User"/>
                    </div>
                    <div>
                        <label>Password</label>
                        <input type="text" placeholder="Password"/>
                    </div>
                    <div class="button-container">
                        <button class="button">Login</button>
                    </div>
                </section>
            </div>
    </section>
    )
}

export default Login;