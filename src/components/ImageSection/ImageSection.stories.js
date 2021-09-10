import ImageSection from "./index";

export default {
  component: ImageSection,
  title: "Components/ImageSection",
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <ImageSection {...args} />;

//👇 Each story then reuses that template
// Template.bind({}) creates a copy of the function
// (In our case the component) and returns it
export const component = Template.bind({});

//These are the props thata we will pass
component.args = {
  size: "big",
};
