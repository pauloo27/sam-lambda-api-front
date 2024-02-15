import { Card } from "../components/Card";
import '../index.css';

export default {
  title: "Components/Card",
  component: Card,
  tags: ["autodocs"],
};

export const Default = {
  args: {
    children: "Default",
    src: "https://via.placeholder.com/380x200.png",
    alt: "Placeholder",
    label: "Label",
  },
};
