<template>
    <footer class="my-footer">
        <div class="container">
            <div class="row">
                <div class="col-sm-12 col-md-6">
                    <h6>Chi siamo</h6>
                    <p class="text-justify">BEAUTIFLIE è creatività, design, tendenza, bellezza Made in Italy. Il rosa è
                        il colore che
                        identifica il suo spirito: il rosa è un segno di speranza, il dinamismo e la vitalità, come
                        l'energia per ideare nuove forme
                        di espressione ogni giorno. Colori, texture ed emozioni sensoriali in continua evoluzione grazie
                        a ricerca
                        scientifica, tecnologie all'avanguardia e innovazione: BEAUTIFILE è make up e skin care al top
                        per qualità.
                    </p>
                </div>

                <div class="col-xs-6 col-md-3">
                    <h6>Acquisti online</h6>
                    <ul class="footer-links">
                        <li><a href="#">Spedizioni</a></li>
                        <li><a href="#">Confezione regalo</a></li>
                        <li><a href="#">Resi e rimborsi</a></li>
                        <li><a href="#">Modalità di pagamento</a></li>
                        <li><a href="#">Condizioni di vendita</a></li>
                    </ul>
                </div>

                <div class="col-xs-6 col-md-3">
                    <h6>L'azienda</h6>
                    <ul class="footer-links">
                        <li><a href="#">Lavora con Noi</a></li>
                        <li><a href="#">Beautifile e la sostenibilità</a></li>
                        <li><a href="#">Cosmetici e test sugli animali</a></li>
                        <li><a href="#">Privacy Policy</a></li>

                    </ul>
                </div>
            </div>
            <hr>
        </div>

        <div class="container">
            <div class="row">
                <div class="col-md-8 col-sm-6 col-xs-12">
                    <p class="copyright-text">Copyright &copy; 2023 All Rights Reserved by
                        <a href="#">Beautiflie</a>.
                    </p>
                </div>

                <div class="col-md-4 col-sm-6 col-xs-12">
                    <ul class="social-icons">
                        <li><a href="#"><i class="fa-brands fa-facebook"></i></a></li>
                        <li><a href="https://www.instagram.com/beau.tflie/"><i class="fa-brands fa-instagram"></i></a></li>
                        <li><a href="#"><i class="fa-brands fa-twitter"></i></a></li>
                        <li><a href="#"><i class="fa-brands fa-youtube"></i></a></li>
                        <li><a href="#"><i class="fa-brands fa-pinterest"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
     export default {
        name: 'AppFooter',
    }
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;
.my-footer {
    background-color: black;
    padding: 45px 0 20px;
    font-size: 15px;
    line-height: 24px;
    color: #737373;
    
    min-height: 300px;
    bottom: 0px;
    left: 0px;
    right: 0px;
    margin-bottom: 0px;
}
.my-footer hr {
    border-top-color: pink;
    opacity: 0.5;
}
.my-footer hr.small {
    margin: 20px 0
}
.my-footer h6 {
    color: #fff;
    font-size: 16px;
    text-transform: uppercase;
    margin-top: 5px;
    letter-spacing: 2px
}
.my-footer a {
    color: #737373;
}
.my-footer a:hover {
    color: pink;
    text-decoration: none;
}
.footer-links {
    padding-left: 0;
    list-style: none;
}
.footer-links li {
    display: block;
}
.footer-links a {
    color: #737373;
    text-decoration: none;
}
.footer-links a:active,
.footer-links a:focus,
.footer-links a:hover {
    color: pink;
    text-decoration: none;
}

.footer-links.inline li {
    display: inline-block;
}
.copyright-text {
    margin: 0;

    a {
        color: pink;;
        text-decoration: none;
    }

    a:hover {
        color: #fff;
        text-decoration: none;
    }
}
// ICONS
.my-footer .social-icons {
    text-align: right;
}

.my-footer .social-icons a {
    width: 40px;
    height: 40px;
    line-height: 40px;
    margin-left: 6px;
    margin-right: 0;
    border-radius: 100%;
    background-color: #33353d
}
.social-icons {
    padding-left: 0;
    margin-bottom: 0;
    list-style: none
}
.social-icons li {
    display: inline-block;
    margin-bottom: 4px;
}
.social-icons li.title {
    margin-right: 15px;
    text-transform: uppercase;
    color: #fff;
    font-weight: 700;
    font-size: 13px;
}
.social-icons a {
    background-color: #fff;
    color: #fff;
    font-size: 18px;
    display: inline-block;
    line-height: 44px;
    width: 44px;
    height: 44px;
    text-align: center;
    margin-right: 8px;
    border-radius: 100%;
    -webkit-transition: all .2s linear;
    -o-transition: all .2s linear;
    transition: all .2s linear
}
.social-icons a:active,
.social-icons a:focus,
.social-icons a:hover {
    color: #fff;
    background-color: #ef0288;
}
.social-icons.size-sm a {
    line-height: 34px;
    height: 34px;
    width: 34px;
    font-size: 14px;
}
</style>