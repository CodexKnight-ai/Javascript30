function setDate(){
    const curr =new Date()
    const seconds =curr.getSeconds();
    const minute =curr.getMinutes();
    const hour = curr.getHours();
    const secDegrees = ((seconds/60)*360)
    const minDegrees =((minute/60)*360)
    const hourDegrees = ((hour/12)*360) 

    document.querySelector('.seconds').style.transform=`rotate(${secDegrees+90}deg)`;
    document.querySelector('.minute').style.transform=`rotate(${minDegrees+90}deg)`;
    document.querySelector('.hour').style.transform=`rotate(${hourDegrees+90}deg)`;
}
setInterval(setDate,1000);