document.getElementById('year').textContent = new Date().getFullYear();
const copyButton = document.getElementById('copy-email');
copyButton.addEventListener('click', async () => {
  const status = document.getElementById('copy-status');
  try {
    await navigator.clipboard.writeText('sherifimran2000@gmail.com');
    status.textContent = 'Email copied. Ready when you are.';
    copyButton.textContent = 'Copied';
  } catch {
    status.textContent = 'Select and copy the email address above, or click it to open your email app.';
  }
});
