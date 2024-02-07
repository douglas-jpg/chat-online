import './App.css';
import Login from './components/login/Login';
import Chat from './components/chat/Chat';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

function App() {
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

    const navigate = useNavigate();
    const [user, setUser] = useState({
        id: crypto.randomUUID(),
        name: '',
        color: randomColor(),
    });

    const handleLogin = (userName) => {
        setUser({
            ...user,
            name: userName,
        });

        console.log(user);
    };

    useEffect(() => {
        if (!user.name) {
            navigate('/');
        }
    }, [user.name, navigate]);

    return (
        <>
            <Routes>
                <Route path='/' element={<Login onLogin={handleLogin} />} />
                <Route path='/chat' element={<Chat dataUser={user} />} />
            </Routes>
        </>
    );
}

export default App;
