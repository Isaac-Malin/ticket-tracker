import Ticket from "../Ticket/Ticket";
import team from "../../Data/team";
import "./Container.scss";

const Container = () => {

  return (
    <div className="container">
      <div className="container2">
      <p className="main-title">Ticket Tracker</p>
        <div className="container3">
        <Ticket name={team[0].name} role={team[0].role} />
        <Ticket name={team[1].name} role={team[1].role} />
        <Ticket name={team[2].name} role={team[2].role} />
        <Ticket name={team[3].name} role={team[3].role} />
        <Ticket name={team[4].name} role={team[4].role} />
        <Ticket name={team[5].name} role={team[5].role} />
        <Ticket name={team[6].name} role={team[6].role} />
        <Ticket name={team[7].name} role={team[7].role} />
        <Ticket name={team[8].name} role={team[8].role} />
        <Ticket name={team[9].name} role={team[9].role} />
        </div>
      </div>
    </div>
  );
};

export default Container;
