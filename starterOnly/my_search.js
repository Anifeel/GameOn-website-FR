
 /* //validation email
email.addEventListener('keyup', function(e) {
  if(email.validity.typeMismatch) {
    email.setCustomValidity('Veuillez saisir une adresse email valide');
  } else {
    email.setCustomValidity('');
  }
}) */

/*
/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ */ 
/*
function validerEmail(email) {
  const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailRegex.test(email);
  if (!validerEmail(email.value)) {
    console.log('email invalide')
    return false;
  } else {
    console.log('Email valide')
    return true;
  }
}

//Validation date
const currentDate = new Date();
const currentYear = currentDate.getFullYear;
function validationDate(day) {
  if (birthdate.length !== 10) { //en comptant les /
    return false;
 //   var birthdayContent = [a,b,c,d,e,f,g,h,i,j];
 //   var birthdayContent[2] && var birthdayContent[5] = '/';
  }
  var monthDays = [31,28,31,30,31,30,31,31,30,31,30,31];
  //année bissextile est divisible par 4
  //si total chiffres de l'année est divisible par 4, alors var monthDays[1] = 29;

  var yearDate
  var monthDate
  var dayDate
  var verifDate = document.birthdate.value
  if (verifDate.length.value !== 10) {
    return false;
  } else {
    return true;
  }
}

//validation ville
let errorCity = 0;
let city = document.getElementsByName('location');
function cityValidation() {
  for (i=0; i < city.length; i++) {
    if (!city[i].checked) {
      errorCity.textContent = 'Choisissez une ville';
      return false;
    } else {
      errorCity.textContent = '';
      return true;
    }
  }
}
  
}; */
//RAZ du form : document.getElementById("myForm").reset();
/* Validation finale du formulaire : mettre un id form à form (?)
let form = document.getElementById('form')
form.addEventListener('submit', function(e) {
  e.preventDefault();
  if (!email.validity.valid) {
    alert('Veuillez entrer une adresse email valide')
  }
  if (!firstName.validity.valid) {
    alert('Veuillez entrer un nom valide')
  }
  form.submit() // quand les vérifs sont faites, on valide le formulaire
})
*/

