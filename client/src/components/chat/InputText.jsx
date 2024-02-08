import { useRef } from 'react';
import { BsFillSendFill } from 'react-icons/bs';

const InputText = ({ sendMessage }) => {
    const text = useRef('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const message = text.current.value;
        if (message.trim()) {
            sendMessage(text.current.value);
            text.current.value = '';
        }
        return;
    };

    return (
        <form className='input_text' onSubmit={handleSubmit}>
            <input
                className='text'
                type='text'
                placeholder='Digite a sua mensagem'
                ref={text}
                required
            />
            <button type='submit' className='btn_send'>
                <BsFillSendFill />
            </button>
        </form>
    );
};

export default InputText;
