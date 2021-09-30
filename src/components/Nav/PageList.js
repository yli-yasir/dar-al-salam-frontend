import { FiEye, FiHeart, FiHome } from "react-icons/fi";
import List from "../List";
import ListItem from "../List/ListItem";

const navLinks = [
  { Icon: FiHome, label: "Home", src: "#" },
  { Icon: FiEye, label: "Dr. Ali", src: "#" },
  { Icon: FiEye, label: "Dr. Shamam", src: "#" },
  { Icon: FiHeart, label: "About", src: "#" },
];

export default function PageList() {
  return (
    <List>
      {navLinks.map(({ Icon, label }) => (
        <ListItem
          key={label}
          icon={<Icon size={20} />}
          startPadding={24}
          button
        >
          {label}
        </ListItem>
      ))}
    </List>
  );
}
