
//lista a neten
function getData(){
    $.getJSON("data.json",function (json){
        data=json.data;
        console.log(data);
        // let img_holder=document.getElementById("img_holder")
        // for (let i = 0; i<data.length; i++) {
        //     img_holder.innerHTML+=
        //     '<div class="col-sm-12 col-md-6 col-lg-4">'+
        //         '<div class="image" id="kep'+i+'"></div>'+
        //     '</div>';  
    })
}
//meghívásisorrend
getData();