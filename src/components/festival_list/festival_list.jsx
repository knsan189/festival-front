import styles from './festival_list.module.css'
import FestivalItem from '../festival_item/festival_item';

const FestivalList = ({date, festivalInfo}) => {

            const {items} = festivalInfo

            return (
            <>
                <h1>축제 목록</h1>
                { 
                    date && <p> 선택하신 날짜 <span> {date.format('YYYY년 MM월 DD일')}</span> </p>
                }
                <p>총 {festivalInfo.totalCount} 건</p>
                <ul className={styles.festivals}>
                    { 
                        items && items.item.map((festivalInfo) => <FestivalItem festivalInfo={festivalInfo} key={festivalInfo.contentid}/>)
                    }
                </ul>
            </> 
            )
    }
    
export default FestivalList;