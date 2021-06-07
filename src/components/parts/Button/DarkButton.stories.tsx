import React from 'react';
import { Dark } from '.';
import { primaryColors } from '../../../theme';

const Template = (args) => <Dark {...args} > {args.text} </Dark>

export const Playground = Template.bind({});

const sizes = {
  SMALL : 'small',
  DEFAULT: 'default'
}

Playground.args = {
  size: sizes.DEFAULT,
  text: "Click Me!",
  disabled: false
};

Playground.argTypes = {
  size: {
    control: {
      type: "select",
      options: [sizes.SMALL, sizes.DEFAULT]
    }
  },
  text: {
    control: "text"
  },
  disabled: {
    control: "boolean"
  }
}

export const DefaultStory = () => <Dark type="button">Click Me</Dark>;

DefaultStory.storyName = "Default";

export default {
  title: "Components/Button/Dark",
  component: DefaultStory
}