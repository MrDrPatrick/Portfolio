import "./GameText.css";

function GameText(props) {
  const customStyle = {
    textAlign: `${props.side}`,
  };

  if (props.side == "left") {
    return (
      <div className={props.color}>
        <div className="wrapper" style={customStyle}>
          <h2>{props.title}</h2>
          <div className="content">
            <div className="text-container">
              <p>{props.body}</p>
            </div>
            <div className="image-container">{props.hasImage && <img className="text-image" src={props.imgSource} alt="" />}</div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className={props.color}>
        <div className="wrapper" style={customStyle}>
          <h2>{props.title}</h2>
          <div className="content">
            <div className="image-container">{props.hasImage && <img className="text-image" src={props.imgSource} alt="" />}</div>
            <div className="text-container">
              <p>{props.body}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default GameText;
