$(document).ready(function () {
	$('.header_burger').click(function (event) {
		$('.header_burger,.header_list').toggleClass('active');
		$('body').toggleClass('lock');
	});
});


 
onload=function(){
var m, k;
m=document.querySelectorAll(".iconcomm");
k=m.length;
while(k--){
m[k].onmouseleave=over;
m[k].onmouseenter=out;
};
 };
 
function over(){
this.src="images/2.png";
 };
 
function out(){
this.src="images/Pop Up21.png"
 };
