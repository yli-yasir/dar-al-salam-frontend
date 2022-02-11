import Button from "./index";
import { FiAirplay } from "react-icons/fi";
import { Link } from "react-router-dom";

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
  as: Link,
  $height: "100px",
  children: (
    <>
      <FiAirplay /> Go Back
    </>
  ),
};
