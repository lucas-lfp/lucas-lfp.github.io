document.addEventListener("DOMContentLoaded", function () {
    const nav = `
    <nav>
        <ul>
            <li><a href="index.html">Accueil</a></li>
            <li><a href="experiences-pro.html">Expériences professionnelles</a></li>
            <li><a href="parcours-academique.html">Parcours académique</a></li>
            <li><a href="projets-data.html">Projets data</a></li>
            <li><a href="travaux-publications.html">Travaux et publications</a></li>
            <li><a href="contact-fr.html">Contact</a></li>
        </ul>
    </nav>
    `;
    document.body.insertAdjacentHTML('afterbegin', nav);
});