import { toast, ToastContainer } from 'react-toastify';


function handleEmail(event, est) {
    const reg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (reg.test(event.target.value)) {
        event.target.classList.remove('error');
        event.target.classList.add('valid');
    }
    else {
        event.target.classList.add('error');
        event.target.classList.remove('valid');
    }
    est.email=event.target.value;

}

function invalidMailNoti(event) {
    const reg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const valuer = event.target.value
    
    if(valuer.length <=0){
        toast.error('Insira seu E-mail!')
    }
    else if (!reg.test(valuer)) {
        toast.error('E-mail invalido!')
    }
  

}

export { handleEmail, invalidMailNoti }