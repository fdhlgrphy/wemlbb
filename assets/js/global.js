function welcomeMsg() {
    const welcomeMsgEl = document.querySelector("#welcomeMsg");
    let array = 0;

    const takapedia = `<a href="https://msha.ke/takapedia/" target="_blank">takapedia</a>`;
    const IG = `<a href="https://www.instagram.com/manxtodd/" target="_blank">manxtodd</a>`;
    const WA = `<a href="https://api.whatsapp.com/send?phone=6288231715470?text=Bang+Bagi+Bokep" target="_blank">whatsapp</a>`;
    const githubGw = `<a href="https://github.com/mann-x/" target="_blank">github</a>`

    const msg1 = `<p class="animation mb-0 text-truncate">JOKI, TOP UP & GIFT SKIN ML di ${takapedia} ya [StevenJohns]</p>`;
    const msg2 = `<p class="animation mb-0 text-truncate">Hubungi Gw Di IG: ${IG} / WA: ${WA}</p>`;
    const msg3 = `<p class="animation mb-0 text-truncate">Inget! WR Sebatas Angka Ya.</p>`;
    const msg4 = `<p class="animation mb-0 text-truncate">Follow ${githubGw} gw juga ya</p>`;
    const msg5 = `<p class="animation mb-0 text-truncate">Jangan lupa follow sosmed gua dibawah ya</p>`;

    let arrayEl = [msg1, msg2, msg3, msg4, msg5];
    let arrayMax = 5;
    setInterval(() => {
        welcomeMsgEl.innerHTML = arrayEl[array];

        array++;
        if (array >= arrayMax) {
            array = 0;
        }
    }, 4000);
}
