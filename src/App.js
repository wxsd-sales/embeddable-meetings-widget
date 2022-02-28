import {WebexMeetingsWidget} from '@webex/widgets';

import './App.css';
import '@webex/widgets/dist/css/webex-widgets.css';

export default function App() {

  // This returns a component that will either display our OAuth login link or our main app if we have a token.
  return (
    <div className="WebexMeeting">
        { 
            <WebexMeetingsWidget
            accessToken="NjNmNmMzN2YtMjZiMi00MGI4LTk1YjQtY2RkOTJjYTE2OWEyZDc5N2VmZWItZDRm_PF84_1eb65fdf-9643-417f-9974-ad72cae0e10f"
            meetingDestination="https://cisco.webex.com/meet/rkanthet"
          />
        }
    </div>
  );
}

