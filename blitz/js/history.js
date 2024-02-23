const dataArray = [
    { date: "24/02/23", success: "9", fail: "4" },
];

const ul = document.querySelector('ul.history');

dataArray.forEach(data => {
    const li = document.createElement('li');

    const h1 = document.createElement('h1');
    h1.setAttribute('id', 'date');
    h1.textContent = data.date;
    li.appendChild(h1);

    const successH2 = document.createElement('h2');
    successH2.setAttribute('id', 'success');
    successH2.innerHTML = `성공<span>${data.success}</span>`;
    li.appendChild(successH2);

    const failH2 = document.createElement('h2');
    failH2.setAttribute('id', 'fail');
    failH2.innerHTML = `실패<span>${data.fail}</span>`;
    li.appendChild(failH2);

    ul.appendChild(li);
});