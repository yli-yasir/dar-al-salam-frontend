import List from "../List";
import ListItem from "../List/ListItem";
import Button from "../Button";

export default function Menu({ menuItems }) {
  return (
    <List vGap={2}>
      {menuItems.map(({ icon: Icon, label, src }) => (
        <ListItem contentWidth="100%" key={src}>
          <Button $fullWidth justifyContent="start" link to={src}>
            <Icon /> {label}
          </Button>
        </ListItem>
      ))}
    </List>
  );
}
