
function LivePlayerChanging() {
    
    let myPosition = document.getElementById('get-FormPosition').value
    let myImageSource = document.getElementById('get-photo').value
    let myName = document.getElementById('get-FormName').value
    let myNote = document.getElementById('get-note').value
    let myClub = document.getElementById('get-club').value
    let myLigue = document.getElementById('get-ligue').value
    let myNationalite = document.getElementById('get-nationalite').value
    let myDrapeau = document.getElementById('get-drapeau').value

    // Going to change the targeted button (div)
    let changeImageSource = document.getElementById('buttonCard-image-' + myPosition)
    changeImageSource.src = myImageSource
    
    let changeName = document.getElementById('buttonCard-Name-' + myPosition)
    changeName.innerText = myName

    let changePosition = document.getElementById('buttonCard-Position-' + myPosition)
    changePosition.innerText = myPosition
    
    let changeNote = document.getElementById('buttonCard-note-' + myPosition)
    changeNote.innerText = myNote

    let changeClub = document.getElementById('buttonCard-Club-' + myPosition)
    changeClub.innerText = myClub

    let changeLigue = document.getElementById('buttonCard-ligue-' + myPosition)
    changeLigue.innerText = myLigue

    let changeNationalite = document.getElementById('buttonCard-nationalite-' + myPosition)
    changeNationalite.innerText = myNationalite

    let changeDrapeau = document.getElementById('buttonCard-drapeau-' + myPosition)
    changeDrapeau.src = myDrapeau

}


function GeneralShowing() {

    

function showCard_LW() {
    LivePlayerChanging()
    let targetedCard = document.getElementById('cardlid1')
    targetedCard.style.display = 'block'
}
function showCard_ST() {
    LivePlayerChanging()
    let targetedCard = document.getElementById('cardlid2')
    targetedCard.style.display = 'block'
}
function showCard_RW() {
    LivePlayerChanging()
    let targetedCard = document.getElementById('cardlid3')
    targetedCard.style.display = 'block'
}
function showCard_LM() {
    LivePlayerChanging()
    let targetedCard = document.getElementById('cardlid4')
    targetedCard.style.display = 'block'
}
function showCard_CM1() {
    LivePlayerChanging()
    let targetedCard = document.getElementById('cardlid5')
    targetedCard.style.display = 'block'
}
function showCard_CM2() {
    LivePlayerChanging()
    let targetedCard = document.getElementById('cardlid6')
    targetedCard.style.display = 'block'
}
function showCard_RM() {
    LivePlayerChanging()
    let targetedCard1 = document.getElementById('cardlid7')
    targetedCard1.style.display = 'block'
}
function showCard_CB1() {
    LivePlayerChanging()
    let targetedCard = document.getElementById('cardlid8')
    targetedCard.style.display = 'block'
}
function showCard_CB2() {
    LivePlayerChanging()
    let targetedCard = document.getElementById('cardlid9')
    targetedCard.style.display = 'block'
}
function showCard_CB3() {
    LivePlayerChanging()
    let targetedCard = document.getElementById('cardlid10')
    targetedCard.style.display = 'block'
}
function showCard_GK() {
    LivePlayerChanging()
    let targetedCard = document.getElementById('cardlid11')
    targetedCard.style.display = 'block'
    
}


let Choice = document.getElementById('get-FormPosition').value

switch (Choice) {
        case'LW':
            showCard_LW()
            break;
        case'ST':
            showCard_ST()
            break;
        case 'RW':
            showCard_RW()
            break;
        case 'CM1':
            showCard_CM1()
            break;    
        case 'CM2':
            showCard_CM2()
            break;    
        case 'RM':
            showCard_RM()
            break;
        case 'CB1':
            showCard_CB1()
            break;
        case 'CB2':
            showCard_CB2()
            break;    
        case 'CB3':
            showCard_CB3()
            break;
        case 'GK':
            showCard_GK()
            break;
        case 'LM':
            showCard_LM()
            break;
        default: console.log('Invalide OptionXXX')
            break;
    }

}

// Making the add button in the heading sowing the form1 (logo) 



function toPlayerForm() {
    let logossNav = document.getElementById('logoD')
    if (logossNav.style.display === 'none') {
        logossNav.style.display = 'block'
    } else {
        logossNav.style.display = 'none'
    }
}

