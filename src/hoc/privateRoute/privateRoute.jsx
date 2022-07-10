import { useEffect } from "react";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { getLoggedInStatus } from "../../store/auth/auth.selectors";
import { customHistory } from "../../utils/core";

function PrivateRoute({ children }) {
  const isLoggedIn = useSelector(getLoggedInStatus());
  const location = useLocation();

  useEffect(() => {
    if (!isLoggedIn) {
      customHistory.push("/signup", { from: location });
    }
  }, []);

  return isLoggedIn && children;
}

PrivateRoute.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};

export default PrivateRoute;
