export function sendEmail() {
    const email = 'example@gmail.com';
    const mailtoLink = `mailto:${email}?`;
    window.location.href = mailtoLink;
}
