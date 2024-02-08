import './App.css';
import Login from './components/login/Login';
import Chat from './components/chat/Chat';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';

function App() {
    const [socket, setSocket] = useState();
    const [name, setName] = useState();

    const handleLogin = (userName, socket) => {
        setSocket(socket);
        setName(userName);
    };

    return (
        <>
            <Routes>
                <Route path='/' element={<Login onLogin={handleLogin} />} />
                <Route
                    path='/chat'
                    element={<Chat userName={name} socket={socket} />}
                />
            </Routes>
        </>
    );
}

export default App;
