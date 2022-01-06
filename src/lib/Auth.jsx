import React, { useState, useEffect } from "react";
import axios from "axios";

const { Consumer, Provider } = React.createContext();

// HOC
function withAuth(WrappedComponent) {
  return function (props) {
    return (
      <Consumer>
        {(valueFromProvider) => (
          <WrappedComponent
            {...props}
            user={valueFromProvider.user}
            isLoggedIn={valueFromProvider.isLoggedIn}
            isLoading={valueFromProvider.isLoading}
            login={valueFromProvider.login}
            errorLogin={valueFromProvider.errorLogin}
            signup={valueFromProvider.signup}
            logout={valueFromProvider.logout}
            me={valueFromProvider.me}
          />
        )}
      </Consumer>
    );
  };
}

function AuthProvider(props) {
  const [state, setState] = useState({
    user: null,
    isLoggedIn: false,
    isLoading: true,
    errorLogin: null,
  });
  useEffect(() => {
    me();
  }, []);

  const me = (cb) => {
    axios
      .get(process.env.REACT_APP_API_URL + "/auth/me", {
        withCredentials: true,
      })
      .then((response) => {
        const user = response.data;
        this.setState({ isLoggedIn: true, isLoading: false, user }, () => {
          if (cb) {
            cb();
          }
        });
      })
      .catch(
        (err) => setState({ isLoggedIn: false, isLoading: false, user: null }),
        () => {
          if (cb) {
            cb();
          }
        }
      );
  };

  const login = (username, password) => {
    axios
      .post(
        process.env.REACT_APP_API_URL + "/auth/login",
        { username, password },
        { withCredentials: true }
      )
      .then((response) => {
        console.log(response);
        const user = response.data;
        setState({ isLoggedIn: true, isLoading: false, user });
      })
      .catch((err) => {
        console.log(err);
        setState({ errorLogin: "Usuario no encontrado" });
        setTimeout(() => {
          setState({ errorLogin: null });
        }, 4000);
      });
  };
  const signup = (username, email, password) => {
    axios
      .post(
        process.env.REACT_APP_API_URL + "/auth/signup",
        { username, email, password },
        { withCredentials: true }
      )
      .then((response) => {
        const user = response.data;
        setState({ isLoggedIn: true, isLoading: false, user });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const logout = () => {
    axios
      .get(process.env.REACT_APP_API_URL + "/auth/logout", {
        withCredentials: true,
      })
      .then((response) => {
        setState({ isLoggedIn: false, isLoading: false, user: null });
      })
      .catch((err) => console.log(err));
  };

  const { user, isLoggedIn, isLoading, errorLogin } = state;

  return (
    <Provider
      value={{
        user,
        isLoggedIn,
        isLoading,
        login,
        signup,
        logout,
        me,
        errorLogin,
      }}
    >
      {props.children}
    </Provider>
  );
}

export { withAuth, AuthProvider };
