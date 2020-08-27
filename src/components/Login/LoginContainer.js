import { connect } from "react-redux";
import Login from "./Login";
import { setUserDetails } from "../../reducers/userRedux";

export const mapDispatchToProps = (dispatch) => ({
  setUserDetails: (details) => dispatch(setUserDetails(details)),
});

export default connect(null, mapDispatchToProps)(Login);
