// var counter = 0;
// function handleFormSubmit(event) {
//   event.preventDefault();
//   const uname = event.target.username.value;
//   const mail = event.target.email.value;
//   const phone = event.target.phone.value;

//   let User = {
//     username: uname,
//     email: mail,
//     phone: phone,
//   };
//   let obj_serialized = JSON.stringify(User);
//   localStorage.setItem(mail, obj_serialized);
//   const list = document.querySelector("#list");
//   // const newli = `<li>${uname}- ${mail}-${phone}</li>`;
//   // list.innerHTML += newli;
//   // const newli = document.createElement("li");
//   const child = `<li id="${counter}">${uname} - ${mail} - ${phone} <button onclick="dellete(${counter},'${mail}')">Delete</button><button onclick="edit(${counter},'${mail}','${uname}','${phone}')">Edit</button></li>`;

//   // newli.innerHTML =
//   //   `${uname}-${mail}-${phone}` +
//   //   `<button  onclick="dellete(${counter},${mail})">Delete</button>` +
//   //   `<button  onclick="edit(event)">Edit</button>`;
//   // list.appendChild(newli);
//   counter++;
//   list.innerHTML += child;
// }

// // clicking delete function
// function dellete(id, mail_id) {
//   // e.target.parentNode.remove();
// }

// function edit(id, mail_id, uname, phone) {
//   // e.target.parentNode.remove();

//   const list = document.querySelector("#list");
//   const child = document.getElementById(id);
//   list.removeChild(child);
//   localStorage.removeItem(mail_id);
//   document.querySelector("#username").value = uname;

//   document.querySelector("#email").value = mail_id;
//   document.querySelector("#phone").value = phone;
//   // const finp = e.target.parentNode.querySelector("#spp").textContent;

//   // document.querySelector("#username").value = finu;

//   // document.querySelector("#email").value = finid;
//   // document.querySelector("#phone").value = finp;
//   // localStorage.removeItem(finid);

//   // e.target.parentNode.remove();
// }
var count = 1;
function submitForm(e) {
  e.preventDefault();
  const expense = document.querySelector("#amount").value;
  const description = document.querySelector("#description").value;
  const categorie = document.querySelector("#categorie").value;

  let User = {
    amount: expense,
    desc: description,
    cat: categorie,
  };
  let User_serialized = JSON.stringify(User);
  localStorage.setItem(`User${count}`, User_serialized);

  const list = document.querySelector("#list");
  const child = `<li>${expense}-${description}-${categorie} <button onclick="delexpense(event,${count});">Delete</button> <button onclick="editexpense(event,${count},'${expense}','${description}','${categorie}');">Edit</button></li>`;
  list.innerHTML += child;
  count += 1;
}
function delexpense(e, count) {
  //   let User_unserialized=JSON.parse(localStorage.getItem(`User${count}`));
  localStorage.removeItem(`User${count}`);
  e.target.parentNode.remove();
}
function editexpense(e, count, expense, desc, categorie) {
  document.querySelector("#amount").value = expense;
  document.querySelector("#description").value = desc;
  document.querySelector("#categorie").value = categorie;
  localStorage.removeItem(`User${count}`);
  e.target.parentNode.remove();
}
