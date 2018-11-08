
/// <reference path="Scripts/jquery-3.3.1.js" />

$(document).ready(function($){
$('#btnShow').click(ajaxPostData);
});

function postData(){
    let datas = $('#studentInfo').serialize();
    const xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function(ev){
        if(this.readyState == 4)
        {
           let datas =  xmlHttp.response
           let parseData = JSON.parse(datas);
          
               $('#output').append(parseData.fName+'</br>')
               $('#output').append(parseData.lName+'</br>')
               $('#output').append(parseData.email+'</br>')
               $('#output').append(parseData.mobile+'</br>')
           
        }
    }
    xmlHttp.open('POST','/studentinfo?'+datas,true);
    xmlHttp.send();
}

function ajaxPostData(){
    let txtFname = $('#txtFName').val();
    let txtLname = $('#txtLName').val();
    let txtMobile = $('#txtMobile').val();
    let txtEmail = $('#txtEmail').val();
    if(txtFname != "" && txtLname != "" && txtMobile != "" && txtEmail != "")
    {
    let datas = $('#studentInfo').serialize();
    $.ajax({
        url:'/studentinfo',
        data:datas,
        type: 'POST',
        dataType: 'JSON',
        success: function(datas){
          
               $('#output').append(datas.fName+'</br>')
               $('#output').append(datas.lName+'</br>')
               $('#output').append(datas.email+'</br>')
               $('#output').append(datas.mobile+'</br>')
        }
    }
    )} else{
        alert("Please FillUp All the Form");
    }
}