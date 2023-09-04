import "./App.css";
import TwitterFollowCard from "./TwitterFollowCard";

const _users = [
  {
    username: "lobomode",
    name: "Nahuel Cabrera",
    following: true,
  },
  {
    username: "deepuniversalok",
    name: "Deep Universal",
    following: false,
  },
  {
    username: "entermake",
    name: "Entermake",
    following: true,
  },
  {
    username: "jetcket",
    name: "Jetcket",
    following: false,
  },
  {
    username: "nowket",
    name: "Nowket",
    following: false,
  },
  {
    username: "conartic",
    name: "Conartic",
    following: true,
  },
];

function App() {
  return (
    <section className="App">
      {_users.map((user, idx) => (
        <TwitterFollowCard
          name={user.name}
          username={user.username}
          initialIsFollowing={user.following}
          key={idx}
        ></TwitterFollowCard>
      ))}
    </section>
  );
}

export default App;
