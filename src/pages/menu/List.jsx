import { Link } from "react-router-dom";
import { Button } from "../../components/Button";

export function ListMenu() {
  return (
    <div>
      <h1>Menu</h1>
      <Link to="/menu-create">
        <Button>Create new menu item</Button>
      </Link>
    </div>
  );
}
