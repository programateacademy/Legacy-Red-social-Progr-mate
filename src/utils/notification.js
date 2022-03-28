import Swal from 'sweetalert2'

export const showErrMsg = (msg) => {
  Swal.fire({
    icon: 'warning',
    iconColor: "#ffd808",
    title: "Algo salio mal",
    text: msg,
    showConfirmButton: true,
    timer: 2500,
    timerProgressBar: true,
    confirmButtonText: "Entendido!",
    confirmButtonColor: '#ffd808',
  })
}
export const showSuccessMsg = (msg) => {
  Swal.fire({
    icon: 'success',
    title: msg,
    text: 'Bienvenido!',
    showConfirmButton: true,
    timer: 2500,
    timerProgressBar: true,
    confirmButtonText: "Entendido!",
    confirmButtonColor: '#ffd808',
  })
}

export const showSuccess = (title, msg) => {
  Swal.fire({
    icon: 'success',
    title: title,
    text: msg,
    showConfirmButton: true,
    timer: 5000,
    timerProgressBar: true,
    confirmButtonText: "Entendido!",
    confirmButtonColor: '#ffd808',
  })
}