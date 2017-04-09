var c=0;
var area = new Object ();
function myFunction() {
	c++;
    document.getElementById("demo").innerHTML = "Count = "+c;
}
function myFunction2() {
	var x = document.getElementById("myForm").elements[0].value;
	var y = document.getElementById("myForm").elements[1].value;
	var z = document.getElementById("myForm").elements[2].value;
	if(y=='')
		y = "default";
	if(z=='')
		z = "default"
    // document.getElementById("demo2").innerHTML = x + y + z;
    if(y in area)
    {
    	if(z in area[y])
    	{
    		(area[y])[z].push(x);
    	}
    	else
    	{
    		(area[y])[z]=[];
    		(area[y])[z].push(x);
    	}
    }
    else
    {
    	area[y]=new Object();
    	if(z in area[y])
    	{

    	}
    	else
    	{
    		(area[y])[z]=[];
    		(area[y])[z].push(x);
    	}
    }

    // document.getElementById("demo2").innerHTML = ((area[y])[z])[0];
	document.getElementById("demo2").innerHTML ="";
	document.getElementById("demo2").innerHTML +="interests<br><br>";
    for(var a in area)
    {
    	document.getElementById("demo2").innerHTML +="&nbsp;&nbsp;"+ a+"<br><br>";
	  	var facultyd = area[a];
		for(var f in facultyd)
		{
			document.getElementById("demo2").innerHTML +="&nbsp;&nbsp;&nbsp;&nbsp;"+f + "<br>";
			var studentarr = facultyd[f];
			for(var s in studentarr)
			{
				var student = studentarr[s];
				document.getElementById("demo2").innerHTML += "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;stud"+s+"&nbsp;"+student+"<br>";
			}
			document.getElementById("demo2").innerHTML +="&nbsp;&nbsp;&nbsp;&nbsp;" + f + "<br><br>";

		}
		document.getElementById("demo2").innerHTML += "&nbsp;&nbsp;"+a+"<br><br><br><br>";
	}
	document.getElementById("demo2").innerHTML += "interests<br>";
}