import React from 'react'
import ContactForm from '.'

export default {
  title: 'Form|Contact',
  component: ContactFormStory,
};


export const ContactFormStory = () => (
  <ContactForm
    company={{
      name: "Durand"
    }}
    onEvent={e => {
      console.log(e)
    }}
  />
)

export const ContactFormLoading = () => (
  <ContactForm
    company={{
      name: "Durand"
    }}
    loading
    onEvent={e => {
      console.log(e)
    }}
  />
)

export const ContactFormSuccess = () => (
  <ContactForm
    company={{
      name: "Durand"
    }}
    success
    onEvent={e => {
      console.log(e)
    }}
  />
)

ContactFormLoading.story = {
  name: 'success',
};

ContactFormLoading.story = {
  name: 'Loading',
};

ContactFormStory.story = {
  name: 'Default',
};