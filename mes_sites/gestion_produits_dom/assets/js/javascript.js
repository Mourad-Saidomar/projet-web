const nom = document.getElementById("nom");
const categorie = document.getElementById("categorie");
const prix = document.getElementById("prix");
const stock = document.getElementById("stock");
const btnAjouter = document.getElementById("btnAjouter");
const btnSupprimer = document.getElementById("btnSupprimer");
const listeProduits = document.getElementById("listeProduits");
const input = document.querySelectorAll("input");
const erreur = document.getElementById("erreur");
const btnAjout = document.getElementById("btnAjout");
const formulaire_produit = document.getElementById("formulaire_produit");
const table = document.getElementById("table");

let id = listeProduits.querySelectorAll("tr").length;

function mettreAJourIds() {
    const rows = listeProduits.querySelectorAll("tr");
    rows.forEach((row, index) => {
        const celluleId = row.querySelector('th[scope="row"]');
        if (celluleId) {
            celluleId.textContent = index + 1;
        }
    });
    id = rows.length;
}



input.forEach(function(input) {
    input.addEventListener('blur', () => {
        if (input.value.trim() === "") {
            input.classList.add("is-invalid");
        } else {
            input.classList.remove("is-invalid");
        }
    });
});

let bg_bleue_switch = "bg-blur";

btnAjout.addEventListener("click", function() {
    formulaire_produit.classList.remove("d-none");
    table.classList.remove("col-12");
    table.classList.add("col-6");

});

btnSupprimer.addEventListener("click", function() {
    formulaire_produit.classList.add("d-none");
    table.classList.add("col-12");
    table.classList.remove("col-6");

});

listeProduits.addEventListener("click", function(event) {
    const bouton = event.target.closest(".btn-supprimer-ligne");
    if (!bouton) return;

    const ligne = bouton.closest("tr");
    if (!ligne) return;

    ligne.remove();
    mettreAJourIds();
});



btnAjouter.addEventListener("click", function() {
    if (nom.value.trim() !== "" && prix.value.trim() !== "" && categorie.value.trim() !== "" && stock.value.trim() !== "") {
        
        const rows = listeProduits.querySelectorAll("tr");
        let exists = false;

        rows.forEach(row => {
            const cellules = row.querySelectorAll("td");
            if (cellules.length >= 4 && cellules[0].textContent.trim().toLowerCase() === nom.value.trim().toLowerCase()) {
                cellules[1].textContent = categorie.value;
                cellules[2].textContent = prix.value;
                cellules[3].textContent = stock.value;
                exists = true;
            }
        });

        if (exists) {
            nom.value = "";
            categorie.value = "";
            prix.value = "";
            stock.value = "";
            return;
        } 
        
        else{
            id++;
            const tr = document.createElement('tr');
            if (bg_bleue_switch === "bg-blur"){
                tr.innerHTML = `
                <th class="${bg_bleue_switch} text-white" scope="row">${id}</th>
                <td class="${bg_bleue_switch} text-white">${nom.value}</td>
                <td class="${bg_bleue_switch} text-white">${categorie.value}</td>
                <td class="${bg_bleue_switch} text-white">${prix.value}</td>
                <td class="${bg_bleue_switch} text-white">${stock.value}</td>
                <td class="${bg_bleue_switch} text-center">
                    <button type="button" class="btn btn-danger btn-sm btn-supprimer-ligne">Supprimer</button>
                </td>
            `;
            bg_bleue_switch = "bg-blur-1";
            } else{
                tr.innerHTML = `
                <th class="${bg_bleue_switch} text-white" scope="row">${id}</th>
                <td class="${bg_bleue_switch} text-white">${nom.value}</td>
                <td class="${bg_bleue_switch} text-white">${categorie.value}</td>
                <td class="${bg_bleue_switch} text-white">${prix.value}</td>
                <td class="${bg_bleue_switch} text-white">${stock.value}</td>
                <td class="${bg_bleue_switch} text-center">
                    <button type="button" class="btn btn-danger btn-sm btn-supprimer-ligne">Supprimer</button>
                </td>
            `;
            bg_bleue_switch = "bg-blur";
            }


            

            listeProduits.appendChild(tr);
            erreur.classList.add("d-none");

            nom.value = "";
            categorie.value = "";
            prix.value = "";
            stock.value = "";    
        }
        
         
    } else{
        erreur.classList.remove("d-none");

    }
         
});










