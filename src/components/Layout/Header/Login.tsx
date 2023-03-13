import React from "react";
import styles from "./Login.module.css";

const Login = () => {
  const onLogin = () => {
    // authService.login(event.target.textContent).then((data) => goToHome(data.user.uid));
  };

  return (
    <div className={styles.wrap}>
      <section className={styles.login}>
        <h1>Login</h1>
        <p>Welcome back</p>
        <ul className={styles.list}>
          <li className={styles.item}>
            <button onClick={onLogin} className={styles.button} type="button">
              <img src="./images/google_icon.png" alt="google" />
              Google
            </button>
          </li>
          <li className={styles.item}>
            <button onClick={onLogin} className={styles.button} type="button">
              <img src="./images/github_icon.png" alt="github" />
              Github
            </button>
          </li>
          <li className={styles.item}>
            <button onClick={onLogin} className={styles.button} type="button">
              <img src="./images/facebook_icon.png" alt="facebook" />
              Facebook
            </button>
          </li>
        </ul>
        <img src="./images/logo1.jpg" alt="logo" />
      </section>
    </div>
  );
};

export default Login;
