import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

const LoginPage = ({ startLogin }) => (
    <div className='box-layout' style={{ backgroundImage: "url(/images/bg.jpg)" }}>
        <div className='box-layout__box'>
            <h1 className='box-layout__title'>Expensify App</h1>
            <p>It's time to get your expenses under control.</p>
            <button onClick={startLogin}>Login</button>
        </div>
    </div>
)

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
})

export default connect(undefined, mapDispatchToProps)(LoginPage)