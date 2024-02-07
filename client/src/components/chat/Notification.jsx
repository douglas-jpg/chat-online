const Notification = ({ userName, userActive }) => {
    return userActive ? (
        <div className='notification'>{userName} Entrou no Chat</div>
    ) : (
        <div className='notification'>{userName} Saiu do Chat</div>
    );
};

export default Notification;
