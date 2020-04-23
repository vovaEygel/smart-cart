import React, {Component} from "react";
import {connect} from "react-redux";

class About extends Component {
  render() {
    return (
      <div>
        <h2>ABOUT US</h2>
        {this.props.greetMsg}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    greetMsg: state.app.msg,
    counter: state.app.counter,
  };
};

const mapDispatchToProps = {};

// const AboutWithStore = connect(mapStateToProps)(About)
// export default AboutWithStore

export default connect(mapStateToProps, mapDispatchToProps)(About);
