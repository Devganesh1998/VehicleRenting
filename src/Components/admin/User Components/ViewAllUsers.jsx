import React from "react";
import { connect } from "react-redux";
import UserTable from "./UserTable";
import { sortUsers } from "../../../Redux/userAction";

class ViewAllUsers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSorted: true,
    };
  }

  handleSort = (...e) => {
    const [fieldName, isNumber] = e;
    let { isSorted } = this.state;
    let { sortUsers } = this.props;
    if (isSorted) {
      sortUsers(fieldName, "DECENDING", isNumber);
    } else {
      sortUsers(fieldName, "ASCENDING", isNumber);
    }
    this.setState({
      isSorted: !this.state.isSorted,
    });
  };

  render() {
    return (
      <React.Fragment>
        <div>
          <h5 style={{ color: "red", fontWeight: "700" }}>
            Click on the Table header to sort in both Ascending and Descending
            order And click on the Name to View both User Details and History of
            bookings.
          </h5>
        </div>
        <UserTable handleSort={this.handleSort} {...this.props} />
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  Users: state.user.user_data,
});

const mapDispatchToProps = (dispatch) => {
  return {
    sortUsers: (category, sortType, isNumber) =>
      dispatch(sortUsers(category, sortType, isNumber)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewAllUsers);
