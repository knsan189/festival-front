import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import styles from './login.module.css'

const Login = ({authService}) => {
    
    const history = useHistory();
    const goToHome = (userId) => {
        history.push({
            pathname : '/',
            state : {id : userId}
        })
    }

    const onLogin = event => {
        authService.login(event.target.textContent)
        .then(data => goToHome(data.user.uid))
    }

    useEffect(()=> {
        authService
        .onAuthChange(user => {
            user && goToHome(user.uid)
        })
    })

    return (
        <div className={styles.wrap}>
            <section className={styles.login}>  
                <h1>Login</h1>
                <p>Welcome back</p>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <button onClick={onLogin} className={styles.button}>
                            <img src="./images/google_icon.png" alt="google" />Google</button>
                    </li>
                    <li className={styles.item}>
                        <button onClick={onLogin} className={styles.button}>
                        <img src="./images/github_icon.png" alt="github" />Github</button>
                    </li>
                    <li className={styles.item}>
                        <button onClick={onLogin} className={styles.button}>
                        <img src="./images/facebook_icon.png" alt="facebook" />Facebook</button>
                    </li>
                </ul>
                <img src="./images/logo1.jpg" alt="logo" />
            </section> 
        </div>   
    )};

export default Login;