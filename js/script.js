
        $(window).load(function(){
            $("body").addClass("loaded");
            return;
            $("head").append(`
            <style>
                @media (min-width: 1000px) {
                @font-face {
                  font-family: 'Jura';
                  font-style: normal;
                  font-weight: 300;
                  src: local('Jura Light'), local('Jura-Light'), url('assets/jura.woff2') format('woff2');
                  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215, U+E0FF, U+EFFD, U+F000;
                }
                }
            </style>
            `);
        })
    