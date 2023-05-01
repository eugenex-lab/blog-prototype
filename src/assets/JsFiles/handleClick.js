export function toggleLoading() {
    const button = document.querySelector('.button');
    const spinner = '<span class="spinner"></span>';
    if (!button.classList.contains('loading')) {
        button.classList.add('loading');
        button.innerHTML = spinner;
    } else {
        button.classList.remove('loading');
        button.innerHTML = 'Load';
    }
}