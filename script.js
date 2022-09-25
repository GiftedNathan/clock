const hour = document.querySelector('.hour')
const minute = document.querySelector('.minute')
const second = document.querySelector('.second')

// const seconds = document.getElementsByClassName('second')


console.log(second)



setInterval(() => {
    const date = new Date
    const hourDegree = date.getHours()/12 * 360 - 90
    const minuteDegree = date.getMinutes()/60 * 360 - 90
    const secondDegree = date.getSeconds()/60 * 360 - 90

    hour.style.transform = `rotate(${hourDegree}deg)`
    minute.style.transform = `rotate(${minuteDegree}deg)`
    second.style.transform = `rotate(${secondDegree}deg)`
}, 1000);

