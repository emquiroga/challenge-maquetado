function toggleMenu() {
    const PORTAL = document.getElementById('portal');
    const BUTTON = document.getElementById('burger-button')
    const MENU = document.getElementById('menu-burger')
    BUTTON.addEventListener('click', () => {
        PORTAL.classList.toggle('overlay');
        MENU.classList.toggle('show')
    })
}
toggleMenu();

function changeInnerHTML () {
    const LABEL = document.getElementsByClassName('cargoSimpleLabel');
    const INPUT = document.getElementsByClassName('cargoSimpleInput');

    const [AGENDA_LABEL] = document.getElementsByClassName('agendaLabel');
    let agendaStaticContent = AGENDA_LABEL.innerHTML
    const [AGENDA_INPUT] = document.getElementsByClassName('agendaInput');


    // Cargo Simple hover
    for (let i = 0; i < LABEL.length && INPUT.length; i++) {
        let labelStaticContent = LABEL[i].innerHTML;
        INPUT[i].addEventListener('mouseover', () => {
                setTimeout(() => { //Timeout for a smooth animation
                    LABEL[i].innerHTML = 'Cargo simple';
                },100)
        })
        INPUT[i].addEventListener('mouseout', () => {
                setTimeout(() => { //Timeout for a smooth animation
                    LABEL[i].innerHTML = labelStaticContent;
                },100)
        })
    };
    // Agenda hover
    AGENDA_INPUT.addEventListener('mouseover', () => {
        setTimeout(() => {
            AGENDA_LABEL.innerHTML = 'Agenda';
        },100)
    })
    AGENDA_INPUT.addEventListener('mouseout', () => {
        setTimeout(() => {
            AGENDA_LABEL.innerHTML = agendaStaticContent;
        },100)
    })
}
changeInnerHTML();

const validateForm = () => {
    const FORM = document.getElementById('form');
    const REQUIRED_VALUES = document.getElementsByClassName('inputRequired');
    const ERROR_SPAN = document.getElementsByClassName('error-message');

    function validateFields(field) {
        for (let i = 0; i < field.length; i++) {
            if (!field[i].validity.valid) {
                field[i].classList.add('error');
                ERROR_SPAN[i].innerHTML = 'Campo obligatorio';
            } else {
                field[i].classList.remove('error');
                field[i].classList.add('valid');
                ERROR_SPAN[i].innerHTML = '';
            }
        }
    }

    FORM.addEventListener('submit', ((e) => {
        e.preventDefault();
        validateFields(REQUIRED_VALUES);
    }));
}
validateForm();
