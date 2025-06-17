import { route } from '../route'
import './style.css'
const app = document.getElementById('app')
const API_URL=import.meta.env.VITE_API_URL
console.log(import.meta.env.VITE_API_URL);



function showError(message) {
  const oldError = document.querySelector('.error-message');
  if (oldError) {
    oldError.remove();
  }

  // Créer le nouveau message d'erreur
  const errorDiv = document.createElement('div');
  errorDiv.className = 'error-message flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg mb-4 transition-all duration-500 ease-in-out';
  errorDiv.innerHTML = `
    <i class="fas fa-info-circle"></i>
    <span>${message}</span>
  `;

  const container = document.querySelector('.container');
  if (container) {
    container.insertBefore(errorDiv, container.firstChild);

    setTimeout(() => {
      errorDiv.classList.add('opacity-0');
      setTimeout(() => errorDiv.remove(), 500);
    }, 3000);
  }
}



export function afficherPageConnexion (){
  
  app.innerHTML = `<div class="container w-[490px] h-[490px] bg-black rounded shadow-2xl shadow-emerald-400 flex justify-center items-center flex-col gap-10">
  <p class="text-white text-3xl">Connectez - Vous <i class="fa-brands fa-square-whatsapp text-green-500 text-3xl "></i>
  </p>
  <div class="flex-row">
  
  </div>
  <div class="flex-row">
  <label for="phone" class="flex block text-sm font-medium text-white text-2xl">Téléphone</label>
  <input type="tel" id="phone" class="w-[310px] mt-1 w-full border border-gray-300 rounded-lg p-2 hover:border-green-500 transition-colors" placeholder="Entrez votre numéro" />
  </div>
  <button id="connect" type="submit" class="w-[310px] bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg hover:scale-105 transition-transform">
  Se connecter
  </button>
  <h2 class="text-white hover:text-green-400 transition-colors cursor-pointer" id="createAccount">Créer un compte</h2>
  </div>
  </div>`
  ;
   const connect = document.getElementById('connect');
  if (connect) {
    connect.addEventListener('click', async () => {
      let phone = document.getElementById('phone').value.trim();
      
      if (!phone) {
        showError('Veuillez entrer un numéro de téléphone');
        return;
      }

      if (!phone.startsWith('+')) {
        phone = '+' + phone;
      }

      try {
        const response = await fetch(`${API_URL}/users`);
        const users = await response.json();
        
        console.log('Numéro recherché:', phone);
        console.log('Utilisateurs disponibles:', users);

        const user = users.find(u => u.phone === phone);
        
        if (user) {
          console.log('Utilisateur trouvé:', user);
          showError('Connexion réussie !');
          
          localStorage.setItem('currentUser', JSON.stringify(user));
          
          setTimeout(() => {
            route('/chat');
            displayContacts(); // Ajouter cette ligne
          }, 2000);
        } else {
          console.log('Aucun utilisateur trouvé avec ce numéro');
          showError('Numéro non reconnu. Veuillez créer un compte');
        }
      } catch (error) {
        console.error('Erreur:', error);
        showError('Erreur lors de la connexion au serveur');
      }
    });
  }
          const compte = document.getElementById('createAccount');

          compte.addEventListener('click', () => {
            route('/accOunt'); 
          });
        }
