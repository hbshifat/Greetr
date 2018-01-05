var obj = G$('HB', 'Shifat');

$('#login').on('click',function(){
	var lang = $('#lang').val();
	obj.setLang(lang).htmlSelector('#greeting',true);
});
