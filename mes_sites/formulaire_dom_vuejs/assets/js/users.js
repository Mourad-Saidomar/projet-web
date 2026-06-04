export class user {
    constructor(
        nom = "",
        prenom = "",
        email = "",
        password = "",
        confirmPassword = "",
        age = "",
        formation = ""
    ) {
        this.nom = nom;
        this.prenom = prenom;
        this.email = email;
        this.password = password;
        this.confirmPassword = confirmPassword;
        this.age = age;
        this.formation = formation;
    }
}
