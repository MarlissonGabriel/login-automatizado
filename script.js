document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMsg = document.getElementById('errorMsg');
    const passwordRequirements = {
        length: /(?=.{8,})/,
        lowercase: /(?=.*[a-z])/,
        uppercase: /(?=.*[A-Z])/,
        number: /(?=.*\d)/,
        specialChar: /(?=.*[@$!%*?&])/
    };

    let errorMessages = [];

    if (!passwordRequirements.length.test(password)) {
        errorMessages.push("A senha deve ter pelo menos 8 caracteres.");
    }
    if (!passwordRequirements.lowercase.test(password)) {
        errorMessages.push("A senha deve ter pelo menos uma letra minúscula.");
    }
    if (!passwordRequirements.uppercase.test(password)) {
        errorMessages.push("A senha deve ter pelo menos uma letra maiúscula.");
    }
    if (!passwordRequirements.number.test(password)) {
        errorMessages.push("A senha deve ter pelo menos um número.");
    }
    if (!passwordRequirements.specialChar.test(password)) {
        errorMessages.push("A senha deve ter pelo menos um caractere especial (@$!%*?&).");
    }

    if (errorMessages.length > 0) {
        errorMsg.textContent = errorMessages.join(' ');
    } else if (username === 'marlisson2003' && password === '@MinhaSenha1') {
        alert('Login bem-sucedido!');
    } else {
        errorMsg.textContent = 'Usuário ou senha incorretos!';
    }
});