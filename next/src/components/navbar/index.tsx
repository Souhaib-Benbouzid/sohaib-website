import { Box } from "@mui/system";
import { DesktopNavbar } from "./desktop-navbar";
import { DesktopNavbarProps } from "./desktop-navbar";
import { FC } from "react";
import { MobileNavbar } from "./mobile-navbar";
import { MobileNavbarProps } from "./mobile-navbar";

interface Props {
  desktopNavbarData: DesktopNavbarProps;
  mobileNavbarData: MobileNavbarProps;
}

const NavBar: FC<Props> = ({ desktopNavbarData, mobileNavbarData }) => {
  return (
    <>
      <DesktopNavbar {...desktopNavbarData} />
      <MobileNavbar {...mobileNavbarData} />
      <Box sx={{ pt: "56px" }} />
    </>
  );
};

export default NavBar;