import React, { useEffect } from "react";
import "../assets/styles/global.css";

import { DataProvider } from "../context/DataContext";

//Login Redux

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Autentification from "../components/autentication/Autentification";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
    dispatchGetUser,
    dispatchLogin,
    fetchUser,
} from "../redux/actions/authAction";

import Logout from "../components/Logout/Logout";
import { baseUrl } from "../../config";


const App = () => {
    const dispatch = useDispatch();
    const token = useSelector((state) => state.token);
    const auth = useSelector((state) => state.auth);

    useEffect(() => {
        const loggedUserJSON = window.localStorage.getItem("loggedAgoraUser");
        const firstLogin = localStorage.getItem("firstLogin");
        if (firstLogin && loggedUserJSON) {
            const user = JSON.parse(loggedUserJSON);
            const refreshtoken = user.refresh_token;

            const getToken = async () => {
                
                const res = await axios.post(`${baseUrl}/api/refresh_token`, {
                    refreshtoken,
                });
                // console.log(res);

                dispatch({ type: "GET_TOKEN", payload: res.data.access_token });
            };
            getToken();
        }
    }, [auth.isLogged, dispatch]);

    useEffect(() => {
        if (token) {
            const getUser = () => {
                dispatch(dispatchLogin());
                return fetchUser(token).then((res) => {
                    dispatch(dispatchGetUser(res));
                });
            };
            getUser();
        }
    }, [token, dispatch]);

    return (
        <>
            <DataProvider>
                <Router>
                    
                    <Autentification />
                </Router>
            </DataProvider>
        </>
    );
};

export default App;
