document.addEventListener("DOMContentLoaded", function () {
    const nav = `
    <nav>
        <ul>
            <li><a href="index-en.html">Home</a></li>
            <li><a href="professional-exp.html">Professional Experiences</a></li>
            <li><a href="academic-background.html">Academic Background</a></li>
            <li><a href="data-projects.html">Data Projects</a></li>
            <li><a href="scientific-publications.html">Scientific Publications</a></li>
            <li><a href="contact-en.html">Contact</a></li>
        </ul>
    </nav>
    `;
    document.body.insertAdjacentHTML('afterbegin', nav);
});