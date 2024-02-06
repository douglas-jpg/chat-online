const Login = () => {
    return (
        <form className="login_form">
            <h1>Conecte-se</h1>
            <input
                className='input_login'
                type='text'
                placeholder='Digite o seu Nome'
                required
            />
            <button className='btn_login' type='submit'>
                Continuar
            </button>
        </form>
    );
};

export default Login;
