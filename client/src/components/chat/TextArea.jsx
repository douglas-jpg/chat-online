import { useEffect, useRef } from 'react';
import MyMessage from './MyMessage';
import OtherMessage from './OtherMessage';
// import Notification from './Notification';

const TextArea = ({ messageList, socket }) => {
    const scrollDown = useRef();
    useEffect(() => {
        scrollDown.current.scrollIntoView({ behavior: 'smooth' });
    }, [messageList]);

    return (
        <div className='chat'>
            {messageList.map((message, index) =>
                message.authorId === socket.id ? (
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
                )
            )}
            <div ref={scrollDown}></div>
        </div>
    );
};

export default TextArea;

// {messageList.map((message, index) => (
//     <OtherMessage
//         key={index}
//         userName={message.author}
//         message={message.text}
//     />
// ))}
