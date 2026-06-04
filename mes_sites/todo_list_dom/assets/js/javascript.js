const inputTache = document.getElementById('inputTache');
const listeTaches = document.getElementById('listeTaches');
const btnAjouter = document.getElementById('btnAjouter');

btnAjouter.addEventListener('click', () => {
    if (inputTache.value.trim() !== '') {
        const nouvelleTache = document.createElement('li');
        nouvelleTache.className = "d-flex align-items-center rounded border justify-content-between p-3 m-3 bg-light";
        nouvelleTache.innerHTML = `<p class="m-0 cursor-pointer">${inputTache.value}</p> <button class="btn btn-danger">Supprimer</button>`;
        
        listeTaches.appendChild(nouvelleTache);
        inputTache.value = "";

        nouvelleTache.querySelector('button').addEventListener('click', function() {
            nouvelleTache.remove();
        });
        

        const p = nouvelleTache.querySelector('p');

        nouvelleTache.querySelector('p').addEventListener('click', function() {
            p.classList.toggle('termine');
        });
    }
});

inputTache.addEventListener('keypress', (enter) => {
    if (enter.key === 'Enter') {
        btnAjouter.click();
    }
});









