import { Box, Link, Text } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';

const links = {
  github: 'https://github.com/ethereum-boilerplate/ethereum-boilerplate/',
  
};

const Footer = () => {
  return (
    <Box textAlign={'center'} w="full" p={6}>
         <Text>
        All Rights Reversed @ Classy FLARBI{' '}
       
      </Text>
    </Box>
  );
};

export default Footer;
