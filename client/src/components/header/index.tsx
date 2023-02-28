import { UsethemeStore } from "../../store";
import { HeaderApp, HeaderSwitchTheme, TextHeader } from "./style";

export const Header = () => {
  const { setTheme } = UsethemeStore();

  return (
    <HeaderApp>
      <TextHeader>todo</TextHeader>
      <HeaderSwitchTheme type="button" onClick={setTheme} />
    </HeaderApp>
  );
};
