import MedicalLine from "../MedicalLine";
import {
  FiEye,
  FiFacebook,
  FiHome,
  FiMail,
  FiPhone,
  FiInstagram,
} from "react-icons/fi";
import List from "../List";
import ListItem from "../ListItem";
import Logo from "../Logo";
import SideBar from "./index";

export default {
  component: SideBar,
  title: "Components/SideBar",
  argTypes: { onClickAway: { action: "clicked" } },
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <SideBar {...args} />;

//👇 Each story then reuses that template
// Template.bind({}) creates a copy of the function
// (In our case the component) and returns it
export const Main = Template.bind({});

//These are the props thata we will pass
Main.args = {
  open: true,
  header: (
    <>
      <Logo /> &nbsp;Dar Al-Salam
    </>
  ),
  children: (
    <List textAlign="left">
      <ListItem icon={<FiHome />}>Home</ListItem>
      <ListItem icon={<FiEye />}>Dr. Ali</ListItem>
      <ListItem icon={<FiEye />}>Dr. Shamam</ListItem>
      <ListItem icon={<FiPhone />}>Contact Us</ListItem>
      <MedicalLine width="80%" />
      <ListItem icon={<FiFacebook />} />
      <ListItem icon={<FiInstagram />} />
      <ListItem icon={<FiMail />} />
    </List>
  ),
};
