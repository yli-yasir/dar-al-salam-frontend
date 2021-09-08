import AppBar from "./index";

export default {
  component: AppBar,
  title: "Components/AppBar",
  argTypes: { onMenuButtonClick: { action: "clicked" } },
};

const Template = (args) => <AppBar {...args} />;

export const Primary = Template.bind({});
