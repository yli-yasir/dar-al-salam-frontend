import Page from "../../components/Page";
import Button from "../../components/Button";
import List from "../../components/List";
import ListItem from "../../components/List/ListItem";
import Logo from "../../components/Logo";

const data = ["hi", "hello", "world", "how", "are", "you", "down"];

export default function Home() {
  return (
    <Page>
      <Logo $width="40%" animated />
      <List role="menu" vGap={4} $width="100%">
        {data.map((el) => (
          <ListItem key={el}>
            <Button $width="100%" $elevation={2}>
              {el}
            </Button>
          </ListItem>
        ))}
      </List>
    </Page>
  );
}
