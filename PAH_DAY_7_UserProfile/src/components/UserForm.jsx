import React, { useState } from 'react';
import '../assets/css/Form.css';
import { saveUser } from '../services/UserApi';
import { useNavigate } from 'react-router-dom';

const UserForm = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: ''
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
        saveUser(formData).then((res) => navigate(`/user-profile/${res}`));
    }

    return (
        <div className='form__container'>
            <form className='register__form' method='POST' onSubmit={handleSubmit}>
                <div className="input__fields">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" required onChange={handleChangeEvent} />
                </div>
                <div className="input__fields">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" required onChange={handleChangeEvent} />
                </div>
                <div className="input__fields">
                    <label htmlFor="phone">Phone Number</label>
                    <input type="text" name="phone" id="phone" required onChange={handleChangeEvent} />
                </div>
                <button className='submit__btn' type="submit">Submit</button>
            </form>
        </div>
    )
}

export default UserForm;