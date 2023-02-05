import { Search2Icon } from "@chakra-ui/icons";
import HomeIcon from "components/icon/HomeIcon";
import LocationFillIcon from "components/icon/LocationFillIcon";
import MenuIcon from "components/icon/MenuIcon";
import UserIcon from "components/icon/UserIcon";

const MenuBar = [
  {
    key: "1",
    icon: MenuIcon,
    name: "دسته بندی",
    path: "#",
  },
  {
    key: "2",
    icon: UserIcon,
    name: "حساب کاربری",
    path: "#",
  },
  {
    key: "3",
    icon: Search2Icon,
    name: "جستجو",
    path: "#",
  },
  {
    key: "4",
    icon: LocationFillIcon,
    name: "انتخاب شهر",
    path: "#",
  },
  {
    key: "5",
    icon: HomeIcon,
    name: "خانه",
    path: "#",
  },
];

export default MenuBar;
