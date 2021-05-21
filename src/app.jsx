import styles from './app.module.css';
import List from './components/section/list';
import { HashRouter, Route, Switch } from 'react-router-dom';
import FestivalDetail from './components/section/festival_detail/festival_detail';
import Login from './components/header/login';
import Mypage from './components/section/mypage/mypage';



function App({holidays, festivals, authService}) {

  return (
  
    <div className={styles.app}>
      <HashRouter forceRefresh={true}>
          <Switch>
            <Route path={['/list', '/']} exact>
              <List holidays={holidays} festivals={festivals} authService={authService}/>
            </Route>
            <Route path='/main'>

            </Route>
            <Route path='/details'>
              <FestivalDetail festivals={festivals}/>
            </Route>
            <Route path='/mypage'>
              <Mypage />
            </Route>
            <Route path='/login'>
              <Login authService={authService} />
            </Route>
          </Switch>
      </HashRouter>
    </div>

  );
}

export default App;
