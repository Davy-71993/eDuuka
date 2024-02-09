
import { Roboto_Serif } from 'next/font/google'

interface LogoProps {}

const roboto = Roboto_Serif({
    weight: '900',
    subsets: ['latin'],
    display: 'swap',
  })

const Logo: React.FC<LogoProps> = (props) => {
  return (
    <div className={roboto.className}>
        <h1 className="text-2xl text-blue-700">eDuuka</h1>
    </div>
  );
};

export default Logo;
