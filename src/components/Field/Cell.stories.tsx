import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, number } from '@storybook/addon-knobs'
import { Cell } from './Cell'

export default {
  title: 'Cell',
  decorations: [withKnobs]
}

export const CellStory: React.FC<{}> = () => {
  const filled = number("Number", 123)

  return (
    <Cell onClick={action('onClick')}>
      {filled}
    </Cell>
  )
}