  //arrow funcion
const validar=()=>{
      const tip_id=document.querySelector("#tip_id");
      if (tip_id.value.length==0) {
        Swal.fire({
  icon: 'error',
  title: 'Error',
  text: 'Campo Obligatorio!',
});              
 return false;

      }
    if (mov_fecha.value.length==0) {
        Swal.fire({
  icon: 'error',
  title: 'Error',
  text: 'Campo Obligatorio!',
});              
 return false;

      }
      if (mov_detalle.value.length==0) {
        Swal.fire({
  icon: 'error',
  title: 'Error',
  text: 'Campo Obligatorio!',
});              
 return false;

      }
      if (mov_cantidad.value.length==0) {
        Swal.fire({
  icon: 'info',
  title: 'Error',
  text: 'Campo Obligatorio!',
});              
 return false;

      }
      if (mov_tipo.value.length==0) {
        Swal.fire({
  icon: 'error',
  title: 'Error',
  text: 'Campo Obligatorio!',
});              
 return false;

      }
     
     
     
     

}  

 





