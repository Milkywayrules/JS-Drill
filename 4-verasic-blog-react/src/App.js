import TopNavbar from './components/TopNavbar';
// import Homepage from './components/Homepage';
import HomeHero from './components/HomeHero';

function App() {
  return (
    <div className="bg-gray-50 text-gray-900">
      <TopNavbar />

      <main>
        <HomeHero />
        {/* <Homepage /> */}
      </main>
    </div>
  );
}

export default App;
