import FormBindings from './FormBindings.vue'

import { userEvent, within } from '@storybook/testing-library';

import { expect } from '@storybook/jest';
import type { Meta, StoryFn } from '@storybook/vue3';

export default {
    title: 'FormBindings',
    component: FormBindings
} as Meta<typeof FormBindings>;

const Template: StoryFn<typeof FormBindings> = (args) => (
    {
        components : {FormBindings},
        setup() {
            return args;
        },
        template: '<FormBindings/>'
    }
)

export const testInput = Template.bind({}) 
testInput.play = async ({canvasElement}) => {
    const page = within(canvasElement)
    const input = await page.findByDisplayValue('Edit me')
    userEvent.clear(input)
    userEvent.type(input, "abcdef")
}

export const checkBox = Template.bind({})


export const multiCheckBox = Template.bind({})

export const radio = Template.bind({})

export const select = Template.bind({})

export const multiSelect = Template.bind({})