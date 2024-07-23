import toast from 'react-hot-toast';

export default function copyText(elementId) {
    const element = document.getElementById(elementId);

    element.select();
    element.focus();

    document.execCommand('copy');

    toast.success('Скопировано в буффер обмена');
}
