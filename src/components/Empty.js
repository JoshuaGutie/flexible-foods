import "./css/search.css";
import { useSpring, animated as a } from "react-spring";


function Empty() {
    const styles = useSpring({
        to:   { opacity: 1, x:0, y:0},
        from: { opacity: 0, x:0, y:1000},
      })



  return (
    <a.div style={styles} className="emptyContainer">
      <a.div className="empties">
        <div className="emptyImg"/>
        <div className="emptyTitle"/>
        <div className="emptyDesc"/>
        <div className="emptyDesc"/>
        <div className="emptyDesc"/>
      </a.div>

      <div className="empties">
        <div className="emptyImg"/>
        <div className="emptyTitle"/>
        <div className="emptyDesc"/>
        <div className="emptyDesc"/>
        <div className="emptyDesc"/>
      </div>

      <div className="empties">
        <div className="emptyImg"/>
        <div className="emptyTitle"/>
        <div className="emptyDesc"/>
        <div className="emptyDesc"/>
        <div className="emptyDesc"/>
      </div>
    </a.div>
  );
}

export default Empty;
