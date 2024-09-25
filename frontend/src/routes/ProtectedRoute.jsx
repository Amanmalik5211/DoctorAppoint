import React from 'react'
import { authContext } from '../context/AuthContext';
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({children,allowedRoles}) => {
  
    const {token , role} = useContext(authContext);
    // console.log("Token:", token);
  // console.log("Role:", role);
  // console.log("Allowed Roles:", allowedRoles);

  const isAllowed = allowedRoles.includes(role);
  console.log("Is Allowed:", isAllowed);
  
  const accessibleRoute = token && isAllowed ? children :<Navigate to={'/login'} replace={true} />
  
  return accessibleRoute;
}

export default ProtectedRoute
