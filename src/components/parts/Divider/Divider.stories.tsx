import React from 'react';
import Divider from '.';


const Template = (args) => <Divider {...args} />

export const Playground = Template.bind({});


Playground.args = {
    size: 5,
    dark: true
}

Playground.argTypes = {
    size: {
        control: "number"
    },
    dark: {
        control: "boolean"
    }
}

export const DefaultStory = () => <Divider />

DefaultStory.storyName = "Default";

export default {
    title: "Components/Divider",
    component: DefaultStory
}