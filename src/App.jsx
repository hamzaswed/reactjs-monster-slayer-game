import Card from "./components/Card";
import Headler from "./components/Header";
import Member from "./components/Member";
import Button from "./components/button";

function App() {
  return (
    <>
      <Headler />
      <main className="main-content">
        <Card>
          <Member title="Monster Health" icon="👾" health={90} />
        </Card>
        <Card>
          <Member title="Your Health" icon="🦸‍♂️" health={60} />
        </Card>
        {false && (
          <section className="control">
            <header className="control__healder">
              <h3 className="control__title">
                Deal significant damage 💪 and defeat the monster ⚡
              </h3>
            </header>
            <div className="btn-group">
              <Button icon="🤜">Attack</Button>
              <Button icon="💪">Spacial Attack</Button>
              <Button icon="💉">Heal</Button>
              <Button icon="🚩">Surrender</Button>
            </div>
          </section>
        )}
        <section className="game-result">game result</section>
      </main>
    </>
  );
}

export default App;
