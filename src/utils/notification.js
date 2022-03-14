import Swal from 'sweetalert2'

export const showErrMsg = (msg) => {
    Swal.fire({
    icon: 'warning',
    iconColor: "#ffd808",
    title: msg,
    showConfirmButton: true,
    timer:2500,
    timerProgressBar:true,
    confirmButtonText: "Entendido!", 
    confirmButtonColor:'#ffd808',
  })
}
export const showSuccessMsg  = (msg) => {
    Swal.fire({
    icon: 'success',
    title: msg,
    text:'Bienvenido!',
    showConfirmButton: true,
    timer:2500,
    timerProgressBar:true,
    confirmButtonText: "Entendido!", 
    confirmButtonColor:'#ffd808',
  })
}