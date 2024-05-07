let navbar=
`<nav class="navbar navbar-expand-lg bg-secondary navbar-dark">
    <a href="index.html" class="navbar-brand">                    
        <img class="" src="img/logo-raikoconsulting.png" alt="Image">
    </a>
    <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-between" id="navbarCollapse">
        <div class="navbar-nav ml-auto py-0">
            <a href="index.html" class="nav-item nav-link active">Inicio</a>
            <a href="about.html" class="nav-item nav-link">Portafolio</a>
            <a href="service.html" class="nav-item nav-link">Servicios</a>
            <a href="pricing.html" class="nav-item nav-link">Pricing</a>
            <div class="nav-item dropdown">
                <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">Pages</a>
                <div class="dropdown-menu border-0 rounded-0 m-0">
                    <a href="blog.html" class="dropdown-item">Blog Grid</a>
                    <a href="single.html" class="dropdown-item">Blog Detail</a>
                </div>
            </div>
            <a href="contact.html" class="nav-item nav-link">Contact</a>
        </div>
    </div>
</nav>`;

export { navbar };