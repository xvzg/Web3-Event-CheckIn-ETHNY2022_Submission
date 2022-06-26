// -------------------------
// Courtesy of code-boxx.com
// -------------------------
<script>
// (A) URL SEARCH PARAMS OBJECT TO QUICKLY BUILD QUERY STRING
var query = new URLSearchParams({
  return_to : "url redirect after verification", 
  action_id : "unique verifier",
  signal : "user's wallet address"
  colors : JSON.stringify(["Red", "Green", "Blue"])
});
query.append("KEY", "VALUE"); // To append more data
 
// (B) CONVERT TO STRING, APPEND TO URL
// ?? Same as URL encoding asked for in WorldCoin doc? ??
var url = "https://id.worldcoin.org/use?" + query.toString();
console.log(url);
 
// (C) WHATEVER COMES NEXT...
// REDIRECT OR AJAX CALL OR FETCH
// window.location.href = url;
</script>
