import { PencilSimpleLine } from "phosphor-react";
import { UsethemeStore } from "../../store";

export const EditTaskIcon = () => {
  const { theme } = UsethemeStore();
  return <PencilSimpleLine weight={"light"} width={23} height={23} color={theme.colors.active} />;
};
