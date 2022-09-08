const openBtnRel = document.querySelector('#js_open_btn');
const closeBtnRel = document.querySelector('#js_close_btn');
const modalOverRel = document.querySelector('#overlay');

openBtnRel.addEventListener('click', openModal)
closeBtnRel.addEventListener('click',closeModal);
// modalOverRel.addEventListener('click', event => event.target === event.currentTarget ? closeModal(): null);
modalOverRel.addEventListener('click', event => (event.target === event.currentTarget) && closeModal());

function openModal () {
    modalOverRel.classList.add('overlay--active');
    window.addEventListener('keydown', addEskClose)
}

function addEskClose (event) {
    if (event.key === 'Escape') {
        closeModal();
    } else {
        console.log(event.key);
    }
}

function closeModal () { 
    modalOverRel.classList.remove('overlay--active');
    window.removeEventListener('keydown', addEskClose)
}