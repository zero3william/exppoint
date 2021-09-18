export default {
    now: ()=>{
        const now = new Date();
        const year = now.getFullYear();
        const month = now.getMonth()+1;
        const date = now.getDate();
        return `${year}-${month<10 ? '0'+month : month}-${date}`;
    },
    expiredInDays: (now,expired)=>{
        const nowTimestamp = Date.parse(now);
        const expiredTimestamp = Date.parse(expired);
        const diffTime = expiredTimestamp-nowTimestamp;
        const expiredInDays = Math.ceil(diffTime/86400000);
        return expiredInDays;
    }
}