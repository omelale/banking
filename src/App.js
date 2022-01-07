import './App.css';
import {useSelector} from "react-redux";

function App() {
    const account = useSelector((state)=>{return state.account})
    console.log(account)
    return (<div className="App App-header">
        <h1>Ome</h1>
    </div>);
}

export default App;
