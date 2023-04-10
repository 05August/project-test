import { RightOutlined } from "@ant-design/icons";

const Popular = ({ data }) => {
  return (
    <div className="popular__container">
      <img src={data.src} alt="photopo" />
      <div className="info">
        <p>{data.decription}</p>
        <div className="button__learnmore">
          Learn More <RightOutlined />
        </div>
      </div>
    </div>
  );
};

export default Popular;
