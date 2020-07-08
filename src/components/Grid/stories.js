import React from 'react'
import { storiesOf } from '@storybook/react'
import Container, { Row, Column} from '.'
import Header from '../Typography/Header'

storiesOf('Grid|Flexbox', module)

.add('Default', () => (
  <Container>
    <Row spaceBetween>
      <Column>1</Column>
      <Column>2</Column>
    </Row>
    <Row spaceAround>
      <Column>3</Column>
      <Column>4</Column>
    </Row>
    <Row >
      <Column>5</Column>
      <Column>6</Column>
    </Row>
    <Row justifyCenter>
      <Column>7</Column>
      <Column>8</Column>
    </Row>
    <Row justifyRight>
      <Column>9</Column>
      <Column>10</Column>
    </Row>
  </Container>
))


.add('fullHeight', () => (
  <Container fullHeight bgColor="Light-Blue">
    <Row>
        <Column>
        Praxis 1
        </Column>
      </Row>
    <Row>
        <Column>
        Praxis 2
        </Column>
      </Row>
  </Container>
))

.add('FullHeight Justify Content Center', () => (
  <Container fullHeight justifyCenter >
    <Row justifyCenter>
        <Column>
        Praxis 1
        </Column>
      </Row>
    <Row justifyCenter>
        <Column>
        Praxis 2
        </Column>
      </Row>
  </Container>
))

.add('FullHeight Align Items Center', () => (
  <Container fullHeight >
    <Row justifyCenter>
        <Column>
        Praxis 1
        </Column>
      </Row>
    <Row justifyCenter>
        <Column>
        Praxis 2
        </Column>
      </Row>
  </Container>
))

.add('FullHeight Justify Content End and Align Items center', () => (
  <Container fullHeight justifyRight  >
    <Row justifyCenter>
        <Column>
        Praxis 1
        </Column>
      </Row>
    <Row justifyCenter>
        <Column>
        Praxis 2
        </Column>
      </Row>
  </Container>
))

.add('FullHeight Justify Content End', () => (
  <Container fullHeight justifyRight>
    <Row>
        <Column>
        Praxis 1
        </Column>
      </Row>
    <Row>
        <Column>
        Praxis 2
        </Column>
      </Row>
  </Container>
))

.add('Container LG with color', () => (
  <Container lg bgColor="Yellow">
    <Row>
        <Column>
        Praxis 1
        </Column>
      </Row>
    <Row>
        <Column>
        Praxis 2
        </Column>
      </Row>
  </Container>
))

.add('Container MD with color', () => (
  <Container md bgColor="Purpple">
    <Row>
        <Column>
        Praxis 1
        </Column>
      </Row>
    <Row>
        <Column>
        Praxis 2
        </Column>
      </Row>
  </Container>
))

.add('Container SM with color', () => (
  <Container sm bgColor="Pink">
    <Row>
        <Column>
        Praxis 1
        </Column>
      </Row>
    <Row>
        <Column>
        Praxis 2
        </Column>
      </Row>
  </Container>
))

.add('Container XS with color', () => (
  <Container xs bgColor="Light-Blue">
    <Row>
        <Column>
        Praxis 1
        </Column>
      </Row>
    <Row>
        <Column>
        Praxis 2
        </Column>
      </Row>
  </Container>
))


.add('Media Query', () => (
  <Container>
    <Row>
      <Column>
      <Header
        color="Pink"
        label="Praxis"
      />
      </Column>
    </Row>
  </Container>
))
