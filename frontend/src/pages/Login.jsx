import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { AuthContext } from "../contexts/AuthContext";

const Login = function () {
    const [inputs, setInputs] = useState({
        email: "",
        password: "",
    });

    const [errors, setErrors] = useState(null);

    const navigate = useNavigate();

    const { login } = useContext(AuthContext);
    const handleChange = (e) => {
        setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await login(inputs);
            navigate("/");
        } catch (error) {
            setErrors(error.response.data);
        }
    };
    return (
        <Container>
            <Wrapper>
                <Left>
                    <h1>Independence</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Libero cum, alias totam numquam ipsa exercitationem
                        dignissimos, error nam, consequatur.
                    </p>
                    <span>Don't you have an account?</span>
                    <Link to="/register">
                        <button>Register</button>
                    </Link>
                </Left>
                <Right>
                    <h1>Login</h1>
                    <form>
                        <input
                            type="email"
                            placeholder="Email..."
                            name="email"
                            onChange={handleChange}
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            name="password"
                            onChange={handleChange}
                        />
                        {errors && errors}
                        <button onClick={handleLogin}>Login</button>
                    </form>
                </Right>
            </Wrapper>
        </Container>
    );
};

export default Login;

const Container = styled.div``;
const Wrapper = styled.div``;
const Left = styled.div``;
const Right = styled.div``;
