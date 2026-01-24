function leftDays(){
    const today = new Date();
    const endYear = new Date(today.getFullYear(), 11,31,23,59,59,999);
    const msPerDay = 24 * 60 * 60 * 1000;
    const result = (endYear.getTime() - today.getTime()) / msPerDay;
    console.log(Math.floor(result));
}
leftDays();