import styles from './app.module.css';
import List from './components/section/list';
import { HashRouter, Route, Switch, useHistory } from 'react-router-dom';
import FestivalDetail from './components/section/festival_detail/festival_detail';
import Login from './components/header/login';
import Mypage from './components/section/mypage/mypage';
import Main from './components/sunkist/main/main'



function App({holidays, festivals, authService, festivalRepository}) {

  const history = useHistory()
  const favoradd = (festival, uid) => {
    if(!uid){
      history.push('/login')
    }
    festivalRepository.saveFestival(festival, uid)
      .then(useConfirm)
  }

  const favorRemove = (festival, uid) => {
    if(window.confirm('정말로 삭제하시겠습니까?')){
      festivalRepository.removeFestival(festival, uid)
    }
    else{
      return
    }
  }

  const useConfirm = () => {
    if(window.confirm('찜 목록에서 확인하시겠습니까?')){
      history.push('/mypage')
    }
    else return
  }


  return (
  
    <div className={styles.app}>
      <HashRouter forceRefresh={true}>
          <Switch>
            <Route path={['/list', '/']} exact>
              <List holidays={holidays} festivals={festivals} authService={authService} favoradd={favoradd}/>
            </Route>
            <Route path='/main'>
              <Main />
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
