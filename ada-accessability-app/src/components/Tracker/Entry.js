const Entry = ({ entry }) => {
  return (
    <div className="entry">
      {/* <p>{entry.rating}</p> */}
      {/* <p>{entry.title}</p> */}
      <p className="smile">&#9786;</p>
      <p>{entry.title}</p>
    </div>
  );
};

export default Entry;
