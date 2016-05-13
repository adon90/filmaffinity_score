var peliculas = $("div.movie-card-21");
var i = 0;
for (i; i < peliculas.length; i++){
	peli_url = peliculas[i].querySelector("a").href;
	$.ajax({
	  url : peli_url,
	  type : "get",
	  async: false,
	  success : function(data) {
	    score_rgx = /content="(\d(\.\d)?)"/.exec(data);
	    score = score_rgx === null ? 'TBD' : score_rgx[1];
	    info = peliculas[i].querySelector("div.mc-year-country");
	    node = document.createElement("SPAN");
	    text = document.createTextNode(" " + score);
	    node.appendChild(text);
	    node.style.color = "red";
	    node.style.fontSize = "25pt";
	    info.appendChild(node);
	  },
	  error: function() {
	     connectionError();
	  }
	});
}
