import * as React from 'react';

import {WebexMeetingsWidget} from '@webex/widgets';
import '@webex/widgets/dist/css/webex-widgets.css';
import './meeting-widget.css';
import { collapseTextChangeRangesAcrossMultipleVersions } from 'typescript';


function MeetingWidget(props) {
  var controls=null;
  var Widgetprops=null;
  if(props.inMeetingControls && props.interstitialControls)
  {
    controls = (inMeeting) => inMeeting ? props.inMeetingControls : props.interstitialControls;
  }
  else if(props.inMeetingControls && !props.interstitialControls)
  {
    controls = (inMeeting) => inMeeting ? ['mute-audio','mute-video','share-screen','member-roster','settings','leave-meeting'] : props.interstitialControls;
  }
  else if(!props.inMeetingControls && props.interstitialControls)
  {
    controls = (inMeeting) => inMeeting ? props.inMeetingControls : ['mute-audio','mute-video','settings','join-meeting'];
  }
  else{
    controls = (inMeeting) => inMeeting ? ['mute-audio','mute-video','share-screen','member-roster','settings','leave-meeting'] : ['mute-audio','mute-video','settings','join-meeting'];
  }
  var className=props.theme=="dark"?"webex-meeting-widget-demo wxc-theme-dark":props.theme=="light"?"webex-meeting-widget-demo wxc-theme-light":null;
  if(props.theme==null)
  {
    const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
    if (darkThemeMq.matches) {
      className="webex-meeting-widget-demo wxc-theme-dark";
    } else {
      className="webex-meeting-widget-demo wxc-theme-light";
    }
    
  }
  console.log("props",props);
  console.log("controls",controls);
  Widgetprops={...props,controls,className,style:{width:`${props.width}`,height:`${props.height}`,minWidth:"700px",minHeight:"500px"}};
  return (
    <div className="WebexMeeting">
        { 
            <WebexMeetingsWidget{...Widgetprops}
          />
        }
    </div>
  );
}

export default MeetingWidget ;
