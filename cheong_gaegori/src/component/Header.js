import '../index.css';

export default function Header() {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <span className='logo_container'>
        <img className='logo_image' src='/cheong_logo.jpeg' alt='cute' />
      </span>
      <p>hello? It's me! Mario!</p>
    </div>
  );
}
