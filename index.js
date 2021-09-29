
console.log('connected')

const dateOfBirth = document.querySelector('#dateOfBirth')
const luckyNum = document.querySelector('#luckyNum')
const checkBtn = document.querySelector('.checkBtn')
const outputMsg = document.querySelector('.outputMsg')


checkBtn.addEventListener('click', luckyBirthday)

function luckyBirthday(){
    const dob = dateOfBirth.value
    const datesSum = calculateSum(dob)
    if (datesSum % luckyNum.value === 0){
        outputMsg.innerText = "Congo 🥳, your birthdate is luckyy 🍾"
    }
    else {
        outputMsg.innerText = "Sorry 😓, your birthdate isn't lucky 😪"
    }
}

function calculateSum(dob){
    dob = dob.replaceAll("-","")
    let totalSum = 0
    for(let i = 0; i < dob.length; i++ ) {
        // typecasted to num as it was string
        totalSum += Number(dob.charAt(i))
    }
    return totalSum
}