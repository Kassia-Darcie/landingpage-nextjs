import Image from 'next/image';
import Link from 'next/link';
import Styles from './header.module.scss';
import Logo from '../../../public/images/logo.svg';
import { montserrat } from '@/fonts';

const Header = () => {
	return (
		<div className={Styles.container}>
			<div className={Styles.logotipo}>
				<Image src={Logo} />
			</div>
			<div className={Styles.menu}>
				<Link href="/">Home</Link>

				<Link href="/">O que fazemos</Link>

				<Link href="/">Cases</Link>
			</div>
			<div className={Styles.action}>
				<button className={montserrat.className}>Fale conosco</button>
			</div>
		</div>
	);
};

export default Header;
