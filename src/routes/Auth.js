import React, { useState } from "react"

const Auth = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const onEmailChange = (event) => {
        const {value} = event.target
        setEmail(value)
    }

    const onPasswordChange = (event) => {
        console.log(event)
        const {value} = event.target
        setPassword(value)
    }
    
    const onSubmit = (event) => {
        event.preventDefault(); // submit 버튼 클릭시 새로고침 방치
    }

    return (
    <div>
        <form onSubmit={onSubmit}>
            <input name="email" type="email" placeholder="input email"
            value={email}
            onChange={onEmailChange}
            required>
            </input>
            <input name="password" type="password" placeholder="input password" value={password}
            onChange={onPasswordChange}
            required>
            </input>
            <input type="submit" value="sign in"></input>
        </form>
    </div> 
    )
}

export default Auth;