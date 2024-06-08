import React, { useState } from 'react';
import '../assets/css/Form.css';

const LoginForm = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleChangeEvent = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
    }

    return (
        <div className='form__container'>
            <form className='register__form' method='POST' onSubmit={handleSubmit}>
                <div className="input__fields">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" data-testid="useremail-input" required onChange={handleChangeEvent} />
                </div>
                <div className="input__fields">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" data-testid="userpassword-input" required minLength={8} maxLength={15} onChange={handleChangeEvent} />
                </div>
                <button className='submit__btn' type="submit">Login</button>
            </form>
        </div>
    )
}

export default LoginForm;