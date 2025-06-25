
// Form validation
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const msg = document.getElementById("formMsg");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!name || !email) {
    msg.textContent = "All fields are required.";
    msg.style.color = "red";
  } else if (!emailRegex.test(email)) {
    msg.textContent = "Please enter a valid email.";
    msg.style.color = "red";
  } else {
    msg.textContent = "Form submitted successfully!";
    msg.style.color = "green";
    this.reset();
  }
});

// To-do list
function addTask() {
  const input = document.getElementById("todoInput");
  const task = input.value.trim();

  if (task) {
    const list = document.getElementById("todoList");

    const li = document.createElement("li");
    li.textContent = task;

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.onclick = () => li.remove();

    li.appendChild(removeBtn);
    list.appendChild(li);

    input.value = "";
  }
}
