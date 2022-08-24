import { withAuthenticationRequired } from "@auth0/auth0-react/";
import React from 'react';

export const ProtectedRoute = ({ component }) => {
    const Component = withAuthenticationRequired(component, {
      onRedirecting: () => (
        <h2>Loading</h2>
      ),
    });
  
    return <Component />;
  };