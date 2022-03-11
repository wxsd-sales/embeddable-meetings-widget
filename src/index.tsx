import 'babel-polyfill';
import MeetingWidget from './meeting-widget';
import React from 'react';
import ReactDOM from 'react-dom';
declare const window: any;

const renderWidget = (options) => {
    console.log("received params", options);
    ReactDOM.render(React.createElement(MeetingWidget, options), document.querySelector("#meeting-widget"));
}

if (!window.webexMeetingWidget) { // this is how you inject an object
    window.webexMeetingWidget = renderWidget;
  }
