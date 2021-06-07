import React from 'react';
import TextInput from '.';
import { primaryColors } from '../../../theme';

const Template = (args) => <TextInput {...args} />

export const Playground = Template.bind({});

const states = {
  PENDING : 'pending',
  SUCCESS : 'success',
  ERROR : 'error',
  NONE: ""
}

Playground.args = {
  state: states.NONE,
  label: "",
  single: false,
  placeHolder: "Place Holder Text..."
};

Playground.argTypes = {
  single: {
    control: "boolean"
  },
  state: {
    control: {
      type: "select",
      options: [ states.PENDING, states.SUCCESS, states.ERROR ]
    }
  },
  label: {
    control: "text"
  },
  placeHolder: {
    control: "text"
  }
}

export const DefaultStory = () => <TextInput />;

DefaultStory.storyName = "Default";

export default {
  title: "Components/Text-Input",
  component: DefaultStory
}