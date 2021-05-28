import styles from './app.module.css';
import List from './components/section/list';
import { HashRouter, Route, Switch } from 'react-router-dom';
import FestivalDetail from './components/section/festival_detail/festival_detail';
import Login from './components/header/login';
import Mypage from './components/section/mypage/mypage';
import Main from './components/sunkist/main/main'
import Search from './components/section/search/search';



function App({holidays, festivals, authService, festivalRepository}) {

  const favorRemove = (festival, uid) => {
    if(window.confirm('정말로 삭제하시겠습니까?')){
      festivalRepository.removeFestival(festival, uid)
    }
    else{
      return
    }
  }

  return (
  
    <div className={styles.app}>
      <HashRouter forceRefresh={true}>
          <Switch>
            <Route path='/list'>
              <List holidays={holidays} festivals={festivals} authService={authService} festivalRepository={festivalRepository}/>
            </Route>
            <Route path={['/', '/main']} exact>
              <Main authService={authService}/>
            </Route>
            <Route path='/details'>
              <FestivalDetail festivals={festivals} festivalRepository={festivalRepository} authService={authService}/>
            </Route>
            <Route path='/mypage'>
              <Mypage authService={authService} festivalRepository={festivalRepository} favorRemove={favorRemove}/>
            </Route>
            <Route path='/login'>
              <Login authService={authService} />
            </Route>
            <Route path='/searchlist'>
              <Search festivals={festivals} authService={authService}/>
            </Route>
          </Switch>
      </HashRouter>
    </div>

  );
}

export default App;
