export default function decorate(block) {
  const rows = [...block.children];

  const logoRow = rows[0];
  const navRows = rows.slice(1);

  const logo = logoRow.children[0].textContent;
  const navItems = navRows.map(row => row.children[1]?.textContent);

  block.innerHTML = `
    <div class="header-container">
      <img src="${logo}" class="logo" />
      <nav>
        ${navItems.map(item => `<a href="#">${item}</a>`).join('')}
      </nav>
    </div>
  `;
}