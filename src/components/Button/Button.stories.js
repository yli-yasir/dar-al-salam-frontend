import Button from "./index";
import { FiAirplay } from "react-icons/fi";

export default {
  component: Button,
  title: "components/Button",
};

const template = (props) => <Button {...props}></Button>;

export const Primary = template.bind({});

Primary.args = {
  children: (
    <>
      <FiAirplay /> Hello
    </>
  ),
};

export const LinkButton = template.bind({});

LinkButton.args = {
  link: true,
  to: "https://www.google.com",
  children: (
    <>
      <FiAirplay /> Go Back
    </>
  ),
};
