import { withTheme } from "styled-components";
import DoctorCard from "./index";

export default {
  component: DoctorCard,
  title: "components/DoctorCard",
};

export const Main = (props) => <DoctorCard {...props} />;

Main.args = {
  doctorName: "Shamam Yousif",
  doctorDescription:
    "A a hac ipsum mauris vivamus in suspendisse est a augue vel scelerisque nam ultricies enim consequat duis venenatis a maecenas posuere et praesent at quisque. A adipiscing nisl a faucibus ullamcorper lobortis a convallis ornare habitasse eu consectetur augue sociis parturient dui fermentum vestibulum ultricies augue vulputate lacus vulputate habitant cubilia eu. Maecenas tincidunt scelerisque pretium tristique conubia sem parturient at ac ultrices id luctus malesuada quis nisl vestibulum pretium gravida condimentum eu felis a in fringilla torquent arcu. Mus consectetur vulputate ac et eu dolor adipiscing arcu commodo elementum sit metus fringilla nibh velit suscipit adipiscing at. Tempus posuere vestibulum habitasse sodales a a in condimentum dis ac ullamcorper mi sodales turpis torquent nostra suspendisse conubia a feugiat duis eleifend rhoncus ligula aptent a mi. Tempor posuere ligula adipiscing euismod suspendisse semper adipiscing quisque ut sociosqu condimentum a curae per leo congue condimentu",
  bgImgSrc: "https://wallpaperaccess.com/full/1892582.jpg",
  $elevation: 10,
  textColor: "white",
};
