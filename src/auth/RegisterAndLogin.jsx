import { Card, Space, Row, Col } from 'antd';
import React from 'react';

const RegisterAndLogin = () => {

    const [login, setLogin] = React.useState(false);
    const handleSubmit = (e, type) => {

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