export function accOunt (){
  app.innerHTML=` <div class="container w-[490px] h-[600px] bg-black rounded shadow-2xl shadow-emerald-400 flex justify-center items-center flex-col gap-6">
        <p class="text-white text-3xl">Créer un compte <i class="fa-brands fa-square-whatsapp text-green-500 text-3xl"></i></p>
        <div class="flex-row">
        <label for="name" class="flex block text-sm font-medium text-white text-2xl">Nom</label>
        <input type="text" id="name" class="w-[300px] mt-1 border border-gray-300 rounded-lg p-2 hover:border-green-500 transition-colors" placeholder="Entrez votre nom" required />
        </div>
        
        <div class="flex-row">
        <label for="firstname" class="flex block text-sm font-medium text-white text-2xl">Prénom</label>
        <input type="text" id="firstname" class="w-[300px] mt-1 border border-gray-300 rounded-lg p-2 hover:border-green-500 transition-colors" placeholder="Entrez votre prénom" required />
        </div>
        <div class="flex-row">
        <label for="country" class="flex block text-sm font-medium text-white text-2xl">Pays</label>
            <select id="country" class="w-[300px] mt-1 border border-gray-300 rounded-lg p-2 hover:border-green-500 transition-colors" required>
                <option value="">Sélectionnez un pays</option>
                <option value="+221">Sénégal 🇸🇳 (+221)</option>
                <option value="+225">Côte d'Ivoire 🇨🇮 (+225)</option>
                <option value="+33">France 🇫🇷 (+33)</option>
                <option value="+237">Cameroun 🇨🇲 (+237)</option>
                <option value="+223">Mali 🇲🇱 (+223)</option>
                <option value="+226">Burkina Faso 🇧🇫 (+226)</option>
                </select>
                </div>
                <div class="flex-row">
                <label for="phone" class="flex block text-sm font-medium text-white text-2xl">Téléphone</label>
                <div class="flex gap-2">
                <span id="selectedCode" class="w-[60px] mt-1 bg-gray-100 border border-gray-300 rounded-lg p-2 text-center"></span>
                <input type="tel" id="phone" class="w-[240px] mt-1 border border-gray-300 rounded-lg p-2 hover:border-green-500 transition-colors" placeholder="Numéro" required />
                </div>
                </div>
                <button type="submit" class="w-[300px] bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg hover:scale-105 transition-transform">
                S'inscrire
                </button>
        <a href="index.html" class="text-white hover:text-green-400 transition-colors cursor-pointer">
            Déjà un compte ? Se connecter
        </a>
    </div>`
    const inscriptionButton = document.querySelector('button[type="submit"]');
  if (inscriptionButton) {
    inscriptionButton.addEventListener('click', async (e) => {
      e.preventDefault();
      
      const name = document.getElementById('name').value.trim();
      const firstname = document.getElementById('firstname').value.trim();
      const country = document.getElementById('country').value;
      const phone = document.getElementById('phone').value.trim();

      if (!name || !firstname || !country || !phone) {
        showError('Veuillez remplir tous les champs');
        return;
      }
      const fullPhone = country + phone;

      try {
        const checkUser = await fetch(`${API_URL}/users?phone=${fullPhone}`);
        const existingUser = await checkUser.json();

        if (existingUser.length > 0) {
          showError('Ce numéro est déjà utilisé');
          return;
        }
        const response = await fetch(`${API_URL}/users`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name,
            firstname,
            phone: fullPhone,
            status: 'Hey ! J\'utilise WhatsApp',
            avatar: '',
            createdAt: new Date().toISOString()
          })
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        showError('Compte créé avec succès !');
        
        setTimeout(() => {
          route('/connexion');
        }, 2000);

      } catch (error) {
        console.error('Erreur:', error);
        showError('Erreur lors de l\'inscription');
      }
    });
  }
  }
  document.addEventListener("DOMContentLoaded",() =>{
   route ("/connexion")
  })
 export function chat (){
    app.innerHTML =`<div class="container flex w-[1500px] h-[900px]  bg-gray-950">

    <div class="barre flex justify-between   flex-col w-[80px] h-[900px] border-2 border-[#1D1F1F] bg-[#1D1F1F]">
        <div class="icones  flex flex-col items-center gap-4 w-[60pw] h-[300px] ">
            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="white" class="bi bi-chat-text-fill" viewBox="0 0 16 16">
                <path d="M16 8c0 3.866-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7M4.5 5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1zm0 2.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1zm0 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1z"/>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 24 24">
                <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="gray">
                <path d="M12 2c5.524 0 10 4.478 10 10s-4.476 10-10 10m-3-.5a11 11 0 0 1-3.277-1.754m0-15.492A11.3 11.3 0 0 1 9 2.5m-7 7.746a9.6 9.6 0 0 1 1.296-3.305M2 13.754a9.6 9.6 0 0 0 1.296 3.305"/>
                <path d="M8 16.5c2.073-2.198 5.905-2.301 8 0m-1.782-6.75c0 1.243-.996 2.25-2.226 2.25s-2.225-1.007-2.225-2.25s.996-2.25 2.226-2.25s2.225 1.007 2.225 2.25"/>
                </g></svg>
                <svg fill="gray" width="30" height="30" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12,10a1,1,0,0,0-1,1v4a1,1,0,0,0,2,0V11A1,1,0,0,0,12,10ZM8,13a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V14A1,1,0,0,0,8,13ZM12,2A10,10,0,0,0,2,12a9.89,9.89,0,0,0,2.26,6.33l-2,2a1,1,0,0,0-.21,1.09A1,1,0,0,0,3,22h9A10,10,0,0,0,12,2Zm0,18H5.41l.93-.93a1,1,0,0,0,.3-.71,1,1,0,0,0-.3-.7A8,8,0,1,1,12,20ZM16,8a1,1,0,0,0-1,1v6a1,1,0,0,0,2,0V9A1,1,0,0,0,16,8Z"/>
                    </svg>
                    <i class="bi bi-people text-[#808181] text-2xl cursor-pointer" id="groupMenuIcon"></i>
        </div>
        <div class="icons flex items-center  flex-col gap-16 w-[60pw] h-[150px]">
            <svg id="paramIcon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" class="cursor-pointer hover:opacity-75">
              <g fill="gray" stroke="#3D3E3E" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066-2.573c-.94-1.543.826-3.31 2.37-2.37c1 .608 2.296.07 2.572-1.065"/>
                <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0-6 0"/>
              </g>
            </svg>
            <div class="w-[30px] h-[30px] rounded-full border-green-500 border-2"></div>
        </div>
    </div>
    <div class="contact flex items-center flex-col w-[500px] h-[900px] bg-[#161717] border-2 border-[#2c2c2c]">
        <div class= " flex flex-row   justify-between w-[490px] h-[50px]  items-center ">
            <h2 class="text-white  items-center flex size-10">WhatsApp</h2>
                <div class="ins  w-[120px] h-[50px]   gap-6 flex  items-center  justify-center">
                    <i class="bi bi-three-dots-vertical text-white "></i>
                    <i id="ajout" class="fa-solid fa-square-plus text-white"></i>
                </div>
        </div>
        <div class="search w-[480px] h-[90px]  flex justify-center items-center ">
                <div class="relative">
                    <i class="bi bi-search text-white absolute left-2 top-4" ></i>
                <input class="w-[450px] h-[20px] bg-[#2D2E2E] rounded-full border-2  border-gray-900 p-6 text-lg transition duration-200 hover:border-green-700 focus:outline-none" type="text" placeholder="Rechercher ou démarrer une discussion" >
                </div>   
        </div>
            <div class=" flex  gap-2  flex-row w-[470px] h-[60Px] ">
                <div class="  flex items-center  justify-center w-[100px] h-[40px] hover:bg-gray-800 border-[#2D2E2E] border-2 rounded-full">
                    <h3 class="text-[#797A7A]">Toutes</h3>
                </div>
                <div class=" flex items-center  justify-center hover:bg-gray-800 w-[100px] h-[40px] border-[#2D2E2E] border-2 rounded-full">
                    <h3 class="text-[#797A7A]">Non Lues</h3>

                </div>
                <div class=" flex items-center  justify-center w-[100px] h-[40px] hover:bg-gray-800 border-[#2D2E2E] border-2 rounded-full">
                    <h3 class="text-[#797A7A]">Favories</h3>

                </div>
                <div class="  flex items-center  justify-center w-[100px] h-[40px] hover:bg-gray-800 border-[#2D2E2E] border-2 rounded-full">
                    <h3 class="text-[#797A7A]">Groupes</h3>
                </div>
            </div>
          <div></div>   
    </div>
    <div class="chat w-[920px] h-[900px]  bg-[#161717] border-2 border-[#2c2c2c]"></div>
  </div>`
  const paramIcon = document.getElementById('paramIcon');
  if (paramIcon) {
    paramIcon.addEventListener('click', () => {
      showParameters();
    });
  }
  const ajoutButton = document.getElementById('ajout');
  if (ajoutButton) {
    ajoutButton.addEventListener('click', () => {
      ajoutContactGroup();
    });
  }
  const chatIcon = document.querySelector('.bi-chat-text-fill');
  if (chatIcon) {
    chatIcon.addEventListener('click', () => {
      showNewDiscussion();
    });
  }
  const groupIcon = document.getElementById('groupMenuIcon');
  if (groupIcon) {
    groupIcon.addEventListener('click', () => {
      console.log('Icône cliquée');
      showGroupMenu();
    });
  }
}
function showOptionsMenu() {
  const contentDiv = document.querySelector('.contact > div:last-child');
  if (!contentDiv) return;
  contentDiv.innerHTML = `
    <div class="w-full h-full bg-[#161717]">
      <div class="flex items-center gap-4 p-6 border-b border-[#2c2c2c]">
        <i class="fas fa-arrow-left text-white cursor-pointer" id="backButton"></i>
        <h2 class="text-white text-xl">Nouvelle discussion</h2>
      </div>

      <div class="menu-options">
        <div class="flex items-center gap-4 p-4 hover:bg-[#2c2c2c] cursor-pointer border-b border-[#2c2c2c]" id="newGroupBtn">
          <div class="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center">
            <i class="fas fa-users text-white text-xl"></i>
          </div>
          <div>
            <h3 class="text-white text-lg">Nouveau groupe</h3>
            <p class="text-gray-400 text-sm">Créer un groupe de discussion</p>
          </div>
        </div>

        <div class="flex items-center gap-4 p-4 hover:bg-[#2c2c2c] cursor-pointer border-b border-[#2c2c2c]" id="newContactBtn">
          <div class="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center">
            <i class="fas fa-user-plus text-white text-xl"></i>
          </div>
          <div>
            <h3 class="text-white text-lg">Nouveau contact</h3>
            <p class="text-gray-400 text-sm">Ajouter un nouveau contact</p>
          </div>
        </div>
      </div>
    </div>
  `;
  document.getElementById('backButton')?.addEventListener('click', () => {
    contentDiv.innerHTML = '';
    displayContacts();
  });
  document.getElementById('newGroupBtn')?.addEventListener('click', () => {
    showCreateGroup();
  });
  document.getElementById('newContactBtn')?.addEventListener('click', () => {
    ajoutContactGroup();
  });
  console.log('Menu options affiché'); 
}
export function ajoutContactGroup() {
  const contentDiv = document.querySelector('.contact > div:last-child');

  contentDiv.innerHTML = `
    <div class="w-full bg-[#161717] p-6">
      <div class="flex items-center gap-4 mb-6">
        <i class="fas fa-arrow-left text-white cursor-pointer" id="backButton"></i>
        <h2 class="text-white text-xl">Ajouter un contact</h2>
      </div>
      
      <form id="addContactForm" class="flex flex-col gap-4">
        <div>
          <label class="text-white mb-2 block">Prénom</label>
          <input type="text" id="contactFirstname"  
            class="w-full bg-[#2D2E2E] text-white p-2 rounded-lg border border-gray-600 focus:border-green-500 focus:outline-none"
            placeholder="Entrez le prénom">
        </div>

        <div>
          <label class="text-white mb-2 block">Nom</label>
          <input type="text" id="contactLastname"  
            class="w-full bg-[#2D2E2E] text-white p-2 rounded-lg border border-gray-600 focus:border-green-500 focus:outline-none"
            placeholder="Entrez le nom">
        </div>

        <div>
          <label class="text-white mb-2 block">Numéro de téléphone</label>
          <div class="flex gap-2">
            <span class="w-[80px] bg-[#2D2E2E] text-white p-2 rounded-lg border border-gray-600 text-center">
              +221
            </span>
            <input type="tel" id="contactPhone" required 
              class="flex-1 bg-[#2D2E2E] text-white p-2 rounded-lg border border-gray-600 focus:border-green-500 focus:outline-none"
              placeholder="7X XXX XX XX"
              pattern="[7][0-9]{8}"
              maxlength="9">
          </div>
          <p class="text-gray-400 text-sm mt-1">Format: 7X XXX XX XX</p>
        </div>
        
        <button type="submit" 
          class="bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition-colors mt-4">
          Ajouter le contact
        </button>
      </form>
    </div>
  `;
  const backButton = document.getElementById('backButton');
  backButton.addEventListener('click', () => {
    contentDiv.innerHTML = '';
    displayContacts(); 
  });
  const form = document.getElementById('addContactForm');
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const firstname = document.getElementById('contactFirstname').value.trim();
    const lastname = document.getElementById('contactLastname').value.trim();
    const phone = document.getElementById('contactPhone').value.trim();

    if (!firstname || !lastname || !phone) {
      showError('Veuillez remplir tous les champs');
      return;
    }
    const fullPhone = '+221' + phone;
    try {
      const allUsersResponse = await fetch(`${API_URL}/users`);
      const allUsers = await allUsersResponse.json();
      console.log('Tous les utilisateurs:', allUsers);
      console.log('Numéro recherché:', fullPhone);
      const userExists = allUsers.some(user => {
        const userPhone = user.phone.replace(/\s+/g, ''); 
        const searchPhone = fullPhone.replace(/\s+/g, ''); 
        console.log('Comparaison:', userPhone, searchPhone);
        return userPhone === searchPhone;
      });

      if (!userExists) {
        showError('Ce numéro n\'existe pas dans WhatsApp');
        return;
      }
      const currentUser = JSON.parse(localStorage.getItem('currentUser'));
      const addContactResponse = await fetch(`${API_URL}/contacts`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          userId: currentUser.id,
          firstname,
          lastname,
          phone: fullPhone,
          createdAt: new Date().toISOString()
        })
      });

      if (!addContactResponse.ok) {
        throw new Error('Erreur lors de l\'ajout du contact');
      }

      const newContact = await addContactResponse.json();
      console.log('Contact ajouté:', newContact);

      showError('Contact ajouté avec succès !');
      setTimeout(() => {
        contentDiv.innerHTML = '';
        displayContacts();
      }, 2000);

    } catch (error) {
      console.error('Erreur:', error);
      showError('Erreur lors de l\'ajout du contact');
    }
});
}
async function displayContacts() {
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));
  const contactsDiv = document.querySelector('.contact > div:last-child');
  const chatDiv = document.querySelector('.chat');
  try {
    const response = await fetch(`${API_URL}/contacts?userId=${currentUser.id}`);
    const contacts = await response.json();

    if (contacts.length === 0) {
      contactsDiv.innerHTML = `
        <div class="text-gray-400 text-center p-4">
          Aucun contact pour le moment
        </div>
      `;
      return;
    }
    contacts.sort((a, b) => a.firstname.localeCompare(b.firstname));
    contactsDiv.innerHTML = contacts.map(contact => `
      <div class="contact-item flex items-center gap-4 p-4 hover:bg-[#2c2c2c] cursor-pointer border-b border-[#2c2c2c] w-[500px]" 
           data-phone="${contact.phone}" 
           data-firstname="${contact.firstname}"
           data-lastname="${contact.lastname}">
        <div class="w-12 h-12 rounded-full bg-gray-600 flex items-center justify-center">
          <span class="text-white text-lg">${contact.firstname[0].toUpperCase()}</span>
        </div>
        <div>
          <h3 class="text-white">${contact.firstname} ${contact.lastname}</h3>
          <p class="text-gray-400 text-sm">${contact.phone}</p>
        </div>
      </div>
    `).join('');
    const contactItems = document.querySelectorAll('.contact-item');
    contactItems.forEach(item => {
      item.addEventListener('click', () => {
        const firstname = item.dataset.firstname;
        const lastname = item.dataset.lastname;
        const phone = item.dataset.phone;
        chatDiv.innerHTML = `
          <div class="flex flex-col h-full">
            <div class="chat-header w-full h-[70px] bg-[#202020] border-b border-[#2c2c2c] flex items-center px-4">
              <div class="flex items-center gap-4">
                <div class="w-12 h-12 rounded-full bg-gray-600 flex items-center justify-center">
                  <span class="text-white text-lg">${firstname[0].toUpperCase()}</span>
                </div>
                <div>
                  <h3 class="text-white text-lg">${firstname} ${lastname}</h3>
                  <p class="text-gray-400 text-sm">${phone}</p>
                </div>
              </div>
            </div>

            <div class="chat-messages flex-1 overflow-y-auto p-4 bg-[#161717]" style="height: calc(100% - 140px);">
              <!-- Les messages s'afficheront ici -->
            </div>

            <div class="chat-input w-full h-[70px] bg-[#202020] border-t border-[#2c2c2c] flex items-center px-4 gap-4 mt-auto">
              <input type="text" 
                class="flex-1 bg-[#2D2E2E] text-white p-3 rounded-lg border border-gray-600 focus:border-green-500 focus:outline-none"
                placeholder="Tapez un message">
              <button class="bg-green-500 text-white p-3 rounded-lg hover:bg-green-600 transition-colors">
                <i class="fas fa-paper-plane"></i>
              </button>
            </div>
          </div>
        `;
        contactItems.forEach(c => c.classList.remove('bg-[#2c2c2c]'));
        item.classList.add('bg-[#2c2c2c]');
      });
    });
  } catch (error) {
    console.error('Erreur:', error);
    showError('Erreur lors du chargement des contacts');
  }
}
export function showParameters() {
  const contactDiv = document.querySelector('.contact > div:last-child');
  const chatDiv = document.querySelector('.chat');
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));

  contactDiv.innerHTML = `
    <div class="w-full h-full bg-[#161717]">
      <div class="flex items-center gap-4 p-6 border-b border-[#2c2c2c]">
        <i class="fas fa-arrow-left text-white cursor-pointer" id="backButton"></i>
        <h2 class="text-white text-xl">Paramètres</h2>
      </div>
      <div class="flex items-center gap-4 p-6 border-b border-[#2c2c2c]">
        <div class="w-14 h-14 rounded-full bg-gray-600 flex items-center justify-center">
          <span class="text-white text-2xl">${currentUser.firstname[0].toUpperCase()}</span>
        </div>
        <div>
          <h3 class="text-white text-lg">${currentUser.firstname} ${currentUser.name}</h3>
          <p class="text-gray-400">${currentUser.status || "Hey ! J'utilise WhatsApp"}</p>
        </div>
      </div>
      <div class="menu-options">
        <div class="flex items-center gap-4 p-6 hover:bg-[#2c2c2c] cursor-pointer border-b border-[#2c2c2c]">
          <div class="w-10 h-10 rounded-lg bg-[#2c2c2c] flex items-center justify-center">
            <i class="fas fa-key text-[#797A7A]"></i>
          </div>
          <div>
            <h3 class="text-white">Compte</h3>
            <p class="text-gray-400 text-sm">Notifications de sécurité, informations...</p>
          </div>
        </div>

        <div class="flex items-center gap-4 p-6 hover:bg-[#2c2c2c] cursor-pointer border-b border-[#2c2c2c]">
          <div class="w-10 h-10 rounded-lg bg-[#2c2c2c] flex items-center justify-center">
            <i class="fas fa-lock text-[#797A7A]"></i>
          </div>
          <div>
            <h3 class="text-white">Confidentialité</h3>
            <p class="text-gray-400 text-sm">Contacts bloqués, messages éphémères</p>
          </div>
        </div>

        <div class="flex items-center gap-4 p-6 hover:bg-[#2c2c2c] cursor-pointer border-b border-[#2c2c2c]">
          <div class="w-10 h-10 rounded-lg bg-[#2c2c2c] flex items-center justify-center">
            <i class="fas fa-bell text-[#797A7A]"></i>
          </div>
          <div>
            <h3 class="text-white">Notifications</h3>
            <p class="text-gray-400 text-sm">Notifications de messages</p>
          </div>
        </div>

        <div class="flex items-center gap-4 p-6 hover:bg-[#2c2c2c] cursor-pointer border-b border-[#2c2c2c]">
          <div class="w-10 h-10 rounded-lg bg-[#2c2c2c] flex items-center justify-center">
            <i class="fas fa-question-circle text-[#797A7A]"></i>
          </div>
          <div>
            <h3 class="text-white">Aide</h3>
            <p class="text-gray-400 text-sm">Centre d'aide, contactez-nous</p>
          </div>
        </div>

        <div class="flex items-center gap-4 p-6 hover:bg-[#2c2c2c] cursor-pointer text-red-500" id="logoutBtn">
          <div class="w-10 h-10 rounded-lg bg-[#2c2c2c] flex items-center justify-center">
            <i class="fas fa-sign-out-alt"></i>
          </div>
          <h3>Se déconnecter</h3>
        </div>
      </div>
    </div>
  `;
  chatDiv.innerHTML = `
    <div class="flex flex-col h-full">
      <div class="chat-header w-full h-[70px] bg-[#202020] border-b border-[#2c2c2c] flex items-center px-4">
        <div class="flex items-center gap-4">
          <div class="w-12 h-12 rounded-full bg-gray-600 flex items-center justify-center">
            <i class="fas fa-cog text-white text-xl"></i>
          </div>
          <div>
            <h3 class="text-white text-lg">Paramètres</h3>
            <p class="text-gray-400 text-sm">Configurez votre compte</p>
          </div>
        </div>
      </div>

      <div class="chat-messages flex-1 overflow-y-auto p-4 bg-[#161717] flex items-center justify-center">
        <div class="text-center">
          <i class="fas fa-cog text-gray-600 text-6xl mb-4"></i>
          <p class="text-gray-400">Gérez vos paramètres de compte, de confidentialité et de sécurité</p>
        </div>
      </div>
    </div>
  `;
  document.getElementById('backButton').addEventListener('click', () => {
    displayContacts();
    resetChatView();
  });
}
function resetChatView() {
  const chatDiv = document.querySelector('.chat');
  chatDiv.innerHTML = `
    <div class="flex items-center justify-center h-full">
      <div class="text-center">
        <i class="fas fa-comments text-gray-600 text-6xl mb-4"></i>
        <p class="text-gray-400">Sélectionnez une conversation pour commencer à discuter</p>
      </div>
    </div>
  `;
}
export function showNewDiscussion() {
  const contentDiv = document.querySelector('.contact > div:last-child');
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));

  contentDiv.innerHTML = `
    <div class="w-full h-full bg-[#161717]">
      <div class="flex items-center gap-4 p-6 border-b border-[#2c2c2c]">
        <i class="fas fa-arrow-left text-white cursor-pointer" id="backButton"></i>
        <h2 class="text-white text-xl">Nouvelle discussion</h2>
      </div>

      <div class="bg-[#2D2E2E] p-4">
        <div class="relative">
          <i class="fas fa-search text-gray-400 absolute left-4 top-3"></i>
          <input type="text" 
            id="searchContacts"
            class="w-full bg-[#161717] text-white pl-12 pr-4 py-2 rounded-lg"
            placeholder="Rechercher un contact">
        </div>
      </div>

      <div class="menu-options">
        <div class="flex items-center gap-4 p-4 hover:bg-[#2c2c2c] cursor-pointer border-b border-[#2c2c2c]" id="newGroupBtn">
          <div class="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center">
            <i class="fas fa-users text-white text-xl"></i>
          </div>
          <div>
            <h3 class="text-white text-lg">Nouveau groupe</h3>
          </div>
        </div>

        <div class="flex items-center gap-4 p-4 hover:bg-[#2c2c2c] cursor-pointer border-b border-[#2c2c2c]" id="newContactBtn">
          <div class="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center">
            <i class="fas fa-user-plus text-white text-xl"></i>
          </div>
          <div>
            <h3 class="text-white text-lg">Nouveau contact</h3>
          </div>
        </div>

        <div id="contactsList" class="mt-4">
          <!-- Les contacts seront ajoutés ici -->
        </div>
      </div>
    </div>
  `;

  // Charger les contacts
  loadContacts();

  // Gérer les événements
  document.getElementById('backButton')?.addEventListener('click', () => {
    displayContacts();
  });

  document.getElementById('newGroupBtn')?.addEventListener('click', () => {
    showCreateGroup();
  });

  document.getElementById('newContactBtn')?.addEventListener('click', () => {
    ajoutContactGroup();
  });
}

