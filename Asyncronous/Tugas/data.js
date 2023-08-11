function getData(url, callback) {
    let xhr = new XMLHttpRequest();
    xhr.onload = function () {
        if (xhr.status === 200) {
            callback(JSON.parse(xhr.responseText));
        }
    };
    xhr.open("GET", url);
    xhr.send();
}

function dataTable(users) {
    const tableBody = document.getElementById('table-body');
    users.forEach(user => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.username}</td>
            <td>${user.email}</td>
            <td>${user.address.street}</td>
            <td>${user.company.name}</td>
        `;
        tableBody.appendChild(row);
    })
}
getData("https://jsonplaceholder.typicode.com/users", dataTable);