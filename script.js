
    
    function redirectToHome(event) {
        event.preventDefault(); 
        window.location.href = 'dashboard.html';  
    }
    
    
    document.querySelector('form').addEventListener('submit', redirectToHome);

