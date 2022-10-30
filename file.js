function validate() {
    let firstName = document.getElementById('first-name').value
    let lastName = document.getElementById('last-name').value
    let email = document.getElementById('email').value
    let phno = document.getElementById('phone').value
    let g1=document.getElementById('male');
    let g2=document.getElementById('female');
    let g3=document.getElementById('others');
    let country = document.getElementById('country').value
    let error = false
    var hasNumber = /\d/;

    if (firstName.length >= 3 && !hasNumber.test(firstName)) {
        document.getElementById('first-name-valid').style.display = 'block'
        document.getElementById('first-name-invalid').style.display = 'none'

    } else {
        document.getElementById('first-name-invalid').style.display = 'block'
        document.getElementById('first-name-valid').style.display = 'none'
        error = true
    }

    if (lastName.length >= 3 && !hasNumber.test(lastName)) {
        document.getElementById('last-name-valid').style.display = 'block'
        document.getElementById('last-name-invalid').style.display = 'none'

    } else {
        document.getElementById('last-name-invalid').style.display = 'block'
        document.getElementById('last-name-valid').style.display = 'none'
        error = true
    }


    if (email.includes('@') &&
        email.includes('.') &&
        email.indexOf('@') != 0 &&
        email.length - email.lastIndexOf(".") >= 3) {
        document.getElementById('email-valid').style.display = 'block'
        document.getElementById('email-invalid').style.display = 'none'
    } else {
        document.getElementById('email-invalid').style.display = 'block'
        document.getElementById('email-valid').style.display = 'none'
        error = true
    }
    let phno1=parseInt(phno);
    if(phno.length==10 && !isNaN(phno1)){
        document.getElementById('Mobile-valid').style.display = 'block'
        document.getElementById('Mobile-invalid').style.display = 'none'
    } else {
        document.getElementById('Mobile-invalid').style.display = 'block'
        document.getElementById('Mobile-valid').style.display = 'none'
        error = true
    }
    if(g1.checked==true || g2.checked==true|| g3.checked==true ){
        document.getElementById('gender-valid').style.display = 'block'
        document.getElementById('gender-invalid').style.display = 'none'
    } else {
        document.getElementById('gender-invalid').style.display = 'block'
        document.getElementById('gender-valid').style.display = 'none'
        error = true
    }


    if (country != 'None') {
        document.getElementById('country-valid').style.display = 'block'
        document.getElementById('country-invalid').style.display = 'none'

    } else {
        document.getElementById('country-invalid').style.display = 'block'
        document.getElementById('country-valid').style.display = 'none'
        error = true
    }


    

    if (!error) {
        alert('Your details have been saved successfully')
        document.getElementById('register-form').reset()
        let validFeedbacks = document.getElementsByClassName('valid-feedback')
        for(i=0;i<validFeedbacks.length;i++){
            validFeedbacks[i].style.display = 'none'
        }
        let invalidFeedbacks = document.getElementsByClassName('invalid-feedback')
        for(i=0;i<invalidFeedbacks.length;i++){
            invalidFeedbacks[i].style.display = 'none'
        }
    }
}
