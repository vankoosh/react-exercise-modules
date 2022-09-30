import React from 'react';

export default class Video extends React.Component {
  render() {
    return (
      <div>
        <video src={this.props.src} controls autostart autoPlay muted />
      </div>
    );
  }
}
