import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function ProtectedLayout({ children, authentication = true }) {
  const [loader, setLoader] = useState(true);
  const navigate = useNavigate();
  const authStatus = useSelector((state) => state.authName.status);

  useEffect(() => {
    if (authentication && authStatus !== authentication) {
      navigate("/login");
    } else if (!authentication && authStatus !== authentication) {
      navigate("/");
    }
    setLoader(false);
  }, [authentication, navigate, authStatus]);

  return loader ? <h1>loading ...</h1> : <>{children}</>;
}

export default ProtectedLayout;
