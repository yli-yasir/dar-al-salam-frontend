import ListItem from "../List/ListItem";
import Button from "../Button";

export default function MenuItem({ icon: Icon, label, src }) {
  return (
    <ListItem contentWidth="100%" key={label}>
      <Button $fullWidth justifyContent="start" link to={src}>
        <Icon /> {label}
      </Button>
    </ListItem>
  );
}
