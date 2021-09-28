import React, { useState } from "react";

const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const onSubmit = (event) => {
        event.preventDefault(); //form실행시 특유의 동작을 멈춰준다.
        console.log({ username });
        console.log({ password });
    }

    return (
        <div className="App">
            <form onSubmit={onSubmit}>
                <input
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <br />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(name) => setPassword(name.target.value)}
                />
                <br />
                <button type="submit">Update</button>
            </form>
        </div>
    );
}

export default Login;