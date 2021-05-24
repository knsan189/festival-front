import {firebaseDatabase} from './firebase'

class FestivalRepository {
    syncFestival(userId, onUpdate){
        const ref = firebaseDatabase.ref(`${userId}/FestivalInfo`).ref
        ref.on('value', snapshot => {
            const value = snapshot.val()
            value && onUpdate(value)
        })
        return () => ref.off()
    }
    async saveFestival(festival, userId){
        try {
            const response = await firebaseDatabase
            .ref(`${userId}/FestivalInfo/${festival.contentid}`)
            .set(festival)

            return response
        }
        catch(e){
            console.log(e)
        }
        finally{
            alert('성공적으로 추가되었습니다.')
        }
        
    }
    removeFestival(festival, userId){
        firebaseDatabase.ref(`${userId}/FestivalInfo/${festival.contentid}`).remove()
    }
}

export default FestivalRepository