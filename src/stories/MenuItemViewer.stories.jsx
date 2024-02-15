import { BrowserRouter } from 'react-router-dom';
import { MenuItemViewer } from '../components/MenuItemViewer';
import '../index.css';

export default {
  title: "Components/MenuItemViewer",
  component: MenuItemViewer,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
  args: {
    item: {
      id: 1,
      name: "Pizza",
      price: "11.99",
      ingredients: [
        {
          ingredient: {
            name: 'Tomato',
          },
        }
      ],
    },
  },
};

export const Default = {
  args: {
    children: "Default",
  },
};
