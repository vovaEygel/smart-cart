import React, {Component} from "react";
import {connect} from "react-redux";
import LoginPage from "../pages/LoginPage.jsx";

class About extends Component {
  render() {
    return (
      <div>
        <h2>ABOUT US</h2>
        <LoginPage></LoginPage>
        {/* {this.props.greetMsg} */}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = {};

// const AboutWithStore = connect(mapStateToProps)(About)
// export default AboutWithStore

export default connect(mapStateToProps, mapDispatchToProps)(About);
