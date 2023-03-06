 function getDataForm(){

    let data = {};

    data.fecha=document.getElementById('FaL').value;

    data.Motivo= document.getElementById('Mo').value;

    data.justificacion= document.getElementById('Just').value;

    return data;
}
function getDataFormBanco(){

let save = {};

save.NumCuenta=document.getElementById('NuC').value;

save.TipoBanco=document.getElementById('TiB').value;

save.Beneficiarios= document.getElementById('Ben').value;

return save;

} 


