
        $(window).load(function(){
            // language
            if(navigator.language.indexOf('fr') > -1) window.location.hash = "#!page-francais";
            else window.location.hash = "#!page-english";
            // display with fade in
            $("body").addClass("loaded");
        })
        
        // window.location = "https://www.ulule.com/silex-websitebuilder/"
    