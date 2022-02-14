import Card from "./index";

export default {
  component: Card,
  title: "components/Card",
};

const template = (args) => <Card {...args}></Card>;

export const Main = template.bind({});

Main.args = {
  splashColor: "orange",
};
