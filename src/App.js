
import CurrencieChart from './components/CurrencieChart';
import PieChart from './components/PieChart';
import TopPopularCountries from './components/TopPopularCountries';


function App() {
  return (
    <div className="container">
      <div className='row'>
        <h1 className='title'>My dashboard data test</h1>
      </div>
     
       <div className='row d-flex gap-3'>
          <div className='col-md-8'>
             <CurrencieChart/>
          </div>
          <div className='col-md-4'>
          <PieChart />
          </div>
       </div>
       <div className='row'>
          <div className='col-md-12'>
          <TopPopularCountries/>
          </div>

       </div>
    </div>
  );
}

export default App;
