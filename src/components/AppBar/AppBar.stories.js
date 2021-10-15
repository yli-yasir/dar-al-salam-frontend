import AppBar from "./index";

export default {
  component: AppBar,
  title: "Components/AppBar",
};

const Template = (args) => <AppBar {...args} />;

export const Main = Template.bind({});

Main.args = {
  title: "Dar Al-Salam",
  shown: true,
  $elevation: 4,
};
