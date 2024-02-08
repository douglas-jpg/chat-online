import NavBar from './NavBar';
import TextArea from './TextArea';
import InputText from './InputText';
import { useState, useEffect } from 'react';

const Chat = ({ userName, socket }) => {
    const [allMessage, setAllMessage] = useState([]);

    useEffect(() => {
        socket.on('recive_message', (data) => {
            setAllMessage((prevMessages) => [...prevMessages, data]);
        });

        return () => socket.off('recive_message');
    }, [socket]);

    const handleSend = (message) => {
        socket.emit('message', message);
    };

    return (
        <div>
            <NavBar userName={userName} numberOnline={2} />
            <TextArea messageList={allMessage} socket={socket} />
            <InputText sendMessage={handleSend} />
        </div>
    );
};

export default Chat;
