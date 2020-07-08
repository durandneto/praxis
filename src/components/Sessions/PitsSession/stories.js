import React from 'react'
import PitDescriptionSession from '.'

export default {
  title: 'sessions|Pits Session',
  component: PitSessionStory,
};
const founders = []

// [1,2,3].map(funder => {
  founders.push({
    name: `founder 1`,
    avatar: `founder 1 avatar`,
    position: `CEO`
  })
  founders.push({
    name: `founder 2`,
    avatar: `founder 2 avatar`,
    position: `CEO`
  })
  founders.push({
    name: `founder 3`,
    avatar: `founder 3 avatar`,
    position: `CEO`
  })
// })

const bg = require("../../../images/Dark-City-Background-3-820x480.jpg")
const pits = [
  {
    title:"Cox Enterprises Social Impact Accelerator Powered by praxis",
    description:"This program leverages innovative startups to drive community impact, focusing on environmental sustainability and social entrepreneurship.",
    location:"Atlanta, Georgia, U.S.",
    logo:bg,
    founders,
    video: "https://www.youtube.com/embed/ZNJifht0qOE",
    companyName: "Cox Enterprises",
  },
]

export const PitSessionStory = () => (
  <PitDescriptionSession pits={pits} />
)

PitSessionStory.story = {
  name: 'Default',
};