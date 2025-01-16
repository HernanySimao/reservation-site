import Swal from 'sweetalert2'
import 'sweetalert2/src/sweetalert2.scss'

export default defineNuxtPlugin((nuxtApp) => {
    // Toast rápido
    const toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        customClass: {
            popup: 'font-toast'
        },
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    });

    // Modal interativo (padrão SweetAlert2)
    const modal = Swal.mixin({
        customClass: {
            popup: 'font-toast',
            confirmButton: 'btn btn-success',
            cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
    });

    // Adiciona ambos toast e modal ao Nuxt
    nuxtApp.provide('swal', {
        toast, // Para toasts rápidos
        modal  // Para modais interativos
    });
});
