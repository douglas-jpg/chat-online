import { useRef } from 'react';
import { BsFillSendFill } from 'react-icons/bs';

const InputText = ({ sendMessage }) => {
    const messageText = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        messageText.current.focus();
        const text = messageText.current.value;
        const date = getDate();

        if (!text.trim()) return;

        sendMessage({ text, date });
        messageText.current.value = '';
    };

    const getDate = () => {
        const hours = new Date().getHours().toString().padStart(2, '0');
        const minutes = new Date().getMinutes().toString().padStart(2, '0');

        return `${hours}:${minutes}`;
    };

    return (
        <form className='input_text' onSubmit={handleSubmit}>
            <input
                className='text'
                type='text'
                placeholder='Digite a sua mensagem'
                ref={messageText}
                required
            />
            <button type='submit' className='btn_send'>
                <BsFillSendFill />
            </button>
        </form>
    );
};

export default InputText;
