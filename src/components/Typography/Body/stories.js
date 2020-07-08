import React from 'react'
import { storiesOf } from '@storybook/react'
import Body from '.'

storiesOf('Brand|Typography/Body', module)

.add('Default', () => (
    <div>
        <div>
            <Body label={"Body component default"} />
        </div>
        <div>
            <Body xs label={"Body component XS"} />
        </div>
        <div>
            <Body sm label={"Body component SM"} />
        </div>
        <div>
            <Body md label={"Body component MD"} />
        </div>
        <div>
            <Body lg label={"Body component LG"} />
        </div>
    </div>
))

.add('XS', () => (
  <Body xs label={"Body component"} />
))

.add('SM', () => (
  <Body sm label={"Body component"} />
))

.add('MD', () => (
  <Body md label={"Body component"} />
))

.add('LG', () => (
  <Body lg label={"Body component"} />
))

.add('Colorful and Differents sizes', () => (
  <div>
      <Body color={"Pink"} xs label={"Body component Pink"} />
      <Body color={"Yellow"} lg label={"Body component Yellow"} />
      <Body color={"Purpple"} lg label={"Body component Purpple"} />
      <Body color={"Green"} lg label={"Body component Green"} />
      <Body color={"Black"} lg label={"Body component Black"} />
      <Body color={"Light-Blue"} md label={"Body component Light-Blue"} />
  </div>
))

