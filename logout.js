function logout() {
    Swal.fire({
        title: 'Are you sure?',
        text: "You want to log out!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#fd7e14',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, log out!'
    }).then((result) => {
        if (result.isConfirmed) {
            // Clear session or local storage
            sessionStorage.clear();
            localStorage.clear();
            
            // Optionally show a success message
            Swal.fire(
                'Logged Out!',
                'You have been logged out.',
                'success'
            ).then(() => {
                // Redirect to the home page or login page
                window.location.href = 'index.html'; // Change to your login page if applicable
            });
        }
    });
}
