// components
import { ReactComponent as WorkingSVG } from "./working-table.svg";
import TechIcons from "../TechIcons";
// others
import "./styles.scss";

const WorkingTableImage = () => (
  <div className="working-table-image-wrapper">
    <TechIcons />
    <WorkingSVG className="svg" />
  </div>
);

export default WorkingTableImage;
