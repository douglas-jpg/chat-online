const MyMessage = ({ message, time }) => {
    return (
        <div className='message my_message'>
            {message}
            <span className='time'>{time}</span>
        </div>
    );
};

export default MyMessage;
