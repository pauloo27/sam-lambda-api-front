import { Button } from "../components/Button";
import '../index.css';

export default {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  args: {
    color: "primary",
    disabled: false,
  },
  argTypes: {
    color: {
      control: "select",
      options: ["primary", "secondary", "danger"],
    },
  },
};

export const Primary = {
  args: {
    color: "primary",
    children: "Primary",
  },
};

export const Secondary = {
  args: {
    color: "secondary",
    children: "Secondary",
  },
};

export const Danger = {
  args: {
    color: "danger",
    children: "Danger",
  },
};