// Fonction pour charger et afficher les contacts
async function loadContacts() {
  const contactsList = document.getElementById('contactsList');
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));

  try {
    const response = await fetch(`${API_URL}/contacts?userId=${currentUser.id}`);
    const contacts = await response.json();

    contacts.sort((a, b) => a.firstname.localeCompare(b.firstname));
    
    contactsList.innerHTML = contacts.map(contact => `
      <div class="flex items-center gap-4 p-4 hover:bg-[#2c2c2c] cursor-pointer border-b border-[#2c2c2c]">
        <div class="w-12 h-12 rounded-full bg-gray-600 flex items-center justify-center">
          <span class="text-white text-lg">${contact.firstname[0].toUpperCase()}</span>
        </div>
        <div>
          <h3 class="text-white">${contact.firstname} ${contact.lastname}</h3>
          <p class="text-gray-400 text-sm">${contact.phone}</p>
        </div>
      </div>
    `).join('');

  } catch (error) {
    console.error('Erreur lors du chargement des contacts:', error);
  }
}
export function handleLogout() {
  try {
    console.log('Déconnexion en cours...'); // Pour déboguer
    localStorage.removeItem('currentUser'); // Supprimer l'utilisateur
    window.location.href = '/'; // Redirection vers la page d'accueil
  } catch (error) {
    console.error('Erreur lors de la déconnexion:', error);
    alert('Une erreur est survenue lors de la déconnexion');
  }
}
export const messageService = {
  async sendMessage(senderId, receiverId, content) {
    try {
      const response = await fetch('http://localhost:3000/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          senderId,
          receiverId,
          content,
          timestamp: new Date().toISOString()
        })
      });
      return await response.json();
    } catch (error) {
      console.error('Erreur lors de l\'envoi du message:', error);
      throw error;
    }
  },

  async getMessages(senderId, receiverId) {
    try {
      const response = await fetch(`http://localhost:3000/messages?senderId=${senderId}&receiverId=${receiverId}`);
      return await response.json();
    } catch (error) {
      console.error('Erreur lors de la récupération des messages:', error);
      throw error;
    }
  }
};