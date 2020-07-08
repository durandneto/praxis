import React from 'react'
import VideoSession from '.'

export default {
  title: 'sessions|Videos Session',
  component: VideoSessionStory,
};

export const VideoSessionStory = () => (
  <VideoSession
    video="https://www.youtube.com/embed/ZNJifht0qOE"
    title={"Should Have a Title"}
    description={"Should Have a Description Should Have a Description Should Have a Description Should Have a Description Should Have a Description Should Have a Description "}
  />
)

VideoSessionStory.story = {
  name: 'Default',
};