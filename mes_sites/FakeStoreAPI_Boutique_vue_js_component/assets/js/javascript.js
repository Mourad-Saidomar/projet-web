import { Produit } from "./produits.js";
import ProduitsCard from "./produits_card.js";

const LIMITE_AFFICHAGE = 4;

const app = Vue.createApp({
    data() {
        return {
            produits: [],
            recherche: "",
            categorieSelectionnee: "all",
            produitsVisibles: [],
            indexAffichage: 0,
            produitSelectionne: null
        };
    },
    computed: {
        categories() {
            let listeCategories = [];
            for (let i = 0; i < this.produits.length; i++) {
                let categorie = this.produits[i].category;
                if (!listeCategories.includes(categorie)) {
                    listeCategories.push(categorie);
                }
            }
            return listeCategories;
            

        },
        produitsFiltres() {
            const valeurRecherche = this.recherche.trim().toLowerCase();

            return this.produits.filter((item) => {
                const titre = item.title.toLowerCase();
                const matchTitre = titre.includes(valeurRecherche);
                const matchCategorie =
                    this.categorieSelectionnee === "all" ||
                    item.category === this.categorieSelectionnee;

                return matchTitre && matchCategorie;
            });
        }
    },
    watch: {
        produitsFiltres() {
            this.reinitialiserAffichage();
        }
    },
    methods: {
        async chargerProduits() {
            const res = await fetch("https://fakestoreapi.com/products");
            const data = await res.json();

            this.produits = data.map((item) => {
                return new Produit(
                    item.id,
                    item.title,
                    item.price,
                    item.description,
                    item.category,
                    item.image,
                    item.rating
                );
            });
        },
        reinitialiserAffichage() {
            this.indexAffichage = 0;
            this.produitSelectionne = null;
            this.afficherProchainLot();
        },
        afficherProchainLot() {
            if (this.produitsFiltres.length === 0) {
                this.produitsVisibles = [];
                this.produitSelectionne = null;
                return;
            }

            if (this.indexAffichage >= this.produitsFiltres.length) {
                this.indexAffichage = 0;
            }

            this.produitsVisibles = this.produitsFiltres.slice(
                this.indexAffichage,
                this.indexAffichage + LIMITE_AFFICHAGE
            );

            this.indexAffichage += this.produitsVisibles.length;
        },
        afficherDetails(produit) {
            this.produitSelectionne = produit;
        },
        fermerDetails() {
            this.produitSelectionne = null;
        },
    },
    async mounted() {
        await this.chargerProduits();
    }
});

app.component("produits-card", ProduitsCard);
app.mount("#boutique");
