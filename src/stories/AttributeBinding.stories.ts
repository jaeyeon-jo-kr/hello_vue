import AttributeBinding from "./AttributeBinding.vue";
import type { Meta, StoryFn } from '@storybook/vue3';
import { userEvent, within } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

export default {
    title: 'AttributeBinding',
    component: AttributeBinding
} as Meta<typeof AttributeBinding>;

const Template:StoryFn<typeof AttributeBinding> = 
(args :any) => ({
    components: {AttributeBinding},
    setup() {
        return {args};
    },
    template:'<AttributeBinding/>'
})

export const Hover = Template.bind({}) 

Hover.play = async ({canvasElement}) => {
    const canvas = within(canvasElement);
    const toggleRed = await canvas.findByRole('toggleRed')
    await userEvent.click(toggleRed)

    expect(toggleRed.className !== "red")

    const toggleGreen = await canvas.findByRole('toggleGreen')
    await userEvent.click(toggleGreen)

    expect(toggleRed.className !== "blue")
}
