//Form and form elements
let elForm = document.querySelector(".addcontact__form");
let elNameInput = document.querySelector(".addcontact__name-input");
let elSurnameInput = document.querySelector(".addcontact__surname-input");
let elRelationSelect = document.querySelector(".addcontact__relation-select");
let elNumberInput = document.querySelector(".addcontact__number-input");
let elButtonSubmit = document.querySelector(".addcontact__form-btn ");

//Outout Elements
let elListResult = document.querySelector(".addcontact__result-list");


//Arry
let relation = ["Friend", "Relative", "Stranger", "Other"];
let contact = [];

//Creat element
let newP = document.createElement("p");
newP.textContent = "Please fill all blank!"
newP.classList.add("text-danger", "d-none");
elForm.appendChild(newP);

//Function
function relationship(){
  for(let i=0; i<relation.length; i++){
    let newOption = document.createElement("option");
    newOption.name = "relation";
    newOption.value = relation[i];
    newOption.textContent = relation[i];
    elRelationSelect.appendChild(newOption);
  }
}


function addoutput(){
  elListResult.innerHTML = "";
  for(let i = 0; i < contact.length; i++){
    let newLi = document.createElement("li");
    newLi.innerHTML = `
    <p class="text-primary ms-5">Name: <span class="text-black">${contact[i].name}</span></p>
    <p class="text-primary ms-5">Last name: <span class="text-black">${contact[i].surname}</span></p>
    <p class="text-primary ms-5">Relationship: <span class="text-black">${contact[i].relation}</span></p>
    <p class="text-primary ms-5">Tell number: <span class="text-black">${contact[i].phon_number}</span></p>
    `
    newLi.classList.add("newLi-style");
    elListResult.append(newLi);
  }
}

function addObject(){
  if(elNameInput.value == "" || elSurnameInput.value == "" || elRelationSelect.value == "" || elNumberInput.value == ""){
    newP.classList.remove("d-none");
    return
  }
  else{
    newP.classList.add("d-none");
    contact.push(
    {
      name: elNameInput.value.trim(),
      surname: elSurnameInput.value.trim(),
      relation: elRelationSelect.value.trim(),
      phon_number : elNumberInput.value.trim(),
    }
  )
  }
}

relationship();

elForm.addEventListener("submit", function(e){
  e.preventDefault();

  addObject();

  addoutput();

  console.log(elListResult);
  elNameInput.value = "";
  elSurnameInput.value = "";
  elRelationSelect.value = "";
  elNumberInput.value = "";
  console.log(contact);
}
)
