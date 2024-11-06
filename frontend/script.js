const apiUrl = 'http://localhost:3000'; // URL do seu backend

// Função para registrar novo usuário
async function registerUser(event) {
    event.preventDefault();

    const username = document.getElementById('registerUsername').value;
    const password = document.getElementById('registerPassword').value;

    try {
        const response = await fetch(`${apiUrl}/users`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'Falha ao registrar usuário');
        }

        const data = await response.json();
        alert('Usuário registrado com sucesso!');
        console.log(data);
    } catch (error) {
        alert(`Erro: ${error.message}`);
    }
}

// Função para fazer login
async function loginUser(event) {
    event.preventDefault();

    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    try {
        const response = await fetch(`${apiUrl}/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'Falha ao fazer login');
        }

        const data = await response.json();
        alert('Login bem-sucedido!');
        console.log(data);
        
        // Armazena o token recebido no localStorage para futuras requisições
        localStorage.setItem('token', data.token);
    } catch (error) {
        alert(`Erro: ${error.message}`);
    }
}

// Adiciona event listeners aos formulários, caso existam na página
document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.getElementById('registerForm');
    const loginForm = document.getElementById('loginForm');

    if (registerForm) {
        registerForm.addEventListener('submit', registerUser);
    }

    if (loginForm) {
        loginForm.addEventListener('submit', loginUser);
    }
});
