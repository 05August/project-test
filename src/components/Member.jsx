const Member = ({ data }) => {
  return (
    <div className="member-item">
      <img src={data.src} alt="photomember" />
      <div className="name">{data.name}</div>
      <div className="year">Member since {data.year}</div>
    </div>
  );
};

export default Member;
