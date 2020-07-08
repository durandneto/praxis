import React from 'react'
import MainTitleDescription from '.'

export default {
  title: 'brand|Typography/Title Description',
  component: MainTitleDescriptionStory,
};

export const MainTitleDescriptionStory = () => <MainTitleDescription
  title={"Praxis"}
  description={"Spinal Cord Institute"} />

MainTitleDescriptionStory.story = {
  name: 'Default',
};

export const MainTitleDescriptionInlineStory = () => (
  <>
  <MainTitleDescription
    inline
    headerH1
    headerColor={"Pink"}
    title={"Praxis"}
    bodyColor={"Pink"}
    description={"Spinal Cord Institute"}
  />
  <MainTitleDescription
    inline
    headerH2
    headerColor={"Pink"}
    title={"Praxis"}
    bodyColor={"Pink"}
    description={"Spinal Cord Institute"}
  />
  <MainTitleDescription
    inline
    headerH3
    headerColor={"Pink"}
    title={"Praxis"}
    bodyColor={"Pink"}
    description={"Spinal Cord Institute"}
  />
  <MainTitleDescription
    inline
    headerH4
    headerColor={"Pink"}
    title={"Praxis"}
    bodyColor={"Pink"}
    description={"Spinal Cord Institute"}
  />
  <MainTitleDescription
    inline
    headerH5
    headerColor={"Pink"}
    title={"Praxis"}
    bodyColor={"Pink"}
    description={"Spinal Cord Institute"}
  />
  <MainTitleDescription
    inline
    headerH6
    headerColor={"Pink"}
    title={"Praxis"}
    bodyColor={"Pink"}
    description={"Spinal Cord Institute"}
  />
  </>
)

MainTitleDescriptionInlineStory.story = {
  name: 'Inline',
};