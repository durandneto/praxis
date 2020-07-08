import React from 'react'
import PitDescription from '.'
import PitDescriptionV2 from './index.v2'
import Container, { Row, Column } from '../Grid'

export default {
  title: 'Components|Pit Description',
  component: PitDescriptionStory,
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

const bg = require("../../images/Dark-City-Background-3-820x480.jpg")

export const PitDescriptionStory = () => (
  <PitDescription
    title={"Cox Enterprises Social Impact Accelerator Powered by praxis"}
    description={"This program leverages innovative startups to drive community impact, focusing on environmental sustainability and social entrepreneurship."}
    location={"Atlanta, Georgia, U.S."}
    video={"https://www.youtube.com/embed/ZNJifht0qOE"}
    companyName={"Cox Enterprises"}
    logo={bg}
    founders={founders}
  />
)

PitDescriptionStory.story = {
  name: 'Default',
};

export const PitDescriptionV2Story = () => (
  <PitDescriptionV2
    title={"Cox Enterprises Social Impact Accelerator Powered by praxis"}
    description={"This program leverages innovative startups to drive community impact, focusing on environmental sustainability and social entrepreneurship."}
    location={"Atlanta, Georgia, U.S."}
    video={"https://www.youtube.com/embed/ZNJifht0qOE"}
    companyName={"Cox Enterprises"}
    logo={bg}
    founders={founders}
  />
)

PitDescriptionV2Story.story = {
  name: 'V2',
};

export const MultiplePitDescriptionStory = () => (
  <Container>
    <Row>
      <Column>
        <PitDescription
          title={"Cox Enterprises Social Impact Accelerator Powered by praxis"}
          description={"This program leverages innovative startups to drive community impact, focusing on environmental sustainability and social entrepreneurship."}
          location={"Atlanta, Georgia, U.S."}
          video={"https://www.youtube.com/embed/ZNJifht0qOE"}
          companyName={"Cox Enterprises 1"}
          logo={bg}
          founders={founders}
        />
      </Column>
    </Row>
    <Row>
      <Column>
        <PitDescription
          title={"Cox Enterprises Social Impact Accelerator Powered by praxis"}
          description={"This program leverages innovative startups to drive community impact, focusing on environmental sustainability and social entrepreneurship."}
          location={"Atlanta, Georgia, U.S."}
          video={"https://www.youtube.com/embed/ZNJifht0qOE"}
          companyName={"Cox Enterprises 2"}
          logo={bg}
          founders={founders}
          />
      </Column>
    </Row>
    <Row>
      <Column>
        <PitDescription
          title={"Cox Enterprises Social Impact Accelerator Powered by praxis"}
          description={"This program leverages innovative startups to drive community impact, focusing on environmental sustainability and social entrepreneurship."}
          location={"Atlanta, Georgia, U.S."}
          video={"https://www.youtube.com/embed/ZNJifht0qOE"}
          companyName={"Cox Enterprises 3"}
          logo={bg}
          founders={founders}
          />
      </Column>
    </Row>
    <Row>
      <Column>
        <PitDescription
          title={"Cox Enterprises Social Impact Accelerator Powered by praxis"}
          description={"This program leverages innovative startups to drive community impact, focusing on environmental sustainability and social entrepreneurship."}
          location={"Atlanta, Georgia, U.S."}
          video={"https://www.youtube.com/embed/ZNJifht0qOE"}
          companyName={"Cox Enterprises 4"}
          logo={bg}
          founders={founders}
          />
      </Column>
    </Row>
  </Container>
)

MultiplePitDescriptionStory.story = {
  name: 'Multiple',
};