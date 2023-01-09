import OneMember from "../components/OneMember.vue"

import type { Meta, StoryFn } from '@storybook/vue3';

export default {
    title: 'TestOneMember',
    component: OneMember,
} as Meta<typeof OneMember>;

const Template: StoryFn<typeof OneMember> = (args) => (
    {
        components : {OneMember},
        setup() {
            return args;
        },
        template: '<OneMember/>'
    }
)

export const PlayMember = Template.bind({})