import styles from './app.module.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import List from './components/section/list';
import { HashRouter, Route, Switch } from 'react-router-dom';
import FestivalDetail from './components/section/festival_detail/festival_detail';



function App({holidays, festivals}) {

  return (
  
    <div className={styles.app}>
      <HashRouter forceRefresh={true}>
        <Header />
          <Switch>
            <Route path={['/list', '/']} exact>
              <List holidays={holidays} festivals={festivals}/>
            </Route>

            <Route path='/details'>
              <FestivalDetail festivals={festivals}/>
            </Route>
          </Switch>

        <Footer />
      </HashRouter>
    </div>

  );
}

export default App;
