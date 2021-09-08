import SideBar from "./index";

export default {
  component: SideBar,
  title: "Components/SideBar",
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <SideBar {...args} />;

//👇 Each story then reuses that template
// Template.bind({}) creates a copy of the function
// (In our case the component) and returns it
export const Main = Template.bind({});

//These are the props thata we will pass
Main.args = {
  open: true,
};
