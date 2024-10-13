import NavBar from '../../components/NavBar/NavBar';
import TextArea from '../../components/TextArea/TextArea';
import InputText from '../../components/InputText/InputText';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Chat = ({ userName, socket }) => {
    const [allMessage, setAllMessage] = useState([]);
    const [numberUsers, setNumberUsers] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        if (socket) {
            socket.on('recive_message', (data) => {
                setAllMessage((prevMessages) => [...prevMessages, data]);
            });
            socket.on('update_user_count', (number) => {
                setNumberUsers(number);
            });

            return () => {
                socket.off('recive_message');
                socket.off('update_user_count');
            };
        } else {
            navigate('/');
        }
    }, [socket, navigate]);

    const handleSend = (message) => {
        socket.emit('message', message);
    };

    return (
        <div>
            <NavBar userName={userName} numberUsers={numberUsers} />
            <TextArea messageList={allMessage} socket={socket} />
            <InputText sendMessage={handleSend} />
        </div>
    );
};

export default Chat;
