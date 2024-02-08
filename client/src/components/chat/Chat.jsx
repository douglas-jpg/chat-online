import NavBar from './NavBar';
import TextArea from './TextArea';
import InputText from './InputText';
import { useState } from 'react';

const Chat = ({ dataUser }) => {
    const [allMessage, setAllMessage] = useState([]);

    const handleSend = (message) => {
        setAllMessage((prevMessages) => [
            ...prevMessages,
            {
                ...dataUser,
                message: message,
                time: `${new Date().getHours()}:${new Date().getMinutes()}`,
                idMessage: Date.now(),
            },
        ]);
    };

    return (
        <div>
            <NavBar userName={dataUser.name} numberOnline={5} />
            <TextArea listMessages={allMessage} idUser={dataUser.id} />
            <InputText sendMessage={handleSend} />
        </div>
    );
};

export default Chat;
