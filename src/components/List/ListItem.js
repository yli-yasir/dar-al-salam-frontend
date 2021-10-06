import ListItemContents from "../CenteringBlock";

export default function ListItem(props) {
  const { children, contentWidth, ...rootProps } = props;
  return (
    <li {...rootProps}>
      <ListItemContents width={contentWidth}>{children}</ListItemContents>
    </li>
  );
}
