export default {
    dateString: (timestamp)=>{
        const now = new Date(timestamp ? timestamp : null);
        const year = now.getFullYear();
        const month = now.getMonth()+1;
        const date = now.getDate();
        return `${year}-${month<10 ? '0'+month : month}-${date<10 ? '0'+date : date}`;
    },
    nDaysAway: (dateA,dateB)=>{
        const dateATimestamp = Date.parse(dateA);
        const dateBTimestamp = Date.parse(dateB);
        const diffTime = dateBTimestamp-dateATimestamp;
        const nDaysAway = diffTime/86400000;
        return nDaysAway;
    }
}