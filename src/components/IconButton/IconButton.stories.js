import IconButton from "./index";
import { FiEye } from "react-icons/fi";

export default {
  component: IconButton,
  title: "components/IconButton",
  argTypes: {
    onClick: { action: "click" },
  },
};

const template = (args) => <IconButton {...args}></IconButton>;

export const Main = template.bind({});

Main.args = {
  icon: FiEye,
  size: 50,
};
