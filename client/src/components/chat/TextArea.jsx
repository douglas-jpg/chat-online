import { useEffect } from 'react';
import MyMessage from './MyMessage';
import OtherMessage from './OtherMessage';
// import Notification from './Notification';

const TextArea = ({ listMessages, idUser }) => {
    useEffect(() => {
        // rolar a tela para baixo
    }, [listMessages]);

    return (
        <div className='chat'>
            {listMessages &&
                listMessages.map((ms) =>
                    ms.id == idUser ? (
                        <MyMessage
                            key={ms.idMessage}
                            message={ms.message}
                            time={ms.time}
                        />
                    ) : (
                        <OtherMessage
                            key={ms.idMessage}
                            userName={ms.name}
                            message={ms.message}
                            time={ms.time}
                            color={ms.color}
                        />
                    )
                )}
        </div>
    );
};

export default TextArea;
