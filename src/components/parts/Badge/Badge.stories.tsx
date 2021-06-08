import React from 'react';
import Badge from '.';
import { primaryColors } from '../../../theme';

const Template = (args) => <Badge {...args} />

export const Playground = Template.bind({});

const colors = {
    BLUE: primaryColors.blue,
    GREEN: primaryColors.green,
    PINK: primaryColors.pink,
    PURPLE: primaryColors.purple
}


Playground.args = {
    text: "Popular",
    color: primaryColors.pink,
    ghost: true
}

Playground.argTypes = {
    text: {
        control: "text"
    },
    color: {
        control: {
            type: "select",
            options: [colors.BLUE, colors.GREEN, colors.PINK, colors.PURPLE]
        }
    },
    ghost: {
        control: "boolean"
    }
}

export const DefaultStory = () => <Badge />

DefaultStory.storyName = "Default";

export default {
    title: "Components/Badge",
    component: DefaultStory
}