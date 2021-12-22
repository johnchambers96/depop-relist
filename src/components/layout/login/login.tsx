import "./container.scss";
import React, {FC} from "react";
import {getAuth, signInWithEmailAndPassword} from "firebase/auth"


import app from "../../../firebase"

export const Login: FC = () => {

    const handleOnSubmit = (e: any) => {

        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        const auth = getAuth(app);

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {

                // this holds all the user creds we need
                const user = userCredential.user;

                // use context or something to show authed user?
                // this point would be good to check if they are paid or not and hold as global variable?

                console.log(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });

    };
    return (
        <div className="wrapper">
            <form onSubmit={handleOnSubmit} className="__form-wrapper" noValidate={true}>
                <div className="__inputs">
                    <input
                        name="email"
                        type="email"
                        placeholder="Email Address"
                        pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
                        title="Invalid email address"
                        className="__email"
                        required
                    />
                    <input
                        name="password"
                        type="password"
                        placeholder="Password"
                        minLength={6}
                        required
                    />
                </div>
                <div className="__actions">
                    <button type="submit" className="__login">Login</button>
                    <button type="submit">Sign up</button>
                </div>
            </form>
        </div>
    );
};
