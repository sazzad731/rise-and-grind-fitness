const addBreakToLocal = (time)=>{
    localStorage.setItem("Break-time", time)
}

const getBrakFromLocal = ()=>{
    localStorage.getItem("Break-time");
}

export {addBreakToLocal}