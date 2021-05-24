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
    
       const stopAuth = () => authService.onAuthChange(user => {
          if(!user) {
            history.push('/login')
          }
          else{
            setUserId(user.uid)
          }
        })
        stopAuth()
        return () => {stopAuth()}
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
                    <h1>내가 찜해놓은 축제들 보기</h1>
                    <ul className={styles.list}>
                        {festivals && Object.keys(festivals).map(key => <MypageItem festivalInfo={festivals[key]} key={key} userId={userId} favorRemove={favorRemove}/>)}
                    </ul>
                </div>
            <Footer />
        </>
    );
}
export default Mypage;