import Nav from "./index";

export default {
  component: Nav,
  title: "Components/Nav",
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <Nav {...args} />;

//👇 Each story then reuses that template
// Template.bind({}) creates a copy of the function
// (In our case the component) and returns it
export const Primary = Template.bind({});
