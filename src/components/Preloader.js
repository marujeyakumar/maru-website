import React, { Component } from "react";

export default class Preloader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      removed: false
    };
  }

  componentDidMount() {
    window.onload = () => {
      this.setState({ loaded: true });
      setTimeout(() => {
        this.setState({ remove: true });
      }, 900);
    };
  }

  render() {
    return this.state.removed ? null : (
      <div id="preloader">
        <div
          id="ctn-preloader"
          className={("ctn-preloader", {
            loaded: this.state.loaded
          })}
        >
         
        </div>
      </div>
    );
  }
}
