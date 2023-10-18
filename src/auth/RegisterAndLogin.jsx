import { Card, Space, Row, Col } from 'antd';
import React from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
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

const RegisterAndLogin = () => {

    const [login, setLogin] = React.useState(false);
    let authStore = useAuth();
    let navigate = useNavigate();
    let location = useLocation();

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
                 authStore.signin(data, navigate("/", { replace: true }));
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