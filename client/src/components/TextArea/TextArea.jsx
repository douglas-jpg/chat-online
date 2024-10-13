import { useEffect, useRef } from 'react';
import MyMessage from '../MessagesText/MyMessage';
import OtherMessage from '../MessagesText/OtherMessage';
import Notification from '../Notification/Notification';

const TextArea = ({ messageList, socket }) => {
    const scrollDown = useRef();

    useEffect(() => {
        scrollDown.current.scrollIntoView({ behavior: 'smooth' });
    }, [messageList]);

    return (
        <div className='chat'>
            {messageList.map((message, index) => {
                if (message.notification) {
                    return (
                        <Notification
                            key={index}
                            userName={message.notification}
                            userActive={message.userActive}
                        />
                    );
                }

                return message.authorId === socket.id ? (
                    <MyMessage
                        key={index}
                        message={message.text}
                        time={message.time}
                    />
                ) : (
                    <OtherMessage
                        key={index}
                        message={message.text}
                        userName={message.author}
                        time={message.time}
                        color={message.color}
                    />
                );
            })}
            <div ref={scrollDown}></div>
        </div>
    );
};

export default TextArea;
