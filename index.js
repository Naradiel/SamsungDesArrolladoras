/* Establecemos las constantes siguiendo la id que establecimos en html
para llamarlas rápidamente en nuestro código */
const form = document.getElementById('formulario');
const nombre = document.getElementById('nombre');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

/* Establecemos las constantes para si hay un error o si está todo ok */
const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

/* Establecemos constantes para usar las expresiones regulares en 
nombre y email para que sigan un patrón de lo que permitimos 
como válido para cada input */
const nombreValido = nombre => {
    const re1 = /^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$/;
    return re1.test(String(nombre));
}

const emailValido = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

/* Creamos una constante que revise toda la información que
hemos escrito en el formulario, y que salte un alert
si está o no ok */
const validateInputs = () => {
    var msg = '';
    const nombreValue = nombre.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if(nombreValue === '') {
        var msg = msg+'Rellene este campo';
        setError(nombre, msg);
		document.getElementById('erroricon').style.opacity = "1";
		document.getElementById('successicon').style.opacity = "0";
    } else if (!nombreValido(nombreValue)) {
        var msg = msg+'El nombre no debe contener números ni caracteres especiales';
        setError(nombre, msg);
		document.getElementById('erroricon').style.opacity = "1";
		document.getElementById('successicon').style.opacity = "0";
    } else {
        setSuccess(nombre);
		document.getElementById('erroricon').style.opacity = "0";
		document.getElementById('successicon').style.opacity = "1";
    }

    var msg = '';

    if(emailValue === '') {
        var msg = msg+'Rellene este campo';
        setError(email, msg);
		document.getElementById('emailerroricon').style.opacity = "1";
		document.getElementById('emailsuccessicon').style.opacity = "0";
    } else if (!emailValido(emailValue)) {
        var msg = msg+'Email inválido';
        setError(email, msg);
		document.getElementById('emailerroricon').style.opacity = "1";
		document.getElementById('emailsuccessicon').style.opacity = "0";
    } else {
        setSuccess(email);
		document.getElementById('emailerroricon').style.opacity = "0";
		document.getElementById('emailsuccessicon').style.opacity = "1";
    }

    var msg = '';

    if(passwordValue === '') {
        var msg = msg+'Rellene este campo';
        setError(password, msg);
		document.getElementById('passerroricon').style.opacity = "1";
		document.getElementById('passsuccessicon').style.opacity = "0";
    } else if (passwordValue.length < 8 ) {
        var msg = msg+'Debe tener más de 8 caracteres';
        setError(password, msg);
		document.getElementById('passerroricon').style.opacity = "1";
		document.getElementById('passsuccessicon').style.opacity = "0";
    } else {
        setSuccess(password);
		document.getElementById('passerroricon').style.opacity = "0";
		document.getElementById('passsuccessicon').style.opacity = "1";
    }

    var msg = '';

    if(password2Value === '') {
        var msg = msg+'Rellene este campo';
        setError(password2, msg);
		document.getElementById('pass2erroricon').style.opacity = "1";
		document.getElementById('pass2successicon').style.opacity = "0";
    } else if (password2Value !== passwordValue) {
        var msg = msg+'Las contraseñas no coinciden';
        setError(password2, msg);
		document.getElementById('pass2erroricon').style.opacity = "1";
		document.getElementById('pass2successicon').style.opacity = "0";
    } else {
        setSuccess(password2);
		document.getElementById('pass2erroricon').style.opacity = "0";
		document.getElementById('pass2successicon').style.opacity = "1";
    }

    if (msg ==='') {
        alert('La inscripción ha sido correcta');
    } else {
        alert('Hay algún error en el formulario');
    }
}

/* Usamos el event listener para evitar que se envíe el formulario 
si está vacío y revisando los campos del formulario con la
constante que creamos anteriormente */
form.addEventListener('submit', (event) => {
    event.preventDefault();

    validateInputs();
}); 