import styles from './app.module.css';
import List from './components/section/list';
import { HashRouter, Route, Switch, useHistory } from 'react-router-dom';
import FestivalDetail from './components/section/festival_detail/festival_detail';
import Login from './components/header/login';
import Mypage from './components/section/mypage/mypage';



function App({holidays, festivals, authService, festivalRepository}) {

  const history = useHistory()
  console.log(history)
  const favoradd = (festival, uid) => {
    if(!uid){
      alert('로그인 후 이용해주세요')
      history.push('/login')
    }
    festivalRepository.saveFestival(festival, uid)
    alert('성공적으로 추가되었습니다.')
  }

  const favorRemove = (festival, uid) => {
    
  }
  return (
  
    <div className={styles.app}>
      <HashRouter forceRefresh={true}>
          <Switch>
            <Route path={['/list', '/']} exact>
              <List holidays={holidays} festivals={festivals} authService={authService} favoradd={favoradd}/>
            </Route>
            <Route path='/main'>

            </Route>
            <Route path='/details'>
              <FestivalDetail festivals={festivals} favoradd={favoradd}/>
            </Route>
            <Route path='/mypage'>
              <Mypage authService={authService} festivalRepository={festivalRepository} favorRemove={favorRemove}/>
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
