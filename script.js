let form = document.getElementById("myform");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let age = parseInt(document.getElementById("age").value);
  let name = document.getElementById("name").value.trim();

  validate(age, name)
    .then((msg) => alert(msg))
    .catch((err) => alert(err));
});

function validate(age, name) {
  if (!age || !name) {
    return alert("Please enter valid details.");
  }

  if (age < 18) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject("Oh sorry ${name}. You aren't old enough.");
      }, 4000);
    });
  } else {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(`Welcome, ${name}. You can vote.`);
      }, 4000);
    });
  }
}


