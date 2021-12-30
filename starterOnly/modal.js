function editNav() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalbgregistration = document.querySelector(".bground-registration");
const modalBtn = document.querySelectorAll(".modal-btn");
const modalCloseBtn = document.querySelectorAll(".close");
const modalRegistrationCloseBtn = document.querySelectorAll(".close-registration");

const formData = document.querySelectorAll(".formData");
const modalRegistration = document.querySelector(".modalRegistration");
// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal event
modalRegistrationCloseBtn.forEach((btn) => {
    btn.addEventListener("click", closeModalRegistration);
});

modalCloseBtn.forEach((btn) => {
    btn.addEventListener("click", closeModal);
});



// launch modal form
function launchModal() {
    modalbg.style.display = "block";
}

function launchModalRegistration() {
    modalbgregistration.style.display = "block";
}

// close modal form
function closeModal() {
    modalbg.style.display = "none";
}

function closeModalRegistration() {
    modalbgregistration.style.display = "none";
}




const validate = () => {
    let error = 0;
    //return true;
    //modale inscription OK block et none pour l'autre
    // bouton Fermer et fonction close au click
    // } else {
      //  e.preventDefault();
      // return false
     
    
    //déclaration variables
    const firstNameInput = document.getElementById('first');
    const lastNameInput = document.getElementById('last');
    const emailInput = document.getElementById('email');
    const birthdateInput = document.getElementById('birthdate');
    const nameRegex = /^[a-z-éèêëïîùüû\s]+$/i;
    const emailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const quantityInput = document.getElementById('quantity'); 
    const cguCheckbox = document.getElementById('checkbox1');
    const locations = document.getElementsByName('location');
    /*
    console.log(firstNameInput);
    console.log(firstNameInput.value.length);
    console.log(birthdateInput.value);
    */

    //validation prenom
    if (!firstNameInput.value) {
        let parent = firstNameInput.parentNode;
        parent.setAttribute('data-error', "Votre prénom est obligatoire");
        parent.setAttribute('data-error-visible', "true");
        error++;
        console.log('champ prénom vide');
    } else if (firstNameInput.value.length < 2) {
        console.log('first < 2');
        let parent = firstNameInput.parentNode;
        parent.setAttribute('data-error', "Votre prénom doit comporter au moins 2 caractères");
        parent.setAttribute('data-error-visible', "true");
        error++;
    } else if (!nameRegex.test(firstNameInput.value)) {
        console.log('first non valide');
        let parent = firstNameInput.parentNode;
        parent.setAttribute('data-error', "Votre prénom peut contenir des lettres, espace et -");
        parent.setAttribute('data-error-visible', "true");
        error++;
    } else {
        let parent = firstNameInput.parentNode;
        parent.removeAttribute('data-error');
        parent.removeAttribute('data-error-visible');
        
    }

    //validation nom
    if (!lastNameInput.value) {
        let parentLast = lastNameInput.parentNode;
        parentLast.setAttribute('data-error', "Votre nom doit comporter au moins 2 caractères");
        parentLast.setAttribute('data-error-visible', "true");
        error++;
        console.log('champ nom vide');
    } else if (lastNameInput.value.length < 2) {
        console.log('last < 2');
        //error = "Le nom doit comporter au moins 2 lettres";
        error++;
    } else if (!nameRegex.test(lastNameInput.value)) {
        console.log('last non valide');
        //error = "Le nom contient des caractères non autorisés";
        error++;
    } else {
        let parent = lastNameInput.parentNode; 
        parent.removeAttribute('data-error'); 
        parent.removeAttribute('data-error-visible');
    }

    //validation email
    if (!emailInput.value) {
        let parentMail = emailInput.parentNode;
        parentMail.setAttribute('data-error', "Indiquez votre email");
        parentMail.setAttribute('data-error-visible', "true");
        error++;
        console.log('champ email vide');
    } else if (!emailRegex.test(emailInput.value)) {
        console.log('email non valide');
        error++;
    } else {
        let parent = emailInput.parentNode; //
        parent.removeAttribute('data-error'); //
        parent.removeAttribute('data-error-visible');
    }

    

    // NAISSANCE OK 
    if (!birthdateInput.value) {
        let parent = birthdateInput.parentNode;
        parent.setAttribute('data-error', "Date de naissance obligatoire");
        parent.setAttribute('data-error-visible', "true");
        error++;
        console.log('date de naissance vide');
    } else if (isNaN(new Date(birthdateInput.value))) {
        console.log('entrez une date correcte');
        let parent = birthdateInput.parentNode;
        parent.setAttribute('data-error', "Indiquez une date de naissance");
        parent.setAttribute('data-error-visible', "true");
        error++;
    } else {
        let dateActuelle = new Date();
        let dateDeNaissance = new Date(birthdateInput.value);
        console.log(dateDeNaissance);
        dateActuelle.setFullYear(dateActuelle.getFullYear() - 16);
        console.log(dateDeNaissance);
        let parent = birthdateInput.parentNode; 
        if (dateActuelle < dateDeNaissance) {
            error++;
            parent.setAttribute('data-error', "Vous êtes trop jeune pour participer");
            parent.setAttribute('data-error-visible', "true");
        } else {
            parent.removeAttribute('data-error'); 
            parent.removeAttribute('data-error-visible');
        }
    }


    if (!quantityInput.value) {
        let parent = quantityInput.parentNode;
        parent.setAttribute('data-error', "Indiquez un nombre");
        parent.setAttribute('data-error-visible', "true");
        error++;
    } else if (isNaN(quantityInput.value)) { 
        let parent = quantityInput.parentNode;
        parent.setAttribute('data-error', "Indiquez un nombre");
        parent.setAttribute('data-error-visible', "true");
        error++;
    } else if (!Number.isInteger(Number(quantityInput.value))) {
        let parent = quantityInput.parentNode;
        parent.setAttribute('data-error', "Entrez un nombre entier");
        parent.setAttribute('data-error-visible', "true");
        error++;
    } else  {
        let parent = quantityInput.parentNode;
        parent.removeAttribute('data-error');
        parent.removeAttribute('data-error-visible');    
    }
   

    let locationChecked;
    locations.forEach((location) => {
        if (location.checked) {
            locationChecked = location.value;
        }
    }); 

    if (!locationChecked) {
        let parent = locations[0].parentNode;
        parent.setAttribute('data-error', "Veuillez sélectionner une ville");
        parent.setAttribute('data-error-visible', "true");
        error++;
        console.log('aucune ville choisie');
    } else {
        let parent = locations[0].parentNode;
        parent.removeAttribute('data-error');
        parent.removeAttribute('data-error-visible');
    }
    
    //validation CGU
    if(!cguCheckbox.checked) {
        let parent = cguCheckbox.parentNode;
        parent.setAttribute('data-error', "* veuillez accepter les conditions générales d'utilisation");
        parent.setAttribute('data-error-visible', "true");
        error++;
    } else {
        let parent = cguCheckbox.parentNode; //
        parent.removeAttribute('data-error'); //
        parent.removeAttribute('data-error-visible'); //
    }

    // test la variable error à la fin des validations
    if (error !== 0) {
     
        console.log('formulaire non valide');
        console.log(error);
        return false;
        
    } else {
        //Récupération des éléments du formulaire
        let form = {
            firstname: firstNameInput.value,
            lastname: lastNameInput.value,
            email: emailInput.value,
            birthdate: birthdateInput.value,
            quantity: quantityInput.value,
            location: locationChecked,
            CGU: cguCheckbox.checked
        };

        console.log(form);
        
        closeModal();
        launchModalRegistration();


        //   modalRegistration.innerHTML = "Merci pour votre inscription" mais créée en html 218 à 225
        // resetForm();
        //form.validate.resetForm();
        return false;
    }
}
// modifs apportées : ajouté  .modalRegistration au css 160
