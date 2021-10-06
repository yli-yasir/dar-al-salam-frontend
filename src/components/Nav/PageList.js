import { FiEye, FiHeart, FiHome } from "react-icons/fi";
import List from "../List";
import ListItem from "../List/ListItem";
import Button from "../Button";
const navLinks = [
  { Icon: FiHome, label: "Home", src: "#hi" },
  { Icon: FiEye, label: "Dr. Ali", src: "#" },
  { Icon: FiEye, label: "Dr. Shamam", src: "#" },
  { Icon: FiHeart, label: "About", src: "#" },
];

export default function PageList() {
  return (
    <List>
      {navLinks.map(({ Icon, label, src }) => (
        <ListItem contentWidth="100%" key={label}>
          <Button $fullWidth justifyContent="start" link to={src}>
            <Icon /> {label}
          </Button>
        </ListItem>
      ))}
    </List>
  );
}
