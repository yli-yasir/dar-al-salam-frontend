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
    "A a hac ipsum mauris vivamus in suspendisse est a augue vel scelerisque nam ultricies enim ",
  bgImgSrc: "https://wallpaperaccess.com/full/1892582.jpg",
  $elevation: 10,
  textColor: "white",
  medicalLineColor: "yellow",
};
