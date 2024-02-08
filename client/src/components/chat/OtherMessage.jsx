const OtherMessage = ({ userName, message, time, color }) => {
    const style = {
        color: color || 'white',
    };

    return (
        <div className='message other_message'>
            <span className='user_name' style={style}>
                {userName}
            </span>
            {message}
            <span className='time'>{time}</span>
        </div>
    );
};

export default OtherMessage;
