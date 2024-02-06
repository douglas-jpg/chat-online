import { BsFillSendFill } from 'react-icons/bs';

const InputText = () => {
    return (
        <form className='input_text'>
            <input
                className='text'
                type='text'
                placeholder='Digite a sua mensagem'
                required
            />
            <button type='submit' className='btn_send'>
                <BsFillSendFill />
            </button>
        </form>
    );
};

export default InputText;
