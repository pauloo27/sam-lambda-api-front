import { BrowserRouter } from 'react-router-dom';
import { StyledLink } from '../components/StyledLink';
import '../index.css';

export default {
  title: "Components/StyledLink",
  component: StyledLink,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

export const Default = {
  args: {
    children: "Default",
  },
};

export const Underline = {
  args: {
    children: "Underline",
    underline: true,
  },
}
