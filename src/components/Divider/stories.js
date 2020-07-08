import React from 'react'
import Divider from '.'

export default {
  title: 'Components|Divider',
  component: DividerStory,
};


export const DividerStory = () => (
  <>
    <Divider color={"Pink"} />
    <Divider color={"Green"} />
    <Divider color={"Light-Blue"} />
  </>
)

DividerStory.story = {
  name: 'Default',
};