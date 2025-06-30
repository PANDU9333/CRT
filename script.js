// Spinner display on form submit
const form = document.getElementById('studentForm');
const loading = document.getElementById('loading');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    loading.style.display = 'flex';

    setTimeout(() => {
        alert('Form submitted successfully!');
        loading.style.display = 'none';
        form.reset();
        document.getElementById('photoFileName').textContent = 'No file chosen';
    }, 1500);
});

// Reset button
document.getElementById('resetBtn').addEventListener('click', () => {
    form.reset();
    document.getElementById('photoFileName').textContent = 'No file chosen';
});

// Show selected photo filename
document.getElementById('photo').addEventListener('change', function () {
    const fileName = this.files[0]?.name || 'No file chosen';
    document.getElementById('photoFileName').textContent = fileName;
});