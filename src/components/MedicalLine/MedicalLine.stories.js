import MedicalLine from "./index";

export default {
  component: MedicalLine,
  title: "Components/MedicalLine",
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <MedicalLine {...args} />;

//👇 Each story then reuses that template
// Template.bind({}) creates a copy of the function
// (In our case the component) and returns it
export const Main = Template.bind({});
