import { FiFacebook, FiInstagram, FiMail } from "react-icons/fi";
import IconButton from "../IconButton";
import List from "../List";
import ListItem from "../List/ListItem";

const socialMediaLinks = [
  { icon: FiFacebook, src: "#" },
  { icon: FiInstagram, src: "#1" },
  { icon: FiMail, src: "#2" },
];

export default function SocialMediaList() {
  return (
    <List>
      {socialMediaLinks.map(({ icon, src }) => (
        <ListItem key={src}>
          <IconButton icon={icon} />
        </ListItem>
      ))}
    </List>
  );
}
