import * as React from 'react';
import { useState, useEffect } from 'react';

 import {WebexMeetingsWidget} from '@webex/widgets';
import '@webex/widgets/dist/css/webex-widgets.css';
import './meeting-widget.css';


function MeetingWidget(props) {
  console.log('props',props);
  const  accesstoken  = props.accesstoken;
  const destination =props.destination;
  console.log('accesstoken',accesstoken);
  console.log('destination',destination);
  return (
    
    <div className="WebexMeeting">
        { 
            <WebexMeetingsWidget
            style={{width: "1000px", height: "500px"}}
            accessToken= {accesstoken}
            meetingDestination= {destination}
          />
        }
    </div>
  );
}

export default MeetingWidget ;
