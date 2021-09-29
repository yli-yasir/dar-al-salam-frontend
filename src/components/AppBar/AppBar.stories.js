import AppBar from "./index";

export default {
  component: AppBar,
  title: "Components/AppBar",
};

const Template = (args) => <AppBar {...args} />;

export const Main = Template.bind({});

Main.args = {
  shown: true,
  title: "Dar Al-Salam",
};
