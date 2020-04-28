export function openUrl(url) {
    const link = document.createElement('a');
    link.style.display = 'none';
    link.target = '_blank';
    link.href = url;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}