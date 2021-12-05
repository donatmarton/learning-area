const saveButton = document.querySelector('.input-button');
const tabButton = document.querySelector('.tab-button');
const deleteButton = document.querySelector('.delete-button');
const input = document.querySelector('.input-field');
const leadList = document.querySelector('.lead-list');

const storedLeads = JSON.parse(localStorage.getItem('myLeads'));
let myLeads = storedLeads ? storedLeads : [];
renderLeads()

saveButton.addEventListener('click', saveLead);
function saveLead(event) {
  const lead = input.value;
  myLeads.push(lead);
  input.value = "";
  input.focus();
  addLead(lead);
  updateLocalStorage();
}


tabButton.addEventListener('click', () => {
  browser.tabs.query({currentWindow: true, active: true}).then( (tabs) => {
    const lead = tabs[0].url;
    myLeads.push(lead);
    addLead(lead);
    updateLocalStorage();
  });
});

function renderLeads() {
  while(leadList.firstChild) {
    leadList.removeChild(leadList.firstChild);
  }
  for(let i = 0; i < myLeads.length; i++) {
    addLead(myLeads[i]);
  }
}

function addLead(lead) {
  const li = document.createElement('li');
  const a = document.createElement('a');
  li.appendChild(a);
  a.textContent = lead;
  a.href = "https://" + lead;
  a.target = "_blank";
  leadList.appendChild(li);
}

function updateLocalStorage() {
  const stringifiedLeads = JSON.stringify(myLeads);
  localStorage.setItem('myLeads', stringifiedLeads);
}

deleteButton.addEventListener('dblclick', () => {
  myLeads = [];
  updateLocalStorage();
  renderLeads();
});