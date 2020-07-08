import React from 'react';
import { storiesOf } from '@storybook/react';
import Modal from '.';
import ContactForm from '../ContactForm'

storiesOf('Components|Modal', module)
  .add('Modal with title', () => (
    <div style={{ width: '100vw', height: '100vh' }}>
      asdasdasas
      asdasdasas
      <Modal
        open
        header="Praxis"
        content="Lorem Ipsum is simply dummy text of the printing and typesetting
        industry."
        onEvent={event => console.log(event)}
      />
    </div>
  ))
  .add('Modal without title', () => (
    <div style={{ width: '100vw', height: '100vh' }}>
      asdasdasas
      <Modal
        content="Lorem Ipsum is simply dummy text of the printing and typesetting
        industry."
        hideBtnClose={false}
        onEvent={event => console.log(event)}
      />
    </div>
  ))
  .add('Modal without Close Icon', () => (
    <div style={{ width: '100vw', height: '100vh' }}>
      asdasdasas
      <Modal
        open
        content="Lorem Ipsum is simply dummy text of the printing and typesetting
        industry."
        hideBtnClose
        onEvent={event => console.log(event)}
      />
    </div>
  ))
  .add('Modal with component', () => (
    <div style={{ width: '100vw', height: '100vh' }}>
      asdasdasas
      <Modal
        open={true}
        onEvent={event => console.log(event)}
        content={
          <ContactForm
            company={{
              name: "Durand"
            }}
            onEvent={e => {
              console.log(e)
            }}
          />
        }
      />
    </div>
  ));
