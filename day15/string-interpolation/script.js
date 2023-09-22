const employee = {
  first_name: "Alfred",
  last_name: "Pennyworth",
  age: 67,
  occupation: "butler",
  place_of_residence: "Gotham",
  photo_url: "https://classes.codingbootcamp.cz/assets/classes/1177/alfred.jpg",
};

const employeeHTML = `
<div class="employee">
    <div class="employee__photo">
        <img src="${employee.photo_url}" alt="${employee.first_name} ${employee.last_name}">
    </div>
    <div class="employee_info">
        <div class="employee__full-name">${employee.first_name} ${employee.last_name}</div>
        <div class="employee__occupation">${employee.occupation}</div>
        <div class="employee__residence">Last known place of residence: ${employee.place_of_residence}</div>
        <div class="employee__age">Age: ${employee.age} years old</div>
    </div>
</div>`;

const div = document.querySelector(".employees");

div.innerHTML = employeeHTML;
