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
      <ListItem button icon={<FiAirplay />}>
        Hello
      </ListItem>
      <ListItem button icon={<FiAirplay />}>
        Welcome
      </ListItem>
      <ListItem button icon={<FiAirplay />}>
        Hey there
      </ListItem>
    </Fragment>
  ),
};
