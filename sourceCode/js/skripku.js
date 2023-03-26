function salam(){
	//tangkap request form
	let frm  = window.document.getElementById("formulir");
	let mahasiswa = frm.nama.value;
	/*
	logic jika mahasiwa sudah input namanya ada salam
	jika tidak input namanya, ada pesan belum input nama
	*/
	if(mahasiswa != ""){
		alert("Selamat Pagi " + mahasiswa);
	}
	else{
		alert("Maaf Anda Belum Input Namanya");
	}
}
		
function kosongin(){
	//tangkap request form
	let frm  = window.document.getElementById("formulir");
	frm.nama.value = "";
}