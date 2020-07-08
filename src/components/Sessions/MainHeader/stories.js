import React from 'react'
import MainHeader from '.'

export default {
  title: 'Sessions|Header/Main',
  component: MainHeaderStory,
};
const bg = "https://praxisinstitute.org/wp-content/uploads/2020/03/Large-Heroes_1600x900_08_1.png"
export const MainHeaderStory = () => (
  <MainHeader
    title={"Why we exist"}
    description={"Praxis exists to lead global collaboration in spinal cord injury research, innovation and care. We use SCI knowledge translation to bridge health evidence with real-world delivery."}
    bg={bg}
    />
)

MainHeaderStory.story = {
  name: 'Default',
};