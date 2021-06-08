import React from 'react';
import Avatar from '.';
import { primaryColors } from '../../../theme';

const Template = (args) => <Avatar {...args} />

export const Playground = Template.bind({});

const demoImages = {
    TINY: '/images/avatar-2-tiny.png',
    SMALL: '',
    MEDIUM: '/images/avatar-2-medium.png',
    LARGE: '/images/avatar-1.png',
}
const sizes = {
    TINY: 'tiny',
    SMALL: 'small',
    MEDIUM: 'medium',
    LARGE: 'large',
}
const colors = {
    BLUE: primaryColors.blue,
    GREEN: primaryColors.green,
    PINK: primaryColors.pink,
    PURPLE: primaryColors.purple
}

Playground.args = {
    size: sizes.MEDIUM,
    backgroundColor: primaryColors.pink,
    image: demoImages.MEDIUM
}

Playground.argTypes = {
    size: {
        control: {
            type: "select",
            options: [ sizes.TINY, sizes.SMALL, sizes.MEDIUM, sizes.LARGE ]
        }
    },
    backgroundColor: {
        control: {
            type: "select",
            options: [colors.BLUE, colors.GREEN, colors.PINK, colors.PURPLE]
        }
    },
    image: {
        control: {
            type: "select",
            options: [ demoImages.TINY, demoImages.SMALL, demoImages.MEDIUM, demoImages.LARGE ]
        }
    }
}

export const DefaultStory = () => <Avatar />

DefaultStory.storyName = "Default";

export default {
    title: "Components/Avatar",
    component: DefaultStory
}