import React from 'react';
import { Light } from '.';
import { primaryColors } from '../../../theme';

const Template = (args) => <Light {...args} > {args.text} </Light>

export const Playground = Template.bind({});

const sizes = {
  SMALL : 'small',
  DEFAULT: 'default'
}
const colors = {
  BLUE: primaryColors.blue,
  GREEN: primaryColors.green,
  PINK: primaryColors.pink,
  PURPLE: primaryColors.purple
}

Playground.args = {
  color: primaryColors.blue,
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
  color: {
    control: {
      type: "select",
      options: [ colors.BLUE, colors.GREEN, colors.PINK, colors.PURPLE ]
    }
  },
  text: {
    control: "text"
  },
  disabled: {
    control: "boolean"
  }
}

export const DefaultStory = () => <Light type="button">Click Me</Light>;

DefaultStory.storyName = "Default";

export default {
  title: "Components/Button/Light",
  component: DefaultStory
}