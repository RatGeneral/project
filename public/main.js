window.addEventListener('DOMContentLoaded', async () => {
    const usersTable = document.getElementById('usersTable');

    try {
        const response = await fetch('/api/users');
        const users = await response.json();

        users.forEach(user => {
            const row = document.createElement('tr');
            
            const idCell = document.createElement('td');
            idCell.textContent = user._id;
            row.appendChild(idCell);
            
            const usernameCell = document.createElement('td');
            usernameCell.textContent = user.username;
            row.appendChild(usernameCell);

            const emailCell = document.createElement('td');
            emailCell.textContent = user.email;
            row.appendChild(emailCell);

            const passwordCell = document.createElement('td');
            passwordCell.textContent = user.password;
            row.appendChild(passwordCell);

            const roleCell = document.createElement('td');
            roleCell.textContent = user.role;
            row.appendChild(roleCell);

            const createdAtCell = document.createElement('td');
            createdAtCell.textContent = new Date(user.createdAt).toLocaleString();
            row.appendChild(createdAtCell);

            const updatedAtCell = document.createElement('td');
            updatedAtCell.textContent = new Date(user.updatedAt).toLocaleString();
            row.appendChild(updatedAtCell);

            usersTable.appendChild(row);
        });
    } catch (err) {
        console.error('Error fetching users:', err);
    }
});
