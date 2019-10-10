import React, { Component } from "react";
import { connect } from "react-redux";
// const FloatRight = props => {
//   console.log(props.incDec);
//   return (
//    ` <div className="position-absolute rounded-circle float-component">
//       {props.incDec.value}
//     </div>`
//   );
// };

class FloatRight extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.incDec);
  }
  componentDidUpdate() {
    console.log(this.props.incDec);
  }
  render() {
    return (
      <div className="position-absolute rounded-circle float-component">
        {this.props.incDec.value}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  incDec: state.incDec
});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FloatRight);
