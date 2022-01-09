import axios from "axios";
export const API='https://JungleClap-Express-mongoose-Server-jwt.vineetht.repl.co'
export  function setupAuthHeaderForServiceCalls(token) {
    if (token) {
      return (axios.defaults.headers.common["Authorization"] = token);
    }
    delete axios.defaults.headers.common["Authorization"];
  }
export function setupAuthExceptionHandler(logoutHandler, navigate,authDispatch) {
    const UNAUTHORIZED = 401;
    axios.interceptors.response.use((response) =>response,
      (error) => {
        if (error?.response?.status === UNAUTHORIZED) {
          
          logoutHandler(authDispatch);
          navigate("/login");
        }
        return Promise.reject(error);
      }
    );
  }
