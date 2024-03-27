import React, { useEffect, useState } from "react";
import "./style/App.css";

import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

import Navbar from "./Components/App/Navbar";
import Footer from "./Components/App/Footer";
import Home from "./Page/Home";
import Profile from "./Page/Profile";

import axios from "axios";

function App() {
  document.title = "Городской портал";

  const [token, setToken] = useState(localStorage.getItem("token"));
  const [userIsLogged, setUserLogged] = useState(false);
  const [loading, setLoading] = useState(true);

  const [id, setId] = useState(null);
  const [login, setLogin] = useState("");
  const [fio, setFIO] = useState("");
  const [email, setEmail] = useState("");

  const userData = {
    id: id,
    login: login,
    fio: fio,
    email: email,
  };

  useEffect(() => {
    axios
      .get("user", {
        headers: {
          Authorization: token,
        },
      })
      .then((response) => {
        console.log("userdata token:", response);
        if (response.data.status !== false) {
          setUserLogged(true);
          setId(response.data.data.id);
          setFIO(response.data.data.fio);
          setLogin(response.data.data.login);
          setEmail(response.data.data.email);
        } else {
          setUserLogged(false);
        }
        setLoading(false);
      })
      .catch((error) => {
        setUserLogged(false);
        console.log(error);
        setLoading(false);
      });
  }, [token, userIsLogged]);

  const getToken = () => {
    setToken(localStorage.getItem("token"));
  };

  if (loading) {
    return (
      <div className="wrapper">
        <BrowserRouter>
          <Navbar userIsLogged={userIsLogged} getToken={getToken} />
          {/* Token:{token}
        <br />
        userIsLogged:{userIsLogged === true ? "true" : "false"}
        <br /> */}
          <Container className="content">loading</Container>
          <Footer />
        </BrowserRouter>
      </div>
    ); // возвращаем загрузочный экран, пока идут запросы
  }

  return (
    <div className="wrapper">
      <BrowserRouter>
        <Navbar userIsLogged={userIsLogged} getToken={getToken} />
        {/* Token:{token}
        <br />
        userIsLogged:{userIsLogged === true ? "true" : "false"}
        <br /> */}
        <Container className="content">
          <Routes>
            <Route path="/" element={<Home getToken={getToken} />} />
            {!loading && userIsLogged && (
              <>
                <Route
                  path="/profile"
                  element={
                    <Profile
                      getToken={getToken}
                      userData={userData}
                      userIsLogged={userIsLogged}
                    />
                  }
                />
              </>
            )}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Container>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
