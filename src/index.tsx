// import 'babel-polyfill';
import 'core-js/stable';
import 'regenerator-runtime/runtime';

import MeetingWidget from './meeting-widget';
import * as React from 'react';
// import * as ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
declare const window: any;

const renderWidget = (options) => {
  console.log('received params', options);
  //   ReactDOM.render(
  //     React.createElement(MeetingWidget, options),
  //     document.querySelector('#embeddable-meetings-widget'),
  //   );
  createRoot(document.querySelector('#embeddable-meetings-widget')).render(
    React.createElement(MeetingWidget, options),
  );
};

if (!window.webexMeetingsWidget) {
  // this is how you inject an object
  window.webexMeetingsWidget = renderWidget;
}
