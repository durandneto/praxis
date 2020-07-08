import React from 'react'
import { storiesOf } from '@storybook/react'
import Header from '.'
import Body from '../Body'

storiesOf('Brand|Typography/Headers', module)

.add('Header e Body', () => (
  <>
    <Header label={"Header Default"} />
    <Body label={"Body label "} />
  </>
))

.add('Default', () => (
  <>
    <Header label={"Header Default"} />
    <Header h1 label={"Header H1"} />
    <Header h2 label={"Header H2"} />
    <Header h3 label={"Header H3"} />
    <Header h4 label={"Header H4"} />
    <Header h5 label={"Header H5"} />
    <Header h6 label={"Header H6"} />
  </>
))

.add('Colorful and Differents sizes', () => (
  <>
    <Header label={"Header Default"} />
    <Header color="Yellow" h1 label={"Header H1 Yellow"} />
    <Header color={"Purpple"} h2 label={"Header H2 Purpple"} />
    <Header color={"Green"} h3 label={"Header H3 Green"} />
    <Header color={"Black"} h4 label={"Header H4 Black"} />
    <Header color={"Pink"} h4 label={"Header H2 Pink"} />
    <Header color={"Light-Blue"} h5 label={"Header H5 Light-Blue"} />
  </>
))