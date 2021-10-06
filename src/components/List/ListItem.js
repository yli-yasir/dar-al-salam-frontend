import ListItemContents from "../CenteringBlock";

export default function ListItem(props) {
  const { children, ...rootProps } = props;
  return (
    <li {...rootProps}>
      <ListItemContents>{children}</ListItemContents>
    </li>
  );
}
