import "./App.css";
import TwitterFollowCard from "./TwitterFollowCard";

function App() {
  return (
    <section className="App">
      <TwitterFollowCard
        username="lobomode"
        name="Nahuel Cabrera"
        isFollowing
      ></TwitterFollowCard>
      <TwitterFollowCard
        username="deepuniversalok"
        name="Deep Universal"
        isFollowing={true}
      ></TwitterFollowCard>
      <TwitterFollowCard
        username="entermake"
        name="Entermake"
        isFollowing={false}
      ></TwitterFollowCard>
      <TwitterFollowCard
        username="jetcket"
        name="Jetcket"
        isFollowing={false}
      ></TwitterFollowCard>
      <TwitterFollowCard
        username="nowket"
        name="Nowket"
        isFollowing={false}
      ></TwitterFollowCard>
      <TwitterFollowCard
        username="conartic"
        name="Conartic"
        isFollowing={false}
      ></TwitterFollowCard>
    </section>
  );
}

export default App;
