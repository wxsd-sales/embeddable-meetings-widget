import * as React from 'react';
import { useState, useEffect } from 'react';

 import {WebexMeetingsWidget} from '@webex/widgets';
import '@webex/widgets/dist/css/webex-widgets.css';
import './meeting-widget.css';


function MeetingWidget(props) {
  var myControls=null;
  if(props.inMeetingControls && props.notJoinedControls)
  {
    myControls = (inMeeting) => inMeeting ? props.inMeetingControls : props.notJoinedControls;
  }
  else if(props.inMeetingControls && !props.notJoinedControls)
  {
    myControls = (inMeeting) => inMeeting ? ['mute-audio','mute-video','share-screen','member-roster','settings','leave-meeting'] : props.notJoinedControls;
  }
  else if(!props.inMeetingControls && props.notJoinedControls)
  {
    myControls = (inMeeting) => inMeeting ? props.inMeetingControls : ['mute-audio','mute-video','settings','join-meeting'];
  }
  else{
    myControls = (inMeeting) => inMeeting ? ['mute-audio','mute-video','share-screen','member-roster','settings','leave-meeting'] : ['mute-audio','mute-video','settings','join-meeting'];
  }
  console.log('props',props);
  const  accesstoken  = props.accesstoken;
  const destination =props.destination;
  const theme=props.theme;
  const layout=props.layout;
  console.log('accesstoken',accesstoken);
  console.log('destination',destination);
  console.log('theme',theme);
  return (
    
    <div className="WebexMeeting">
        { 
            <WebexMeetingsWidget
            style={{width: "1000px", height: "500px"}}
            accessToken= {accesstoken}
            meetingDestination= {destination}
            className={`webex-meeting-widget-demo wxc-theme-${theme}`}
            layout={layout}
            controls={myControls}
          />
        }
    </div>
  );
}

export default MeetingWidget ;
