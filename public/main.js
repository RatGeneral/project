document.addEventListener('DOMContentLoaded', async () => {
    const usersTable = document.getElementById('usersTable').getElementsByTagName('tbody')[0];

    try {
        const response = await fetch('/api/users');
        if (response.ok) {
            const users = await response.json();
            users.forEach(user => {
                const newRow = usersTable.insertRow();

                newRow.insertCell().textContent = user._id;
                newRow.insertCell().textContent = user.username;
                newRow.insertCell().textContent = user.email;
                newRow.insertCell().textContent = user.password;
                newRow.insertCell().textContent = user.role;
                newRow.insertCell().textContent = user.createdAt;
                newRow.insertCell().textContent = user.updatedAt;
            });
        } else {
            throw new Error(`HTTP error: ${response.status}`);
        }
    } catch (error) {
        console.error('Error fetching users:', error);
    }
});
