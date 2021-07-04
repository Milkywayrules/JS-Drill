import NavHeader from './components/NavHeader';
import Homepage from './components/Homepage';

function App() {
  return (
    <div className="font-text h-screen bg-sky-800">
      <NavHeader />
      <main>
        <Homepage />
      </main>
    </div>
  );
}

export default App;
