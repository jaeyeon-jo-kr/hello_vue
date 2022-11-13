import { userEvent, within } from '@storybook/testing-library';

import { expect } from '@storybook/jest';

import Page1 from "../views/Page1.vue";
import router from "../router/index";

import type { Meta, StoryFn } from '@storybook/vue3';

import vueRouter from 'storybook-vue3-router'

export default {
    title: 'TestPage1',
    component: Page1
} as Meta<typeof Page1>;

const Template: StoryFn<typeof Page1> = (args) => (
    {
        components : {Page1},
        setup() {
            return args;
        },
        template: '<div><p>hello</p><Page1/></div>'
    }
)

export const SamplePage1 = Template.bind({});
SamplePage1.decorators = [
    vueRouter(router.getRoutes())
]


SamplePage1.play = async ({pageElement}) => {
    console.debug('page element : ' + pageElement)
    const page = within(pageElement);

    await userEvent.click(page.getByRole('button'))

    await expect(
        page.getByRole('button').innerText == 'Load page1'
    )
}