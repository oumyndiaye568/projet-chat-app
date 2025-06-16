
export async function verifierNumero(numero) {
  try {
    const response = await fetch("http://localhost:3000/users");
    const users = await response.json();

    // On cherche l'utilisateur avec le bon numéro (comparaison directe)
    return users.find(user => user.numero === numero.trim());
  } catch (error) {
    console.error("Erreur lors de la récupération des utilisateurs :", error);
    return null;
  }
}
