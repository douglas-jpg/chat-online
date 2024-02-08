import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import io from 'socket.io-client';

const Login = ({ onLogin }) => {
    const navigate = useNavigate();
    const nameRef = useRef();

    const colors = [
        'aqua',
        'blueviolet',
        'brown',
        'burlywood',
        'cadetblue',
        'chocolate',
        'coral',
        'cornflowerblue',
        'crimson',
        'darkblue',
        'darkgoldenrod',
        'darkmagenta',
        'darkturquoise',
        'deeppink',
        'dodgerblue',
        'firebrick',
        'springgreen',
    ];

    const randomColor = () => {
        const randomIndex = Math.floor(Math.random() * colors.length);
        return colors[randomIndex];
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const socket = await io.connect('http://localhost:8080');
        const user = {
            name: nameRef.current.value,
            color: randomColor(),
        };

        if (!user.name.trim()) return;

        socket.emit('set_user', user);

        onLogin(user.name, socket);
        navigate('/chat');
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
                ref={nameRef}
            />
            <button className='btn_login' type='submit'>
                Continuar
            </button>
        </form>
    );
};

export default Login;
