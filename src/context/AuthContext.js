import React, { createContext, useState, useContext} from "react";


const LoginContext = createContext(null);

export default function AuthContext({children}) {
    /**
    gestionará toda la autenticación de nuestra aplicación.
    Consta de dos estados: uno con la información del usuario logueado (un obj) y
    un booleano para facilitar comprobaciones.
     */

    const [loginUser, setLoginUser] = useState({});
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    /**
     * Tres funciones que interactúan con el localStorage, se han hecho para 
     * que sea sencillo cambiar de método en el futuro. Si decidiéramos guardar
     * el token en una cookie, por ejemplo, sólo tendríamos que cambiar estas
     * tres funciones y el resto del programa no se daría cuenta del cambio.
     */
    const getToken = () => localStorage.getItem("TOKEN_KEY");
    const setToken = token => localStorage.setItem("TOKEN_KEY", token);
    const removeToken = () => localStorage.removeItem("TOKEN_KEY");


    const signIn = (token, user) => {
        /**
         * Gestiona todo el proceso de login:
         * Guarda el token y actualiza los dos estados
         */
        setToken(token);
        setLoginUser(user);
        setIsAuthenticated(true);
    }

    const signOut = () => {
        /**
         * Gestiona todo el proceso de logout:
         * Elimina el token y reinicia los estados.
         */
        removeToken();
        setLoginUser({});
        setIsAuthenticated(false);
    }

    const getAuthHeaders = (headers = {}) => {
        /**
         * Construye un objeto con los headers ya configurados a partir
         * del token, listo para ser introducido en las opciones de un fetch.
         */
        return {...headers, Authorization: `Bearer ${getToken()}`}
    };

   

    const contextValue = {
        loginUser,
        isAuthenticated,
     
        getToken,
        signIn,
        signOut,
        getAuthHeaders
    };

    /**
     * Envuelve a todos los hijos con el Provider del contexto, enviando 
     * por value un objeto con todas las propiedades / funciones
     * que se quieran exponer en el árbol.
     */

    return (
        <LoginContext.Provider value={contextValue}>
            {children}
        </LoginContext.Provider>
    );
}

/**
 * En lugar de exportar el contexto, podemos exportar un pequeño custom hook
 * que utiliza directamente el contexto LoginContext para simplificar el uso
 * en el resto de archivos. Es muy común aunque es opcional.
 */
const useAuthContext = () => useContext(LoginContext);

export {useAuthContext};