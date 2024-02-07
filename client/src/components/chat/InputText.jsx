import { useState } from 'react';
import { BsFillSendFill } from 'react-icons/bs';

const InputText = ({ onSubmit }) => {
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(message);
    };

    return (
        <form className='input_text' onSubmit={handleSubmit}>
            <input
                className='text'
                type='text'
                placeholder='Digite a sua mensagem'
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />
            <button type='submit' className='btn_send'>
                <BsFillSendFill />
            </button>
        </form>
    );
};

export default InputText;
