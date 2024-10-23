fetch('https://raw.githubusercontent.com/DiegoBrntt/DiegoBrntt.github.io/main/_carruselBack.html')
    .then(response => {
        if (!response.ok) {
            throw new Error('Error al cargar el contenido');
        }
        return response.text();
    })
    .then(data => {
        document.getElementById('back').innerHTML = data;
    })
    .catch(error => {
        console.error('Error:', error);
    });