import React, { Component } from 'react';
import { ArrowLeft } from 'react-feather';
import { Colors } from '../config/styles';

class ProjectModal extends Component {
  componentDidMount() {
    document.body.style.overflow = 'hidden';
  }

  componentWillUnmount() {
    document.body.style.overflow = 'scroll';
  }

  render() {
    const { onClick, children } = this.props;
    return (
      <div className="w-100 pa3 fixed top-0 bottom-0 right-0 left-0"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        >
        <div className="ma4 bg-white fixed overflow-scroll top-0 bottom-0 right-0 left-0 flex justify-center items-center">
          <div className="w-100 mw8 bg-white z-2 h-100">
            <div
              className="pointer flex items-center pa4 mb4"
              onClick={onClick}
              onKeyPress={onClick}
              role="button">
              <ArrowLeft color={Colors.silver} size={20} />
              &nbsp;BACK
            </div>
            {children}
          </div>
        </div>
      </div>

    );
  }
}

export default ProjectModal;
