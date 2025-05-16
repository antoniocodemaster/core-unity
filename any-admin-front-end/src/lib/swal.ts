import Swal from 'sweetalert2';

const AppSwal = Swal.mixin({
  buttonsStyling: false,
  customClass: {
    confirmButton:
      'transition-all duration-300 mx-2 bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark focus:ring-primary',
    cancelButton:
      'transition-all duration-300 mx-2 bg-danger text-white px-4 py-2 rounded hover:bg-danger-dark focus:ring-danger',
    popup: 'rounded-md',
  },
  confirmButtonText: 'Aceptar',
  cancelButtonText: 'Cancelar',
});

export default AppSwal;
