import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Chevron extends Component {
  static propTypes = {
    onClick: PropTypes.func.isRequired,
    direction: PropTypes.string.isRequired,
    webPacksPerPage: PropTypes.number.isRequired,
    pageNumber: PropTypes.number.isRequired,
    totalPacks: PropTypes.number.isRequired,
  }

  render() {
    let morePacks = (this.props.totalPacks > this.props.pageNumber * this.props.webPacksPerPage) ? true : false;
    
    return(
      <React.Fragment>
        {(this.props.direction === "left")
        ?
        (
          (this.props.pageNumber !== 1)
          ?
          <div style={styles.chevron} onClick={this.props.onClick}>
            <svg viewBox="0 0 32 32" className="icon icon-chevron-left" aria-hidden="true">
              <path d="M14.19 16.005l7.869 7.868-2.129 2.129-9.996-9.997L19.937 6.002l2.127 2.129z"/>
            </svg>
          </div>
          :
          <div style={styles.chevron}></div>
        )
        :
        (
          (morePacks)
          ?
          <div style={styles.chevron} onClick={this.props.onClick}>
            <svg viewBox="0 0 32 32" className="icon icon-chevron-right" aria-hidden="true">
              <path d="M18.629 15.997l-7.083-7.081L13.462 7l8.997 8.997L13.457 25l-1.916-1.916z"/>
            </svg>
          </div>
          :
          <div style={styles.chevron}></div>
        )
        }
      </React.Fragment>
    )
  }
}

const styles = {
  chevron: {
    width: "10%",
    backgroundColor: "white",
    boxShadow: "3px 3px",
    cursor: "pointer",
  }
};

export default Chevron;