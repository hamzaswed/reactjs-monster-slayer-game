import Card from "./components/Card";
import Headler from "./components/Header";
import Member from "./components/Member";

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
      </main>
    </>
  );
}

export default App;
