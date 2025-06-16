
const API_URL = "http://localhost:3000/users";

export async function verifierNumero(numero) {
  try {
    const response = await fetch(API_URL);
    const users = await response.json();

    // Cherche un utilisateur avec ce numéro
    return users.find(user => user.numero === numero);
  } catch (error) {
    console.error("Erreur lors de la vérification :", error);
    return null;
  }
}
