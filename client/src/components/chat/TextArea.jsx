import MyMessage from './MyMessage';
import OtherMessage from './OtherMessage';
import Notification from './Notification';

const TextArea = () => {
    return (
        <div className='chat'>
            <MyMessage />
            <Notification />
            <MyMessage />
            <OtherMessage />
        </div>
    );
};

export default TextArea;
