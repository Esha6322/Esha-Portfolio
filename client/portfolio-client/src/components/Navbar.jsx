function Navbar() {
  return (
    <nav style={{ 
      display: 'flex', 
      justifyContent: 'space-between', 
      padding: '20px 32px',
      borderBottom: '1px solid var(--border)',
      alignItems: 'center'
    }}>
      <h2 style={{ margin: 0, color: 'var(--accent)' }}>MyPortfolio</h2>
      <ul style={{ 
        display: 'flex', 
        listStyle: 'none', 
        gap: '20px', 
        margin: 0, 
        padding: 0,
        fontSize: '16px' 
      }}>
        <li>Home</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

export default Navbar;