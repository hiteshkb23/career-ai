import React from 'react'

const AuthLayout = ({ children }) => {
  return (
    <div className="flex justify-center pt-20">{children}</div>
  )
};

export default AuthLayout;

//this wraps the auth pages lke login and signup 