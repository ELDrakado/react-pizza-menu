import './App.css';
import Menu from './components/menu/menu.component';
import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';

function App() {
  return (
    <div className='container'>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

export default App;
