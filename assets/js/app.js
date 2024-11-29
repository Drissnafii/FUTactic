function LivePlayerChanging() {
    
    let myImageSource = document.getElementById('player-photo').value
    let myName = document.getElementById('player-name').value
    let myPosition = document.getElementById('player-position').value
    let myNote = document.getElementById('player-note').value
    let myClub = document.getElementById('player-Club').value
    let myLigue = document.getElementById('player-ligue').value
    let myNationalite = document.getElementById('player-nationalite').value

    // Going to change the targeted button (div)
    let changeImageSource = document.querySelectorAll('.buttonCard-image')[0]
    changeImageSource.src = myImageSource

    let changeName = document.get
}

function showCard_CB() {
    LivePlayerChanging()
    let targetedCard = document.getElementById('CB')
    targetedCard.style.display = 'block'
}
function showCard_LB() {
    LivePlayerChanging()
    let targetedCard = document.getElementById('LB')
    targetedCard.style.display = 'block'
}
function showCard_RB() {
    LivePlayerChanging()
    let targetedCard = document.getElementById('RB')
    targetedCard.style.display = 'block'
}
function showCard_CM() {
    LivePlayerChanging()
    let targetedCard = document.getElementById('CM')
    targetedCard.style.display = 'block'
}
function showCard_RM() {
    LivePlayerChanging()
    let targetedCard = document.getElementById('RM')
    targetedCard.style.display = 'block'
}
function showCard_LM() {
    LivePlayerChanging()
    let targetedCard = document.getElementById('LM')
    targetedCard.style.display = 'block'
}
function showCard_LW() {
    LivePlayerChanging()
    let targetedCard1 = document.getElementById('LW')
    targetedCard1.style.display = 'block'
}
function showCard_GK() {
    LivePlayerChanging()
    let targetedCard = document.getElementById('GK')
    targetedCard.style.display = 'block'
}
function showCard_ST() {
    LivePlayerChanging()
    let targetedCard = document.getElementById('ST')
    targetedCard.style.display = 'block'
}
function showCard_RW() {
    LivePlayerChanging()
    let targetedCard = document.getElementById('RW')
    targetedCard.style.display = 'block'
}
function showCard_GK() {
    LivePlayerChanging()
    let targetedCard = document.getElementById('GK')
    targetedCard.style.display = 'block'
}


function GeneralShowing() {
let Choice = document.getElementById('player-position').value

    switch (Choice) {
        case Choice.value = 'GK':
            showCard_GK()
        console.log('Card 01')
            break;
        case Choice.value = 'CB':
            showCard_CB()
            console.log('Card 02')
            break;
        case Choice.value = 'RB':
            showCard_RB()
            console.log('Card 04')
            break;
        case Choice.value = 'LW':
            showCard_LW()
            console.log('Card 03')
            break;    
        case value = 'RW':
            showCard_RW()
            console.log('Card 05')
            break;    
        case value = 'ST':
            showCard_ST()
            console.log('Card 06')
            break;
        case value = 'LM':
            showCard_LM
            console.log('Card 07')
            break;
        case Choice.value= 'RM':
            showCard_RM()
        console.log('Card 08')
            break;    
        case value = 'CM':
            showCard_CM()
            console.log('Card 09')
            break;    
        case value = 'RB':
            showCard_RB()
            console.log('Card 10')
            break;
        case value ='LB':
            showCard_LB()
            console.log('Card 11')
            break;
        default: console.log('Your Option is invalide || we are working to make validation in the form')
            break;
    }
}

