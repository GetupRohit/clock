function cdown() {




    let date = new Date();
    // console.log(date)
    let fdate = new Date(2022, 08, 26);
    // console.log(fdate)
    let ctime = date.getTime();
    // console.log(ctime)
    let etime = fdate.getTime();
    // console.log(etime)
    let trr = etime - ctime;
    // console.log(trr)
    let sval = Math.floor(trr / 1000);
    let mval = Math.floor(sval / 60);
    let hval = Math.floor(mval / 60)
    let dval = Math.floor(hval / 24);
    hval %= 24;
    mval %= 60;
    sval %= 60;
    hval = (hval < 10) ? "0" + hval : hval;
    mval = (mval < 10) ? "0" + mval : mval;
    sval = (sval < 10) ? "0" + sval : sval;
    document.getElementById("d").innerHTML = dval
    document.getElementById("h").innerHTML = hval
    document.getElementById("m").innerHTML = mval
    document.getElementById("s").innerHTML = sval
    setTimeout(cdown, 1000)
}
cdown()