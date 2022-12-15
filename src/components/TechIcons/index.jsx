// libs
import classNames from "classnames";
// icons
import { ReactComponent as ReactIcon } from "./react.svg";
import { ReactComponent as JSIcon } from "./js.svg";
import { ReactComponent as HTMLIcon } from "./html5.svg";
import { ReactComponent as CSSIcon } from "./css3.svg";
// others
import "./styles.scss";

const icons = [
  {
    key: "react",
    icon: ReactIcon
  },
  {
    key: "js",
    icon: JSIcon
  },
  {
    key: "html5",
    icon: HTMLIcon
  },
  {
    key: "css3",
    icon: CSSIcon
  }
];

const TechIcons = () => (
  <div className="tech-icons-wrapper">
    {icons.map(({ key, icon: Icon }) => (
      <Icon key={key} className={classNames("icon", key)} />
    ))}
  </div>
);

export default TechIcons;
