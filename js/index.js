 function addingZero(x){
	if (x<10) {
		return '0'+x;
	}
	else{
		return x;
	}
}

setInterval(function(){
	var date = new Date;
	var time = addingZero(date.getHours())+":"+addingZero(date.getMinutes())+":"+addingZero(date.getSeconds());
	document.getElementById('clock').innerHTML = time;
}, 1000)

/* var news_data=[ "Utah Temp is very hot. Please bring water", 
			"Zion is very busy, please plan accordingly",
			"Campsites for booking available only before 15 days",
			"Heavy fire danger at Yosemite",
			"Rockies now open" ];
var news_text="";
for (var i=0; i<news_data.length; i++) {
	news_text+= '<li class="news">' + news_data[i] + '</li>';
}
document.getElementbyId("news_list").innerHTML = news_text;

var link=[ "Mid Atlantic Region", "National Capital Region", "Southeast Region", "Midwest Region", "Southwest Region", 
			"Rocky Moutain Region", "Western Region", "Western Region", "Pacific Northwest and Alaska Region" ];
var link_text="";
for (var i=0; i<link.length; i++) {
	link_text+= '<li class="links"> <a class="links" href="#">' + link[i] + '</a> </li>';
}
document.getElementById("links_list").innerHTML = link_text; */ 