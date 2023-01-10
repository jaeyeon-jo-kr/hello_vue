import SampleComponent from "./SampleComponent.vue";
import type { Meta, StoryFn } from "@storybook/vue3";
import { within } from "@storybook/testing-library";
import { userEvent } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

export default {
  title: "Sample Components",
  component: SampleComponent,
} as Meta<typeof SampleComponent>;

const Template: StoryFn<typeof SampleComponent> = (args: any) => ({
  components: { SampleComponent },
  setup() {
    return args;
  },
  template: "<SampleComponent/>",
});

export const InputAndChange = Template.bind({});
InputAndChange.decorators = [
  //vueRouter(router.getRoutes())
];

InputAndChange.play = async ({ canvasElement }) => {
  console.debug("canvas element : " + canvasElement);
  const component = within(canvasElement);

  const input = await component.findByRole("input");
  
  await userEvent.type(input, "hello, jaeyeon");

  const button = await component.findByRole("button")

  await userEvent.click(button)


};
