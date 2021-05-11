import styles from './app.module.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import List from './components/section/list';



function App({holidays, festivals}) {

  return (
  
    <div className={styles.app}>
      <Header />
      <List holidays={holidays} festivals={festivals}/>
      <Footer />
    </div>

  );
}

export default App;
