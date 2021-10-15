import DoctorCard from "./index";
import { FiHeart, FiEye, FiHome } from "react-icons/fi";

export default {
  component: DoctorCard,
  title: "components/DoctorCard",
};

export const Main = (props) => <DoctorCard {...props} />;

Main.args = {
  doctorName: "Shamam Yousif",
  profilePicture: "https://wallpaperaccess.com/full/1892582.jpg",
  $elevation: 10,
  menuItems: [
    { icon: FiHome, label: "Home", src: "#hi" },
    { icon: FiEye, label: "Dr. Ali", src: "#" },
    { icon: FiEye, label: "Dr. Shamam", src: "#" },
    { icon: FiHeart, label: "About", src: "#" },
  ],
};
