import List from "./index";
import { Fragment } from "react";
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
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </Fragment>
  ),
};
