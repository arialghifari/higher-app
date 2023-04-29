import { Hidden } from "@mui/material";
import Desktop from "./components/Desktop";
import MobileLogin from "./components/MobileLogin";

export default function App() {
  return (
    <>
      <Hidden mdDown>
        <Desktop />
      </Hidden>

      <Hidden mdUp>
        <MobileLogin />
      </Hidden>
    </>
  );
}
