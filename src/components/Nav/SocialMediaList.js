import { FiFacebook, FiInstagram, FiMail } from "react-icons/fi";
import IconButton from "../IconButton";
import List from "../List";
import ListItem from "../List/ListItem";

const socialMediaLinks = [
  { icon: FiFacebook, src: "#" },
  { icon: FiInstagram, src: "#" },
  { icon: FiMail, src: "#" },
];

export default function SocialMediaList() {
  return (
    <List>
      {socialMediaLinks.map(({ icon }) => (
        <ListItem startPadding={16}>
          <IconButton icon={icon} />
        </ListItem>
      ))}
    </List>
  );
}
