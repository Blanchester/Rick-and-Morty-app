import { useState } from "react";
import validation from "./Validation";
import style from "./form.module.css"

const Form = ({ login }) => {

    const [userData, setUserData] = useState({
        username: "",
        password: ""
    })

    const [errors, setErrors] = useState({
        username: "",
        password: ""
    })

    const handleInputChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })
        setErrors(validation({
            ...userData,
            [event.target.name]: event.target.value
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        login(userData);
    }


    return (
        <div className={style.formContainer}>
            <form onSubmit={handleSubmit} className={style.formDisplay}>
                <div>
                    <div className={style.inputContainer} >
                        <label htmlFor="username">Username</label>
                        <input onChange={handleInputChange} value={userData.username} type="text" name="username" />
                        {errors.username && <p style={{ color: "red" }}>{errors.username}</p>}
                    </div>
                    <div className={style.inputContainer}>
                        <label htmlFor="password">Password</label>
                        <input onChange={handleInputChange} value={userData.password} type="password" name="password" />
                        {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
                    </div>
                </div>
                <div>
                    <button className={style.formButton}>LOGIN</button>
                </div>
            </form>
        </div >
    )
};

export default Form;