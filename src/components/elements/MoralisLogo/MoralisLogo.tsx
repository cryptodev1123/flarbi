import { useColorMode } from '@chakra-ui/react';
import Image from 'next/image';

const MoralisLogo = () => {
  const { colorMode } = useColorMode();

  return (
    <Image
      src={colorMode === 'dark' ? '/FLARBI-DarkBG.svg' : '/FLARBI-LightBG.svg'}
      height={45}
      width={150}
      alt="FLARBI"
    />
  );
};

export default MoralisLogo;
