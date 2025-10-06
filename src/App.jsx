import SideBar from "./components/SideBar";
import img from './assets/no-projects.png'

function App() {
    return (
        <>
            <main className="content-center">
                <img className="h-10 w-10" src={img} alt="" />
                <p>No Project Selected</p>
                <p>Select a project or get started with new one</p>
                <button>Create new project</button>
            </main>
        </>
    );
}

export default App;
