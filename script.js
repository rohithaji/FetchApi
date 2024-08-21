let nameid = document.getElementById("name");
let emailid = document.getElementById("email");
let picid = document.getElementById("img");


function fetchapi() {

    fetch("https://randomuser.me/api/")
    .then((response) => response.json())

    .then((data) =>
      data.results.forEach((element) => {
        let name = element.name;
        nameid.innerText = `${name.first} ${name.last}`;

        let email = element.email;
        emailid.innerText = email;

        let picture = element.picture.large;
        picid.src = picture;

        console.log(picture);
      }));
}