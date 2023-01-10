import { userEvent, within } from '@storybook/testing-library';

import { expect } from '@storybook/jest';
import CondAndLoop from "./CondAndLoop.vue"
import type { StoryFn } from '@storybook/vue3';

export default {
    title:"Condition and Loop",
    component: CondAndLoop
}

const Template: StoryFn<typeof CondAndLoop> = (args) => (
    {
        components : {CondAndLoop},
        setup() {
            return args;
        },
        template: '<CondAndLoop/>'
    }
)

export const push = Template.bind({});

push.play = async ({canvasElement}) => {
    console.debug('canvas element : ' + canvasElement)
    const page = within(canvasElement);
    const toggleList = await page.findByText('Toggle List')

    await userEvent.click(toggleList)

    await page.findByText('List is not empty, but hidden.')

    await userEvent.click(toggleList)

    await page.findByText('1')
    await page.findByText('2')
    await page.findByText('3')

    const pushNumber = await page.findByText('Push Number')
    
    await userEvent.click(pushNumber)

    await page.findByText('1')
    await page.findByText('2')
    await page.findByText('3')
    await page.findByText('4')

    const popNumber = await page.findByText('Pop Number')
    await userEvent.click(popNumber)

    await page.findByText('1')
    await page.findByText('2')
    const third = await page.findByText('3')
    expect(third.nextElementSibling === null)    
}