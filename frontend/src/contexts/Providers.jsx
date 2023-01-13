import React from 'react';
import AuthProvider from './AuthContext';
const Providers = function ({ children }) {
    return <AuthProvider>{children}</AuthProvider>;
};

export default Providers;
