window.onload = function mainFunction() {
    function addTargetBlank() {
        //
        // Add `target="_blank"` to each external link
        // Added 9/29/2022
        // Source: https://gist.github.com/allybee/5871749
        //

        // remove subdomain of current site's url and setup regex
        var internal = location.host.replace("www.", "");
            internal = new RegExp(internal, "i");
            
        var a = document.getElementsByTagName('a'); // then, grab every link on the page
        for (var i = 0; i < a.length; i++) {
          var href = a[i].host; // set the host of each link
          if( !internal.test(href) ) { // make sure the href doesn't contain current site's host
            a[i].setAttribute('target', '_blank'); // if it doesn't, set attributes
          }
        }
      };

    addTargetBlank()
};