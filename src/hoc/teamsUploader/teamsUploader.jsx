import { useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import {
  getTeamsList,
  getTeamsLoadingStatus,
} from "../../store/team/team.selectors";
import { loadTeams } from "../../store/team/team.actions";

function TeamsUploader({ children }) {
  const dispatch = useDispatch();
  const teams = useSelector(getTeamsList());
  const isLoading = useSelector(getTeamsLoadingStatus());

  useEffect(() => {
    if (!teams?.length) {
      dispatch(loadTeams());
    }
  }, []);
  return !isLoading && children;
}

TeamsUploader.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default TeamsUploader;
