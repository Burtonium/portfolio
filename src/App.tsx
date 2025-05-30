import { Helmet } from 'react-helmet-async';

function App() {
  return (
    <>
      <Helmet>
        <title>Matt's Portfolio Website</title>
        <meta name="description" content="Discover Mathieu Bertin's portfolio, showcasing innovative full stack web development projects, merging creativity with cutting-edge technology for dynamic, user-centric digital solutions." />
        <meta property="og:image" content="https://portfolio.nephelo.io/profile.jpg" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <meta name="author" content="Mathieu Bertin" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=League+Spartan:wght@200;600&family=Montserrat:wght@200&display=swap" rel="stylesheet" />
      </Helmet>
      <div className="max-w-[2440px] mx-auto">
        {/* Your content will go here */}
      </div>
    </>
  );
}

export default App;