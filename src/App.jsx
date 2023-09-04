import "./App.css";
import TwitterFollowCard from "./TwitterFollowCard";

function App() {
  return (
    <section className="App">
      <TwitterFollowCard
        username="lobomode"
        name="Nahuel Cabrera"
        initialIsFollowing
      ></TwitterFollowCard>
      <TwitterFollowCard
        username="deepuniversalok"
        name="Deep Universal"
        initialIsFollowing={true}
      ></TwitterFollowCard>
      <TwitterFollowCard
        username="entermake"
        name="Entermake"
        initialIsFollowing={false}
      ></TwitterFollowCard>
      <TwitterFollowCard
        username="jetcket"
        name="Jetcket"
        initialIsFollowing={false}
      ></TwitterFollowCard>
      <TwitterFollowCard
        username="nowket"
        name="Nowket"
        initialIsFollowing={false}
      ></TwitterFollowCard>
      <TwitterFollowCard
        username="conartic"
        name="Conartic"
        initialIsFollowing={false}
      ></TwitterFollowCard>
    </section>
  );
}

export default App;
