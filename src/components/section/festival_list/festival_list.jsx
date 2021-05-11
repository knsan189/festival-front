import styles from './festival_list.module.css'
import FestivalItem from '../festival_item/festival_item';
import FestivalPage from './festival_page';
import FestivalArrage from './festival_arrage';

const FestivalList = ({date, festivalInfo, areaName, selectPageNo, pageNo, selectArrage, arrange}) => {

            const {items} = festivalInfo
            const pageNum = []
            for(let i = 0; festivalInfo.numOfRows * i < festivalInfo.totalCount; i++){
                pageNum.push(i)
            }
            const arrage = ['R', 'P']

            return (
            <div className={styles.festivalList}>
                <div className={styles.bar}>
                    <h1>#축제 {areaName}</h1>
                    { date && <p> 선택하신 날짜 <span> {date.format('YYYY년 MM월 DD일')}</span> </p>}
                </div>
                <div className={styles.status}>
                    <div className={styles.total}>
                        총 <span>{festivalInfo.totalCount}</span>건
                    </div>
                    <ul>
                        {arrage.map(obj => <FestivalArrage key={obj} value={obj} selectArrage={selectArrage} arrange={arrange}/>)}
                    </ul>
                    
                </div>
                <ul className={styles.festivals}>
                    { 
                        items ? items.item.map((festivalInfo) => <FestivalItem festivalInfo={festivalInfo} key={festivalInfo.contentid}/>)
                        : <p> 해당 조건에 맞는 행사가 없습니다. </p>
                    }
                </ul>


                <ul className={styles.pageNum}>
                    {pageNum.map((num, index) => <FestivalPage key={num} num={index} selectPageNo={selectPageNo} pageNo={pageNo}/>)}
                </ul>
            </div> 
            )
    }
    
export default FestivalList;