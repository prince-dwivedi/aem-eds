export default function decorate(block) {
  const rows = [...block.children];

  // First row → logo
  const logoUrl = rows[0].children[0].textContent.trim();

  // Rest rows → nav links
  const navItems = rows.slice(1).map(row => {
    return row.children[1]?.textContent.trim();
  }).filter(Boolean);

  block.innerHTML = `
    <div class="header-wrapper">
      <div class="logo-container">
        <img src="${logoUrl}" alt="logo" />
      </div>
      <div class="nav-container">
        ${navItems.map(item => `<a href="#">${item}</a>`).join('')}
      </div>
    </div>
  `;
}