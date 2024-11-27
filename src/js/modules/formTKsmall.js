function formTKsmall() {
  //форма

  const formMobile = document.querySelector('.form__body__mobile.order');
  const parentFormMobile = document.querySelector('.modal-form.order');
  formMobile.addEventListener('submit', ()=>formSend(event, formMobile, parentFormMobile));
  
  
  async function formSend(event, form, parent) {
    event = event || window.event;
    event.preventDefault();
  
    
    let error = formValidate(form);
  
    let formData = {
      name: form.querySelector('input[name="name"]').value,
      tel: form.querySelector('input[name="phone"]').value,
      topic: 'Мультимодальные перевозки'
    };
    if (error === 0) {
      form.classList.add('_sending');
      let response = await fetch('../sendmailorder.php', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
            "Content-Type": "application/json; charset=UTF-8"
        }
      });
      if (response.ok) {
        form.classList.remove('_sending');
        parent.querySelector('.ready').style.display = 'block';
        setTimeout(() => {
          parent.querySelector('.ready').style.display = 'none';
        }, "5000");
        form.reset();
      } else {
        form.classList.remove('_sending');
        parent.querySelector('.error').style.display = 'block';
      }
    } 
  }
  
  
  
  function formValidate(form) {
    let error = 0;
    let formReq = form.querySelectorAll('._req');
    for (let i = 0; i< formReq.length; i++) {
      const input = formReq[i];
      formRemoveError(input);
  
      if (input.classList.contains('_phone')) {
        
        if (phoneTest(input)) {
          formAddError(input);
          error++;
        }
      } else {
        if (input.value === '') {
          formAddError(input);
          error++;
        }
      }
    }
    return error;
  }
  
  function formAddError(input) {
    input.parentElement.classList.add('_error');
    input.classList.add('_error');
  }
  
  function formRemoveError(input) {
    input.parentElement.classList.remove('_error');
    input.classList.remove('_error');
  }
  function phoneTest(input) {
    const data = input.value.replace(/\D/g, '');
    if (data.length === 11) {
      return false
    } else {
      return true
    }
    
  }
  
  
  const inputs = document.querySelectorAll('input.form__input');
  inputs.forEach((input, index) => {
    input.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault(); 
            if (index < inputs.length - 1) {
                inputs[index + 1].focus();
            }
        }
    });
  });

}

export default formTKsmall;