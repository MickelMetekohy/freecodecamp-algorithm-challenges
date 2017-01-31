/**
 * Convert HTML Entities
 */

/**
 * Convert HTML Entities
 *
 * @param str
 * @return str
 */
function convertHTML(str) {
  return str.split("").map(function(el){
    return (/>/).test(el) ? '&gt;' : 
           (/</).test(el) ? '&lt;' : 
           (/&/).test(el) ? '&amp;' : 
           (/"/).test(el) ? '&quot;' : 
           (/'/).test(el) ? '&apos;' : el ;
  }).join("");
}

convertHTML("Dolce & Gabbana") // should return Dolce &​amp; Gabbana.
convertHTML("Hamburgers < Pizza < Tacos") // should return Hamburgers &​lt; Pizza &​lt; Tacos.
convertHTML("Sixty > twelve") // should return Sixty &​gt; twelve.
convertHTML('Stuff in "quotation marks"') // should return Stuff in &​quot;quotation marks&​quot;.
convertHTML("Shindler's List") // should return Shindler&​apos;s List.
convertHTML("<>") // should return &​lt;&​gt;.
convertHTML("abc") // should return abc.