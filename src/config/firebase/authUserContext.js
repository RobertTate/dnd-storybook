import React from 'react';
 
const AuthUserContext = React.createContext({userDataPresent:false, user: null});

export default AuthUserContext;
