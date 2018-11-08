
///<reference path="jquery-3.3.1.js" />

	document.getElementById('dropedItems').addEventListener('dragenter',preventD);
	document.getElementById('dropedItems').addEventListener('dragover',preventD);
	document.getElementById('dropedItems').addEventListener('drop',function (e){
	let files = e.dataTransfer.files;
	let elements = document.getElementById('showDropItems');

	for(let i=0; i<files.length; i++){
	$('<tr><td>'+
	   files[i].name + '</td>'+
	   '<td>'+
	   files[i].type + '</td>'+
	  '<td>'+
	   files[i].size + '</td></tr>').appendTo(elements);
	}
});

function preventD(e){

	e.preventDefault();
}

