import NavBar from './NavBar';
import TextArea from './TextArea';
import InputText from './InputText';
import { useState } from 'react';

const Chat = ({ dataUser }) => {
    const [message, setMessage] = useState('');
    const handleSubmit = (dataMessage) => {
        setMessage(dataMessage);
        console.log(message);
    };

    return (
        <div>
            <NavBar userName={dataUser.name} numberOnline={5} />
            <TextArea dataUser={dataUser} onMessage={message} />
            <InputText onSubmit={handleSubmit} />
        </div>
    );
};

export default Chat;
