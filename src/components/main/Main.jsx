import { data } from "../../helpers/data.js";
import Card from "./Card.jsx";
import "./main.scss"

const Main = () => {
  return (
    <div className="mainContainer">
      {data.map((item) => {
        return <Card {...item} key={item.id} />;
      })}
    </div>
  );
};

export default Main;
