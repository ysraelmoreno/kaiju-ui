import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Button from "@kaiju-ui/button/src";
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Alpha/Button",
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
    variant: {
      description: "Defines the variant of the button",
      options: ["primary", "secondary", "alternative", "ghost"],
      control: {
        type: "select",
      },
    },
  },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args} />
);

Template.args = {
  children: "Teste",
};
