import Navbar from "./index";

export default {
  component: Navbar,
  title: "Components/Navbar",
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <Navbar {...args} />;

//👇 Each story then reuses that template
// Template.bind({}) creates a copy of the function
// (In our case the component) and returns it
export const Primary = Template.bind({});

//These are the props thata we will pass
Primary.args = {
  primary: true,
};

// Create another copy
export const Secondary = Template.bind({});

Secondary.args = {
  primary: false,
};
