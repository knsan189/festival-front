import React, { useState } from 'react';
import Festival from '../data/festival';
import Itemdata from '../itemdata.json';
import SeasonBlock from '../seasonBlock/seasonBlock';
import AreaBlock from '../areaBlock/areaBlock';
import Header from '../../header/header';
import Footer from '../../footer/footer';


const Main = (props) => {
    
    const festival = new Festival();

    const [addShow, setAddShow] = useState(0);

    const addShowDown = () => setAddShow(addShow === 0 ? addShow + 1 : addShow - 1)

    return (
        <>
            <Header />
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
            <Footer />        
            
        </>
    );
};

export default Main;