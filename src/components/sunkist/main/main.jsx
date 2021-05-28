import React, { useEffect, useState } from 'react';
import Festival from '../data/festival';
import Itemdata from '../itemdata.json';
import SeasonBlock from '../seasonBlock/seasonBlock';
import AreaBlock from '../areaBlock/areaBlock';
import Header from '../../header/header';
import Footer from '../../footer/footer';
import styles from './main.module.css'


const Main = ({authService}) => {
    
    const festival = new Festival();
    const [addShow, setAddShow] = useState(0);
    const addShowDown = () => setAddShow(addShow === 0 ? addShow + 1 : addShow - 1)

    useEffect(() => {
        sessionStorage.clear()
    })

    // 로그인 상태 확인
    const [userId, setUserId] = useState()

    useEffect(() => {

        authService.onAuthChange(user => setUserId(user))
        return () => {
            setUserId(null)
        };

    }, [authService])
    //

    return (
        <>
            <Header userId={userId} authService={authService}/>
                <section className={styles.container}>
                    <SeasonBlock 
                    Itemdata={Itemdata} 
                    festival={festival}
                    />

                    <AreaBlock 
                    Itemdata={Itemdata}
                    addShow={addShow}
                    addShowDown={addShowDown}
                    festival={festival} 
                    />
                </section>     
            <Footer />   
        </>
    );
};

export default Main;