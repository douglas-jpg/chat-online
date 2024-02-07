import MyMessage from './MyMessage';
// import OtherMessage from './OtherMessage';
// import Notification from './Notification';
import { useEffect, useState } from 'react';

const TextArea = ({ dataUser, message }) => {
    const [newMessages, setNewMessages] = useState([]);

    return (
        <div className='chat'>
            {newMessages.map((ms, i) => (
                <MyMessage key={i} message={ms} time={'23:00'} />
            ))}
        </div>
    );
};

export default TextArea;
