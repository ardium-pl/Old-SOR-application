export function sendEmail(index?: number) {
    const email = 'example@gmail.com';
    const mailtoLink = `mailto:${email}?`;
    const body = index
    window.location.href = mailtoLink;
}
