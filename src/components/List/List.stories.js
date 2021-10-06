import List from "./index";
import ListItem from "./ListItem";
import { Fragment } from "react";
import Button from "../Button";
import { FiAirplay } from "react-icons/fi";
import { Link } from "react-router-dom";

export default {
  component: List,
  title: "components/List",
};

const template = (props) => <List {...props}></List>;

export const Presentational = template.bind({});

Presentational.args = {
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

export const Menu = template.bind({});

Menu.args = {
  vGap: 8,
  textAlign: "center",
  children: (
    <Fragment>
      <ListItem>
        <Button>Button</Button>
      </ListItem>
      <ListItem>
        <Button link to="hello.com">
          Link Button
        </Button>
      </ListItem>
      <ListItem>Presentational</ListItem>
    </Fragment>
  ),
};
