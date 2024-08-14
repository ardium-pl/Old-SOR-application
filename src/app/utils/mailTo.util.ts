export function sendEmail() {
    const email = 'brodka.jakub@gmail.com';
    const mailtoLink = `mailto:${email}?`;
    window.location.href = mailtoLink;
}
