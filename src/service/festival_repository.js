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
    saveFestival(festival, userId){
        firebaseDatabase.ref(`${userId}/FestivalInfo/${festival.contentid}`).set(festival)
    }
}

export default FestivalRepository