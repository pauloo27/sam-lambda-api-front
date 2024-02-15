import { Input } from "../components/Input";
import '../index.css';

export default {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],
  args: {
    label: "Label",
  },
};

export const Default = {
  args: {
    label: "Label",
  },
};

export const NoLabel = {
  args: {
    label: undefined,
  },
};
