import LanguageSelect from "./index";

export default {
  component: LanguageSelect,
  title: "components/LanguageSelect",
};

const template = (args) => <LanguageSelect {...args} />;

export const Primary = template.bind({});
