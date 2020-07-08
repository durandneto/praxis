import React from 'react'
import renderer from 'react-test-renderer'

import TitleDescription from '.'

describe('Typography', () => {
    it('Rendering Title Description Component without crashing', () => {
        const tree = renderer.create(
            <TitleDescription />).toJSON()
        expect(tree).toMatchSnapshot()
    })
})