
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
    changeDrapeau.innerText = myDrapeau

}



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


function GeneralShowing() {
let Choice = document.getElementById('get-FormPosition').value

    switch (Choice) {
        case Choice = 'LW':
            showCard_LW()
            break;
        case Choice = 'ST':
            showCard_ST()
            break;
        case Choice = 'RW':
            showCard_RW()
            break;
        case Choice = 'CM1':
            showCard_CM1()
            break;    
        case Choice = 'CM2':
            showCard_CM2()
            break;    
        case Choice = 'RM':
            showCard_RM()
            break;
        case Choice = 'CB1':
            showCard_CB1
            break;
        case Choice= 'CB2':
            showCard_CB2()
            break;    
        case Choice = 'CB3':
            showCard_CB3()
            break;    
        case Choice = 'GK':
            showCard_GK()
            break;
        case Choice ='LM':
            showCard_LM()
            break;
        default: console.log('Invalide OptionXXX')
            break;
    }
    // console.log(GeneralShowing())
}

