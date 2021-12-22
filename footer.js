const siteFooter = document.querySelector("footer");

const footerContent = `
<footer>
    <div class="footer">
        <ul class="footer-flex">
            <li><i class="fas fa-map-marker-alt"></i>Utrecht, The Netherlands</li>
            <li><i class="fas fa-phone"></i>+31 0681926270</li>
            <li class="footer-links"><i class="far fa-envelope"></i> <a href="mailto:contact@marketing4peers.com">contact@marketing4peers.com </a></li>
            <div class="footer-social-layout">
            <li class="footer-links"><a href="https://nl.linkedin.com/in/marketing-4-peers-695aab169"><i class="fab fa-linkedin-in"></i></a> </li>
            <li class="footer-links"><a href="https://www.facebook.com/Marketing4peers"><i class="fab fa-facebook-f"></i></a> </li>
            <li class="footer-links"><a href="mailto:contact@marketing4peers.com"><i class="far fa-envelope"></i></a> </li>
            </div>
        </ul>
        <div class="hr-align">
            <hr>
        </div>
        <div class="copyright">
            <p>Copyright 2017-2020 © Marketing 4 Peers. All rights reserved.</p>
        </div>
    </div>
    <div>
        <script src="https://apps.elfsight.com/p/platform.js" defer></script>
    <div class="elfsight-app-7c4a46be-947a-4386-aff3-4fc17cf5ddc2"></div>
    </div>
</footer>`;

siteFooter.insertAdjacentHTML("beforeend", footerContent);

export { siteFooter, footerContent };
