import React, { useState }from "react"
import "./register.css"

const Register = () => {

    const [ user, setUser] = useState({
        name:"",
        email:"",
        password:"",
        reEnterPassword:""
    })

    const handleChange = e =>{
        const{ name,value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    return (
        <div className="register">
            {console.log("User", user)}
            <h1>Register</h1>
            <input type="text" name="name" value={ user.name }placeholder="Ingresa tu Nombre" onChange={ handleChange }></input>
            <input type="text" name="email" value={ user.email }placeholder="Ingresa tu Email" onChange={ handleChange }></input>
            <input type="password" name="password" value={ user.password }placeholder="Ingresa tu Contraseña" onChange={ handleChange }></input>
            <input type="password" name="reEnterPassword" value={ user.reEnterPassword }placeholder="Confirma tu Contraseña" onChange={ handleChange }></input>
            <div className="button">Login</div>
            <div>or</div>
            <div className="button">Register</div>
        </div>
    )
}

export default Register