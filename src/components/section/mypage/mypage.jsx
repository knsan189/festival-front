import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import Footer from '../../footer/footer';
import Header from '../../header/header';
import MypageItem from './mypage_item';
import styles from './mypage.module.css'

const Mypage = ({authService, festivalRepository, favorRemove}) => {

    const history = useHistory()
    const [userId, setUserId] = useState()
    
    useEffect(() => {
        authService.onAuthChange(user => {
          if(user) {
            setUserId(user.uid)
          }
          else{
            alert('로그인 후 이용해주세요.')
            history.push('/login')
          }
        })

      })

      const [festivals, setFestivals] = useState()
    
    useEffect(()=>{
        if(!userId){
            return
        }
        const stopSync = festivalRepository.syncFestival(userId, festivals => setFestivals(festivals))
        return () => {stopSync()}
    }, [userId, festivalRepository])


    return (
        <>
            <Header userId={userId} authService={authService}/>
                <div className={styles.container}>
                    <ul className={styles.list}>
                        {festivals && Object.keys(festivals).map(key => <MypageItem festival={festivals[key]} key={key} userId={userId} favorRemove={favorRemove}/>)}
                    </ul>
                </div>
            <Footer />
        </>
    );
}
export default Mypage;