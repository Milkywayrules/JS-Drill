import NavHeader from "./components/NavHeader";
import HomeHero from "./components/HomeHero";

function App() {

	return (
		<div className="font-text h-screen bg-sky-900">
			<NavHeader />
			<main className="main">
				<HomeHero />
			</main>
		</div>
	);
}

export default App;
