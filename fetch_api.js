<!DOCTYPE html>
<html>
<body>
<h1>JavaScript Fetch API</h1>
<p id="demo">Fetch a file to change this text.</p>

<script>
getText('https://reqres.in/api/users');

async function getText(file) {
  let myFile = await fetch(file);
  let y = await myFile.json();
  var x = "";
  for(var i=0;i<y.data.length;i++)
    x =x + "  " + y.data[i].first_name;
  document.getElementById("demo").innerHTML = x;
}
</script>

</body>
</html>
