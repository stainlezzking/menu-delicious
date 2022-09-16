import Dwk from './components/DWK/dwk';
import Header from './components/header/header';
import Subtitle from './components/title/title';

function App() {
  return (
    <div className="App">
        <div className="restraint">
           <Header />
           <div style={{
             marginTop : '40px'
           }}>
             <Subtitle> Best Seller</Subtitle>
           </div>
        </div>
    </div>
  );
}

export default App;
