import React from 'react';

import Link from 'next/link'

function ScreenSaverIndexPage() {
  return (
    <main className="screen-saver-wrapper">
      <p>Choose a screen saver from the following colors:</p>
      <ul>
        <li><Link href="01-screensaver/antiquewhite">Antique White</Link></li>
        <li><Link href="01-screensaver/bisque">Bisque</Link></li>
        <li><Link href="01-screensaver/chocolate">Chocolate</Link></li>
        <li><Link href="01-screensaver/olive">Olive</Link></li>
        <li><Link href="01-screensaver/violet">Violet</Link></li>
        <li><Link href="01-screensaver/slateblue">Slateblue</Link></li>
      </ul>
      Or navigate to your own page with one of the 147 named colors in HTML https://developer.mozilla.org/en-US/docs/Web/CSS/named-color
    </main>
  );
}

export default ScreenSaverIndexPage;
