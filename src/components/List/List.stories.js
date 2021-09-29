import List from "./index";
import ListItem from "./ListItem";
import { Fragment } from "react";
import { FiAirplay } from "react-icons/fi";

export default {
  component: List,
  title: "components/List",
};

const template = (props) => <List {...props}></List>;

export const primary = template.bind({});

primary.args = {
  vGap: 12,
  textAlign: "center",
  children: (
    <Fragment>
      <ListItem>1</ListItem>
      <ListItem>2</ListItem>
      <ListItem>3</ListItem>
    </Fragment>
  ),
};

export const ButtonMenu = template.bind({});

ButtonMenu.args = {
  vGap: 8,
  textAlign: "center",
  children: (
    <Fragment>
      <ListItem icon={<FiAirplay />}>Hello</ListItem>
      <ListItem icon={<FiAirplay />}>Welcome</ListItem>
      <ListItem icon={<FiAirplay />}>Hey there</ListItem>
    </Fragment>
  ),
};
