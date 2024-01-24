import "./Home.css";

const Home = () => {
  return (
    <div className="max-w-screen-lg mx-auto flex mt-20">
      <div className="side-bar">
        <input
          className="search-box px-4 py-2 rounded-xl"
          type="search"
          name="search"
          placeholder="Search"
        />
      </div>
      <div>houses</div>
    </div>
  );
};

export default Home;
