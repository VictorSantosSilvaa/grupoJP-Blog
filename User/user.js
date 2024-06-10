const token = localStorage.getItem('token');

async function apiCall(url, method, data) {
  try {
    const response = await fetch(`http://10.92.198.38:8080${url}`, {
      method,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(data)
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
    alert('Error: ', error.message);
  }
}

async function getUserProfile() {
  const result = await apiCall('/user/profile', 'GET');
  renderUserProfile(result);
}

function renderUserProfile(profileData) {
  console.log(profileData);
  const profileCard = document.createElement('div');
  profileCard.className = 'profile-card';

  const profileName = document.createElement('h2');
  profileName.textContent = `Name: ${profileData.name}`;

  const profileEmail = document.createElement('p');
  profileEmail.textContent = `Email: ${profileData.email}`;

  profileCard.appendChild(profileName);
  profileCard.appendChild(profileEmail);

  document.getElementById('profile-container').appendChild(profileCard);
}

getUserProfile();
