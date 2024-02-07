import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ onLogin }) => {
    const [userName, setUserName] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (userName.trim()) {
            onLogin(userName);
            navigate('/chat');
            return;
        }
        return;
    };
    return (
        <form className='login_form' onSubmit={handleSubmit}>
            <h1>Conecte-se</h1>
            <input
                className='input_login'
                type='text'
                placeholder='Digite o seu Nome'
                autoFocus
                required
                onChange={(e) => setUserName(e.target.value)}
            />
            <button className='btn_login' type='submit'>
                Continuar
            </button>
        </form>
    );
};

export default Login;
