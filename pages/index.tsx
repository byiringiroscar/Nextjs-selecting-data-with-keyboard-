import Image from 'next/image';
import { Inter } from 'next/font/google';
import { useEffect } from 'react';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  useEffect(() => {
    function handleKeyDown(event: any) {
      if (event.key === 'h') {

        const htmlRadioButton = document.getElementById('html') as HTMLInputElement;
        if (htmlRadioButton) {
          htmlRadioButton.checked = true;
        }
      }
      if (event.key === 'c') {
        const cssRadioButton = document.getElementById('css') as HTMLInputElement;
        if (cssRadioButton) {
          cssRadioButton.checked = true;
        }
      }
      if (event.key === 'j') {
        const jsRadioButton = document.getElementById('javascript') as HTMLInputElement;
        if (jsRadioButton) {
          jsRadioButton.checked = true;
        }
      }
    }
    document.addEventListener('keydown', handleKeyDown);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <>
      <div>
        <h2>Learning things please select with keyboard for those letter</h2>
        <form method="POST">
          <div>
            <input type="radio" id="html" name="fav_language" value="HTML" />
            <label htmlFor="html">HTML (H)</label>
          </div>
          <div>
            <input type="radio" id="css" name="fav_language" value="CSS" />
            <label htmlFor="css">CSS (C)</label>
          </div>
          <div>
            <input type="radio" id="javascript" name="fav_language" value="JavaScript" />
            <label htmlFor="javascript">JavaScript (J)</label>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}
