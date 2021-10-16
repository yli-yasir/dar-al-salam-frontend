import DoctorCard from "./index";
import { FiHeart, FiEye, FiHome } from "react-icons/fi";

export default {
  component: DoctorCard,
  title: "components/DoctorCard",
};

export const Main = (props) => <DoctorCard {...props} />;

Main.args = {
  profilePicture:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Chest_X-ray_2346.jpg/665px-Chest_X-ray_2346.jpg",
  doctorName: "Shamam Yousif",
  phoneNumbers: ["05338810255", "05338819244"],
  email: "doctoremail@gmail.com",
  facebook: "facebook.com/sadas",
  moreInfo: "/dr-shamam",
};
