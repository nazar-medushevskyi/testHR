import './Header.css';

export const Header = () => {
  const LINKS_CONFIG = [
    { path:'Item1', id: 1, label: 'Item 1', },
    { path:'Item2', id: 2, label: 'Item 2' },
    { path:'Item3', id: 3, label: 'Item 3' },
    { path:'Item4', id: 4, label: 'Item 4' },
  ];

  return (
    <header className='header'>
      <h1 className='logo'>Logo</h1>

      <nav className="nav">
        <ul className="list">
          {LINKS_CONFIG.map(el => (
            <li className="nav__list" key={el.id}>
              <a className="nav__link" href={el.path}>{el.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
