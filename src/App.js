import QRcode from './assets/images/qr-code.svg';
import './assets/styles/App.css';

function App() {
  return (
    <main className="App">
      <figure className="card">
        <div className="card__img">
          <img src={QRcode} alt=""></img>
        </div>
        <figcaption className="card__txt">
          <p className="card__txt--title">Improve your front-end skills by building projects</p>
          <p className="card__txt--subtitle">Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
        </figcaption>
      </figure>
    </main>
  );
}

export default App;