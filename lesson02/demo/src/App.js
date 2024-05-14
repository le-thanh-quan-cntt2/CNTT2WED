// import logo from './logo.svg';
import './App.css';
import Class_LeThanhQuan from './components/Class_LeThanhQuan';
import Func_JSX_LeThanhQuan from './components/Func_JSX_LeThanhQuan';

function App() {
  return (
    <section className="App">
        <h1>Demo JSX</h1>
        {/* function component demo */}
        <Func_JSX_LeThanhQuan/>
        <Func_JSX_LeThanhQuan fullname="Le Thanh Quan" age="20"/>

        <Class_LeThanhQuan/>
        <hr/>
        <Class_LeThanhQuan info="Hoc reactjs" time="11"/>
    </section>
  );
}

export default App;
