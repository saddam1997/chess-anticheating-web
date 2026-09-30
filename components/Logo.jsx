import Image from 'next/image';
import logo from '@/app/logo.png';

// Client-supplied logo: shield mark with the Chess Shield wordmark underneath.
export default function Logo({ alt, height = 48 }) {
  return <Image src={logo} alt={alt} priority style={{ height, width: 'auto' }} />;
}
