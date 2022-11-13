import { userEvent, within } from '@storybook/testing-library';

import { expect } from '@storybook/jest';

import Page1 from "../views/Page1.vue";
import Page2 from "../views/Page2.vue";
import router from "../router/index";

import type { Meta, StoryFn } from '@storybook/vue3';

import vueRouter from 'storybook-vue3-router'

export default {
    title: 'TestPage1',
    component: Page1
} as Meta<typeof Page1>;

const Template: StoryFn<typeof Page1> = (args) => (
    {
        components : {Page1, Page2},
        setup() {
            return args;
        },
        template: '<Page1/>'
    }
)

export const BeforePage1 = Template.bind({}) 

export const AfterPage1 = Template.bind({});
AfterPage1.decorators = [
    vueRouter(router.getRoutes())
]


AfterPage1.play = async ({canvasElement}) => {
    console.debug('canvas element : ' + canvasElement)
    const page = within(canvasElement);

    await userEvent.click(page.getByRole('button'))
    
    await expect(
        page.getByRole('button').innerText == 'Load page1'
    )
}