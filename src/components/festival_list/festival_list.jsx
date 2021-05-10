import styles from './festival_list.module.css'
import FestivalItem from '../festival_item/festival_item';

const FestivalList = ({date, festivalInfo, today}) => {

            const {items} = festivalInfo

            return (
            <div className={styles.festivalList}>
                <div className={styles.bar}>
                    <h1>#축제</h1>
                    { 
                        date && <p> 선택하신 날짜 <span> {date.format('YYYY년 MM월 DD일')}</span> </p>
                    }
                </div>
                <div className={styles.total}>총 <span>{festivalInfo.totalCount}</span>건</div>
                <ul className={styles.festivals}>
                    { 
                        items && items.item.map((festivalInfo) => festivalInfo.eventstartdate < today.format('YYYYMMDD') && <FestivalItem festivalInfo={festivalInfo} key={festivalInfo.contentid}/>)
                    }
                </ul>
                <div>
                    {console.log(console.log(festivalInfo.numOfRows, festivalInfo.totalCount))}
                    {
                        (() => {
                            for(let i = 0; festivalInfo.numOfRows * i < festivalInfo.totalCount; i++){
                                return <p>{i}</p>
                            }
                        })()
                    }
                </div>
            </div> 
            )
    }
    
export default FestivalList;