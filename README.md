<p align="center">
  <h2 align="center">Webex Meetings Widget with CDN link</h2>

  <p align="center">
   CDN link for Webex meetings widget allows developers to easily include Webex meetings functionality into your application.
  </p>
</p>

## Table of Contents

- [CDN](#CDN)
  - [CDN](#cdn)
  - [Build from Source](#build-from-source)
  - [NPM *beta*](#npm)
    - [Usage with the Webex SDK](#usage-with-webex-sdk)
- [Usage](#usage)
  - [Quick Start](#quick-start)
  - [HTML](#html)
    - [Data API](#data-api)
    - [Browser Globals](#browser-globals)
  - [Events](#events)
- [Browser Support](#browser-support)

## Usage with CDN

Using our CDN requires the least amount of work to get started. Add the following into your HTML file in the head section:

```html
<!-- Latest compiled and minified CSS -->
<link rel="stylesheet" href="https://code.s4d.io/widget-recents/latest/main.css">

<!-- Latest compiled and minified JavaScript -->
<script src="https://code.s4d.io/widget-recents/latest/bundle.js"></script>
```
You can then instantiate the widget by providing the following parameters:

```
<div id="meeting-widget"></div>

  <script>
  webexMeetingWidget({accesstoken: "NDE2ODIxMWQtYjE5YS00Mjk1LThmNDAtZTAyYTQyNGIxNmMwODUwODRkNTktZDEx_PF84_1eb65fdf-9643-417f-9974-ad72cae0e10f",
      destination: "https://meet7.webex.com/meet/pr1327211228",
      theme:"light",
      layout:"Grid",
      inMeetingControls:['mute-audio','leave-meeting'],
      notJoinedControls:['join-meeting']});
</script>
```


### Access Tokens

See the [Accounts and Authentication](https://developer.webex.com/docs/getting-started#accounts-and-authentication) section of our developer portal for more information on how to obtain access tokens.

### Meeting Destinations

A meeting destination is virtual location where the Webex meeting takes place.
A meeting destination can be accessed via:

* SIP URIs (Webex Meetings, Personal Meeting Rooms and Webex cloud-registered devices only)
* Email address (of a Webex user)
* [People IDs](https://developer.webex.com/docs/api/v1/people)
* [Room IDs](https://developer.webex.com/docs/api/v1/rooms)

### Theme

Developers can choose how widget should look based on following themes:

* Dark theme:
  * Use `theme="dark"` as prop value in Meetings widget.
* Light theme:
  * Use `theme="light"` as prop value in Meetings widget.

### Remote Video Layout

Remove video from participants can be displayed in many different ways.
Developers can choose how remote video displays based on the following layouts:

#### Grid (default)

Grid layout divides remote participants in equal segments, giving visibility to a lot of speakers at the same time.

<img src="./images/grid-layout.png" width="300px" alt="Grid layout example" />

Use `layout="grid"` as prop value in Meetings widget.

#### Overlay

Overlay layout displays the active speaker prominently, while overlaying other participants in a strip at the bottom.

<img src="./images/overlay-layout.png" width="300px" alt="Overlay layout example" />

Use `layout="overlay"` as prop value in Meetings widget.

#### Stack

Stack layout is similar to overlay, but instead of displaying other participants in a strip at the bottom,
non-active speakers are placed on top of the active speaker.
Stacking videos gives full visibility to everyone's video.

<img src="./images/stack-layout.png" width="300px" alt="Stack layout example" />

Use `layout="stack"` as prop value in Meetings widget.

#### Prominent

Prominent layout gives focus to the active speaker and displays other participants around this participant.

<img src="./images/prominent-layout.png" width="300px" alt="Prominent layout example" />

Use `layout="prominent"` as prop value in Meetings widget.

#### Focus

Focus layout gives all visibility to the active speaker.
All other participants are not displayed until they speak, who then would take over as active speaker.

<img src="./images/focus-layout.png" width="300px" alt="Prominent layout example" />

Use `layout="focus"` as prop value in Meetings widget.

### Customize Meeting Controls

Developers can customize the meeting controls used by the Meetings widget.
The Webex Meetings Widget takes an optional function to specify a custom list of controls for a meeting and an optional range to specify which controls can be collapsed if not enough space is available.

The `controls` prop is a function that receives a boolean parameter which is `true` when the meeting is _in-meeting_.
It should return an array of control names (strings) to display on the corresponding state of the meeting (in-meeting or else).
The default control names are:

* When meeting is _in-meeting_:
  * `mute-audio`
  * `mute-video`
  * `share-screen`
  * `member-roster`
  * `settings`
  * `leave-meeting`
* When meeting is _not joined_ (e.g. interstitial section)
  * `mute-audio`
  * `mute-video`
  * `settings`
  * `join-meeting`
