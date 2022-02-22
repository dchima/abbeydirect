import { isAndroid, isIOS } from 'react-device-detect';
import { Helmet } from 'react-helmet';
import logo from './logo.png';
import './App.css';

function App() {
  // if (isFirefox) window.location.replace('https://www.google.com');
  if (isIOS) window.location.replace('https://apps.apple.com/ng/app/abbeymobile/id1604213434')
  if (isAndroid) window.location.replace('https://play.google.com/store/apps/details?id=com.abbey.app')
  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>AbbeyMobile</title>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content='AbbeyMobile App' />
        <meta name="twitter:description" content='Bank with Abbey' />
        <meta name="twitter:image" content='https://res.cloudinary.com/dxnchima/image/upload/v1645546172/abbey/abbeylogo.png' />
      </Helmet>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          redirecting you to our mobile app...
        </p>
      </header>
    </div>
  );
}

export default App;
