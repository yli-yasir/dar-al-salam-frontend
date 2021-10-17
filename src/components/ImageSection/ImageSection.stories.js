import ImageSection from "./index";

export default {
  component: ImageSection,
  title: "Components/ImageSection",
};

const Template = (args) => <ImageSection {...args} />;

export const component = Template.bind({});

component.args = {
  direction: "left",
  imgSrc:
    "https://www.henryford.com/-/media/images/modules/news/2018/new-entrance-allegiance.jpg?h=521&la=en&w=907&hash=68C8C72B01B5761AE5C36470C134E5FA",
  title: "A very cool title",
  text: `Lorem ipsum cool title amet Lorem ipsum cool title amet 
  Lorem ipsum cool title amet Lorem ipsum cool title amet 
  Lorem ipsum cool title amet Lorem ipsum cool title amet 
  Lorem ipsum cool title amet Lorem ipsum cool title amet 
  Lorem ipsum cool title amet Lorem ipsum cool title amet 
  Lorem ipsum cool title amet Lorem ipsum cool title amet 
  Lorem ipsum cool title amet Lorem ipsum cool title amet 
  `,
};
