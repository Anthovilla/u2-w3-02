const textReference = document.getElementById('valorInput')
const saveButton = document.getElementById('btnsave')
const loadButton = document.getElementById('btnload')
const deleteButton = document.getElementById('btndelete')

const save = function () {
    const textContent = textReference.value
    localStorage.setItem('note-inLS', textContent)
    alert('Contenuto salvato ')
    document.getElementById('valorInput').value = ""
}
saveButton.addEventListener('click',save)

const load =function () {
    const cardMemo = localStorage.getItem('note-inLS') 
    if(cardMemo) {
        textReference.value = cardMemo                    //meglio è di fare un array
    }else {
        alert('nope memory')
    }
    document.getElementById('valorDILS').innerHTML = cardMemo
}
loadButton.addEventListener('click',load)

const reset =function() {
    textReference.value = ''
    localStorage.removeItem('note-inLS')
}

deleteButton.addEventListener('click',reset)