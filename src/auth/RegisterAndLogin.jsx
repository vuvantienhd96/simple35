import { Card, Space, Row, Col } from 'antd';
import React from 'react';
import { getAuth, createUserWithEmailAndPassword, 
    signInWithEmailAndPassword , 
    signInWithPopup, 
    GoogleAuthProvider, 
    signOut,
    sendPasswordResetEmail
} from "firebase/auth";
import {useAuth} from './../main';
import {database} from './../firebaseConfig';
import {
    Routes,
    Route,
    Link,
    useNavigate,
    useLocation,
    Navigate,
    Outlet,
} from "react-router-dom";

import { useAuth as useAuthContex} from './../main';

import {
    GoogleOutlined
  } from '@ant-design/icons';
  import { provider } from './../firebaseConfig';
import { useState } from 'react';

const RegisterAndLogin = () => {

    const [login, setLogin] = React.useState(false);
    let authStore = useAuth();
    let navigate = useNavigate();
    let location = useLocation();

    let authStoreContext = useAuthContex();

    const history = useNavigate();

    const handleSubmit = (e, type) => {
        // avoid submit form
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password, "=======");
        if(type === 'signin'){
            // login
             // goi ham signin dang nhap
             signInWithEmailAndPassword(database, email, password)
             .then((data) => {
                 console.log(data, "authData");
                 // dispath
                localStorage.setItem('name',  data?.user.email);
                authStore.signin(data, navigate("/", { replace: true }));
                //authStore.setUser(data.user.email);
             })
             .catch((err) => {
                 console.log(err, "==========")
             });
             // aoi login

        }else {
            createUserWithEmailAndPassword(database, email, password)
            .then(data => {
                console.log(data, "authData");
                // auth.signin()
                //   history("/data");
                alert('dang ki thanh cong!');
            }).catch((err) => {
                console.log(err, "==========")
                setLogin(true);
            });
        }
    }

    const handleReset = () => {

    }

    const signInG = () => {
        const auth = getAuth();
    signInWithPopup(auth, provider)
    .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;

        console.log(user, 'user');
        const redirect = navigate("/DashBoard");
        const data = {
            email : user.email,
            token: token
        }
        authStore.setUser(data.email);
        localStorage.setItem('tokenUser', data.token);
        localStorage.setItem('name',  user.email);
        //authStore.signin(data, redirect());
        //authStore.callbackUrl(navigate("/DashBoard"));
       
        // IdP data available using getAdditionalUserInfo(result)
        // ...
    }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log('err', errorMessage);
        // The email of the user's account used.
        // const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
    });


    }

    const signOutGG = () => {
        const auth = getAuth();
        signOut(auth).then(() => {
        // Sign-out successful.
        console.log('auth', auth);
         authStoreContext.signout( navigate("/"));
        }).catch((error) => {
        // An error happened.
        console.log('err gg', err)
        });
    }

    const [email, setEmail] = useState(null);

    const forgotGG = () => {
        console.log('email', email);
        const auth = getAuth();
        sendPasswordResetEmail(auth, email)
        .then((res) => {
            // Password reset email sent!
            // ..
            console.log('success', res);
        })
        .catch((error) => {
            console.log('error', error);
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
        });

    }

    return <>
        <Row>
            <Col span={16}>
            </Col>
            <Col span={10}>
                <Space direction="vertical" size={16}>
                    <Card extra={<a href="#">More</a>}>
                        <div className="">
                            {/* Registration and login Screen */}
                            <div className="row">
                                <div
                                    className={login == false ? "activeColor" : "pointer"}
                                    onClick={() => setLogin(false)}
                                >
                                    SignUp
                                </div>
                                <div
                                    className={login == true ? "activeColor" : "pointer"}
                                    onClick={() => setLogin(true)}
                                >
                                    SignIn
                                </div>

                                <button onClick={() => signInG()}><GoogleOutlined style={{ color: 'hotpink' }}/></button>
                               
                                <button onClick={() => signOutGG()}>SIGNOUT<GoogleOutlined style={{ color: 'hotpink' }}/></button>
                                <button onClick={() => forgotGG()}>fogot pass<GoogleOutlined style={{ color: 'hotpink' }}/></button>
                                <input name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                            </div>
                            <h1>{login ? "SignIn" : "SignUp"}</h1>
                            <form onSubmit={(e) => handleSubmit(e, login ? "signin" : "signup")}>
                                <input name="email" placeholder="Email" />
                                <br />
                                <input name="password" type="text" placeholder="Password" />
                                <br />
                                <p onClick={handleReset}>Forgot Password?</p>
                                <br />
                                <button>{login ? "SignIn" : "SignUp"}</button>
                            </form>
                        </div>
                    </Card>
                </Space>
            </Col>
        </Row>

    </>
}

export default RegisterAndLogin;