window.addEventListener('DOMContentLoaded',(event)=>{
  createCityHtml();
  createStateHtml();
  eventListner()
});


const save=() =>{
  try{
    let contact = createContact();
    createAndUpdateStorage(contact);
  }catch(e){
    return;
  }
}

const createContact = () =>{
  let contact = new Contact();
  try{
    contact._name =  getInputValueById('#name');
    contact._phone=getInputValueById('#phone');
    contact._address=getInputValueById('#address');
    contact._zip=getInputValueById('#zip');
    contact._city = getInputValueById("#city");
    contact._state=getInputValueById('#state');
  }catch (e){
      setTextValue('.text-error',e);
      throw e;
}
alert(contact.toString());
return contact;
}

function createAndUpdateStorage(contact){
  let addressbookList = JSON.parse(localStorage.getItem("AddressBookList"));

  if(addressbookList != undefined){
    addressbookList.push(contact);
  }
  else{
    addressbookList = [contact];
  }
  alert(addressbookList.toString());
  localStorage.setItem("AddressBookList",JSON.stringify(addressbookList))
}

function eventListner(){
  eventListnerName();
  eventListnerPhone();
  eventListnerAddress();
  eventListnerzip();
}

function eventListnerName(){
  const name = document.querySelector('#name');
  const textError = document.querySelector('.text-error');
  name.addEventListener('input',function(){
    if(name.value.length==0){
      textError.textContent="";
      return;
    }
    try{
      (new Contact()).name = name.value;
      textError.textContent=""
  }catch(e){
      textError.textContent = e;
  }
})
}

  function eventListnerPhone(){
    const phone = document.querySelector('#phone');
    const textError = document.querySelector('.phone-error');
    phone.addEventListener('input',function(){
      if(phone.value.length==0){
        textError.textContent="";
        return;
      }
      try{
        (new Contact()).phone = phone.value;
        textError.textContent=""
    }catch(e){
        textError.textContent = e;
    }
  })
}

function eventListnerzip(){
  const zip = document.querySelector('#zip');
  const textError = document.querySelector('.zip-error');
  zip.addEventListener('input',function(){
    if(zip.value.length==0){
      textError.textContent="";
      return;
    }
    try{
      (new Contact()).zip= zip.value;
      textError.textContent=""
  }catch(e){
      textError.textContent = e;
  }
})
}

function eventListnerAddress(){
  const address = document.querySelector('#address');
  const textError = document.querySelector('.address-error');
  address.addEventListener('input',function(){
    if(address.value.length==0){
      textError.textContent="";
      return;
    }
    try{
      (new Contact()).address = address.value;
      textError.textContent=""
  }catch(e){
      textError.textContent = e;
  }
})
}

const createCityHtml= () => {
  let innerHtml = `
  <option >Select City</option>
  <option value="Mumbai">Mumbai</option>
  <option value="Pune">Pune</option>
  <option value="Kanpur">Kanpur</option>
  <option value="Jalna">Jalna</option>
  <option value="Akola">Akola</option>
  <option value="Bhusawal">Bhusawal</option>
  <option value="Jalgoan">Jalgoan</option>
  <option value="Amravati">Amravati</option>
  <option value="Buldhana">Buldhana</option>
  <option value="Hydrabad">Hydrabad</option>
  `;
  document.querySelector('#city').innerHTML = innerHtml
}

const createStateHtml= () => {
  let innerHtml = `
  <option >Select State</option>
  <option value="Maharastra">MH</option>
  <option value="Uttar_Pradesh">UP</option>
  <option value="Madhya_Pradesh">MP</option>
  <option value="Kerala">KER</option>
  <option value="Goa">GOA</option>
  <option value="Andra_Pradesh">AP</option>
  <option value="West_Bengal">WB</option>
  <option value="Bihar">BH</option>
  <option value="Kashmir">Ksh</option>
  <option value="Punjab">Puj</option>
  <option value="Telangana">Tel</option>
  
  `;
  document.querySelector('#state').innerHTML = innerHtml
}

const getInputValueById = (id)=>{
  let value = document.querySelector(id).value;
  return value;
}

