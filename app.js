document.getElementById('login-form').addEventListener('submit', async function(event) {
event.preventDefault();
const username = document.getElementById('username').value;
const password = document.getElementById('password').value;

// Send login credentials to your backend API
const response = await fetch('https://your-backend.com/login', {
method: 'POST',
headers: {
'Content-Type': 'application/json',
},
body: JSON.stringify({ username, password })
});

if (response.ok) {
document.getElementById('login-form').classList.add('hidden');
document.getElementById('logged-in').classList.remove('hidden');
} else {
alert('Login failed');
}
});

document.getElementById('connect-vpn').addEventListener('click', async function() {
// Assuming the user has logged in successfully, request VPN connection details


const response = await fetch('https://your-backend.com/connect-vpn', {
method: 'GET',
});

if (response.ok) {
const vpnConfig = await response.json();

// Create and download the OpenVPN config file
const blob = new Blob([vpnConfig.config], { type: 'application/x-openvpn-config' });
const link = document.createElement('a');
link.href = URL.createObjectURL(blob);
link.download = 'vpn-config.ovpn';
link.click();
} else {
alert('Failed to get VPN configuration');
}
});
