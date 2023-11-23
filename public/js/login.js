const loginForm = document.querySelector("#loginForm");

loginForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    
    const name = document.querySelector("#logName").value;
    const email = document.querySelector("#logEmail").value;
    const password = document.querySelector("#logPassword").value;
    
    const userData = {
        name: name,
        email: email,
        password: password,
    };
    
    if (userData){
        Swal.fire({
        title: 'Inicio de sesión exitoso',
        icon: 'success'
      }).then(() => {
        // Redirige a la página principal
        window.location.href = '/menu';
    });
    } else {
    Swal.fire({
      title: 'Error de inicio de sesión',
      icon: 'error'
    });
    }
});