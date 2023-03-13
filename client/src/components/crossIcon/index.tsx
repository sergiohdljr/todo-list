import { UsethemeStore } from "../../store";
import { IcroosIcon } from "./types";
import { X } from "phosphor-react";

export const CrossIcon = () => {
  const { theme } = UsethemeStore();

  return <X width={23} height={23} color={theme.colors.active} />;
};
