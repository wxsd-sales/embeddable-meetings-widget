import * as React from 'react';
import { useState, useEffect } from 'react';

import { WebexMeetingsWidget } from '@webex/widgets';
import '@webex/widgets/dist/css/webex-widgets.css';
import './meeting-widget.css';
import { collapseTextChangeRangesAcrossMultipleVersions } from 'typescript';

import Draggable from 'react-draggable'; // The default

function MeetingWidget(props) {
  const Draggable1: any = Draggable;
  var controls = null;
  var Widgetprops = null;
  if (props.inMeetingControls && props.interstitialControls) {
    controls = (inMeeting) =>
      inMeeting ? props.inMeetingControls : props.interstitialControls;
  } else if (!props.inMeetingControls && props.interstitialControls) {
    controls = (inMeeting) =>
      inMeeting
        ? [
            'mute-audio',
            'mute-video',
            'share-screen',
            'member-roster',
            'settings',
            'leave-meeting',
          ]
        : props.interstitialControls;
  } else if (props.inMeetingControls && !props.interstitialControls) {
    controls = (inMeeting) =>
      inMeeting
        ? props.inMeetingControls
        : ['mute-audio', 'mute-video', 'settings', 'join-meeting'];
  } else {
    controls = (inMeeting) =>
      inMeeting
        ? [
            'mute-audio',
            'mute-video',
            'share-screen',
            'member-roster',
            'settings',
            'leave-meeting',
          ]
        : ['mute-audio', 'mute-video', 'settings', 'join-meeting'];
  }
  var className =
    props.theme == 'dark'
      ? 'webex-meeting-widget-demo wxc-theme-dark'
      : props.theme == 'light'
      ? 'webex-meeting-widget-demo wxc-theme-light'
      : null;
  if (props.theme == null) {
    const darkThemeMq = window.matchMedia('(prefers-color-scheme: dark)');
    if (darkThemeMq.matches) {
      className = 'webex-meeting-widget-demo wxc-theme-dark';
    } else {
      className = 'webex-meeting-widget-demo wxc-theme-light';
    }
  }
  Widgetprops = {
    ...props,
    controls,
    className,
    style: {
      width: `${props.width}`,
      height: `${props.height}`,
      minWidth: '700px',
      minHeight: '500px',
    },
  };
  if (props.draggable) {
    return (
      <Draggable1>
        <div className="WebexMeeting">
          {<WebexMeetingsWidget {...Widgetprops} />}
        </div>
      </Draggable1>
    );
  } else {
    return (
      <div className="WebexMeeting">
        {<WebexMeetingsWidget {...Widgetprops} />}
      </div>
    );
  }
}

export default MeetingWidget;
