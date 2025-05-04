document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.contact-form');
    
    // Validación de formulario
    if (form) {
        const savedFormData = JSON.parse(localStorage.getItem('formData')) || {};
        Object.keys(savedFormData).forEach(key => {
            const field = document.getElementById(key);
            if (field) field.value = savedFormData[key];
        });
        
        form.addEventListener('input', function(e) {
            if (e.target.tagName === 'INPUT') {
                const formData = {
                    nombre: document.getElementById('nombre').value,
                    apellido: document.getElementById('apellido').value,
                    email: document.getElementById('email').value,
                    telefono: document.getElementById('telefono').value
                };
                localStorage.setItem('formData', JSON.stringify(formData));
            }
        });
        
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const nombre = document.getElementById('nombre').value.trim();
            const apellido = document.getElementById('apellido').value.trim();
            const email = document.getElementById('email').value.trim();
            const telefono = document.getElementById('telefono').value.trim();
            
            let isValid = true;
            
            document.querySelectorAll('.error-message').forEach(el => el.remove());
            
            if (!nombre) {
                showError('nombre', 'Por favor ingresa tu nombre');
                isValid = false;
            }
            
            if (!apellido) {
                showError('apellido', 'Por favor ingresa tu apellido');
                isValid = false;
            }
            
            if (!email) {
                showError('email', 'Por favor ingresa tu email');
                isValid = false;
            } else if (!isValidEmail(email)) {
                showError('email', 'Por favor ingresa un email válido');
                isValid = false;
            }
            
            if (telefono) {
                const digitsOnly = telefono.replace(/\D/g, '');
                if (digitsOnly.length < 7) {
                    showError('telefono', 'El teléfono debe tener al menos 7 dígitos');
                    isValid = false;
                } else if (!isValidPhone(telefono)) {
                    showError('telefono', 'Por favor ingresa un teléfono válido');
                    isValid = false;
                }
            }
            
            if (isValid) {
                showSuccessPopup();
                form.reset();
                localStorage.removeItem('formData');
            }
        });
    }
    
    // Modo oscuro/claro
    const darkModeToggle = document.createElement('button');
    darkModeToggle.id = 'dark-mode-toggle';
    document.body.insertBefore(darkModeToggle, document.body.firstChild);
    
    updateDarkModeButton();
    
    darkModeToggle.addEventListener('click', function() {
        const isDarkMode = document.body.classList.toggle('dark-mode');
        localStorage.setItem('darkMode', isDarkMode ? 'enabled' : 'disabled');
        updateDarkModeButton();
    });
    
    function updateDarkModeButton() {
        const isDarkMode = document.body.classList.contains('dark-mode');
        darkModeToggle.textContent = isDarkMode ? '☀️ Modo Claro' : '🌙 Modo Oscuro';
    }
    
    if (localStorage.getItem('darkMode') === 'enabled') {
        document.body.classList.add('dark-mode');
        updateDarkModeButton();
    }

    // Creación de contenido dinámico (tarjetas de proyectos)
    const proyectos = [
        {
            img: 'assets/images/luna.jpg',
            title: 'App: Herramienta para acompañar a personas gestantes',
            description: 'Aplicación que permite a las personas gestantes llevar un control de su embarazo, con un calendario y opción de añadir notas.'
        },
        {
            img: 'assets/images/chat-live.jpg',
            title: 'Room de chat en vivo',
            description: 'Una vista dentro de un sitio web que permite a los usuarios chatear en tiempo real. Utiliza WebSockets para la comunicación en tiempo real.'
        }
    ];

    const tarjetasContainer = document.querySelector('.tarjetas-container');
    tarjetasContainer.innerHTML = '';
    proyectos.forEach(proyecto => {
        const tarjeta = document.createElement('article');
        tarjeta.className = 'tarjeta';
        tarjeta.innerHTML = `
            <img src="${proyecto.img}" alt="${proyecto.title}" />
            <h3>${proyecto.title}</h3>
            <p>${proyecto.description}</p>
        `;
        tarjetasContainer.appendChild(tarjeta);
    });

    // Ocultar/mostrar contenido (sección de habilidades)
    const habilidadesSection = document.querySelector('#habilidades');
    const toggleHabilidadesBtn = document.createElement('button');
    toggleHabilidadesBtn.textContent = 'Ocultar Habilidades';
    toggleHabilidadesBtn.className = 'toggle-habilidades-btn';
    habilidadesSection.insertBefore(toggleHabilidadesBtn, habilidadesSection.firstChild);

    toggleHabilidadesBtn.addEventListener('click', function() {
        const habilidadesContent = document.querySelector('.habilidades-container');
        const isHidden = habilidadesContent.style.display === 'none';
        habilidadesContent.style.display = isHidden ? 'flex' : 'none';
        toggleHabilidadesBtn.textContent = isHidden ? 'Ocultar Habilidades' : 'Mostrar Habilidades';
    });
});

function showSuccessPopup() {
    const popup = document.createElement('div');
    popup.className = 'success-popup';
    popup.innerHTML = `
        <div class="popup-content">
            <span class="close-popup">×</span>
            <p>¡Formulario enviado correctamente!</p>
        </div>
    `;
    
    document.body.appendChild(popup);
    
    popup.addEventListener('click', function(e) {
        if (e.target.classList.contains('close-popup') || e.target === popup) {
            popup.remove();
        }
    });
    
    setTimeout(() => {
        popup.remove();
    }, 3000);
}

function showError(fieldId, message) {
    const field = document.getElementById(fieldId);
    const error = document.createElement('div');
    error.className = 'error-message';
    error.textContent = message;
    error.style.color = 'red';
    error.style.fontSize = '0.8rem';
    error.style.marginTop = '0.25rem';
    field.insertAdjacentElement('afterend', error);
}

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPhone(phone) {
    return /^[0-9+\-() ]+$/.test(phone);
}