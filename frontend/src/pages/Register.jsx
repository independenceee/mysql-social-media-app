import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Register = function () {
    const [inputs, setInputs] = useState({
        username: "",
        email: "",
        password: "",
        name: "",
    });

    const [errors, setErrors] = useState(null);

    const handleChange = function (event) {
        event.preventDefault();
        setInputs(function (previous) {
            return {
                ...previous,
                [event.target.name]: event.target.value,
            };
        });
    };

    const handleClick = async function (event) {
        event.preventDefault();
        try {
            await axios.post("http://localhost:5000/api/auth/register", inputs);
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
                    <span>Do you have an accounts ?</span>
                    <Link to="/login">
                        <button>Login</button>
                    </Link>
                </Left>
                <Right>
                    <h1>Register</h1>
                    <form>
                        <input
                            type="text"
                            placeholder="Username..."
                            name="username"
                            onChange={handleChange}
                        />
                        <input
                            type="email"
                            placeholder="Email..."
                            name="email"
                            onChange={handleChange}
                        />
                        <input
                            type="password"
                            placeholder="Password..."
                            name="password"
                            onChange={handleChange}
                        />
                        <input
                            type="text"
                            placeholder="Name..."
                            name="name"
                            onChange={handleChange}
                        />
                        {errors && <p>{errors}</p>}
                        <button onClick={handleClick}>Register</button>
                    </form>
                </Right>
            </Wrapper>
        </Container>
    );
};

export default Register;

const Container = styled.div``;
const Wrapper = styled.div``;
const Left = styled.div``;
const Right = styled.div``;
