import React from "react";
import { Meta } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import { ControlForm } from "./ControlForm";

export default {
  title: 'ControlForm',
  component: ControlForm,
  decorations: [withKnobs]
} as Meta

export const ControlFormStories: React.FC = () => <ControlForm 
  onSubmit={action('onSubmit')}
  handleRun={action('handleRun')}
  handleStop={action('handleStop')}
  handleClear={action('handleClear')}
/>