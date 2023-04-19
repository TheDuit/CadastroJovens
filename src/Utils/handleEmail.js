import { toast, ToastContainer } from 'react-toastify';


export default function handleEmail(event) {
    const reg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const valuer = event.target.value

    event.target.addEventListener('focusout', () => {
        if (!reg.test(valuer)) {
            toast.error('E-mail invalido!')
        }

    })

    if (reg.test(event.target.value)) {
        event.target.classList.remove('error');
        event.target.classList.add('valid');
    }
    else {
        event.target.classList.add('error');
        event.target.classList.remove('valid');


    }
}