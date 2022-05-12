//Form and form elements
let elForm = $(".addcontact__form"); 
let elNameInput = $(".addcontact__name-input");
let elSurnameInput = $(".addcontact__surname-input");
let elRelationSelect = $(".addcontact__relation-select");
let elNumberInput = $(".addcontact__number-input");
let elButtonSubmit = $(".addcontact__form-btn ");

//Outout Elements
let elListResult = $(".addcontact__result-list");


//Arry
let relation = ["Friend", "Relative", "Stranger", "Other"];
let contact = [];

//Creat element

let newP = creatElement("p", "text-danger d-none", "Please fill all blank!")
elForm.append(newP);

//Function
function relationship(){
  for(let i=0; i<relation.length; i++){
    let newOption = creatElement("option", "", relation[i])
    newOption.name = "relation";
    newOption.value = relation[i];
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

  elNameInput.value = "";
  elSurnameInput.value = "";
  elNumberInput.value = "";
}
)