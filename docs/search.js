document.querySelectorAll('td strong').forEach(el => {
  el.addEventListener('click', () => {
    const keyword = el.textContent.trim();
    const row = el.closest('tr');
    const cells = row ? Array.from(row.querySelectorAll('td')) : [];

    // col[1] = Tên tiếng Việt hoặc Ý nghĩa (tùy step)
    const meaning = cells[1]?.textContent?.trim() || '';

    // Step context từ h1 của trang
    const stepTitle = document.querySelector('h1')?.textContent?.trim() || '';

    // Build query: "Keyword - Meaning Australia SMSF"
    const query = meaning
      ? `${keyword} - ${meaning} Australia SMSF`
      : `${keyword} ${stepTitle} Australia SMSF`;

    window.open('https://www.google.com/search?q=' + encodeURIComponent(query), '_blank');
  });
});
