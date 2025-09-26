export function formatDate(date) {
    return date.toLocaleDateString('en-US', {
        month: 'short', 
        day: 'numeric',
        year: 'numeric',
    });
}

export function formatTime(date) {
    return date.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true, // uses AM/PM format
    });
}
