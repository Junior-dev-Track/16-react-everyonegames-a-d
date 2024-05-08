



// Fonction pour formater la date
export function formatDate(dateString) {
    const dateconversion = { year: 'numeric', month: 'short', day: '2-digit' };
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', dateconversion);
}