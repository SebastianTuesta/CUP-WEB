function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

function saveByProject(id, comment, date){
	var html = "";
	if(localStorage.getItem(id)!==null)
		html =  localStorage.getItem(id);

	if(comment !== ''){
		html =  html + "<p><b>Date</b>: <time>"+date+"</time></p><p>"+comment+"</p><hr/>";

		localStorage.setItem(id, html);
	}
}