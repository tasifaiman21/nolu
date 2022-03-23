import { Flex, Image, Button, Text, Show, Hide } from "@chakra-ui/react";

export default function Tokenomics() {
  return (
    /*      mother flex for all */

    <Flex direction="column" my="3rem">
      {/*   flex for tokenomics heading  */}

      <Flex
        alignItems="center"
        justifyContent="center"
        color={"black"}
        direction="column"
        w="100%"
      >
        <Text fontSize="3xl" fontWeight="bold" color="#151855">
          Tokenomics
        </Text>

        <Image mt="1rem" src="headingicon.png" alt="headingicon" />
      </Flex>

      {/*   flex for sub heading  */}

      <Flex
        alignItems="center"
        justifyContent="center"
        color={"black"}
        direction="column"
        w="100%"
      >
        <Text fontSize="2xl" my="1rem" fontWeight="bold" color="#4169E1">
          Exchange
        </Text>
      </Flex>

      {/*   flex for tokenomics paragraph  */}

      <Flex my="1rem" w="100%" alignItems="center" justifyContent="center">
        <Text fontSize="md" color="#000000">
          The NOLU token will be listed on <br /> decentralized exchanges that
          support <br /> Binance’s BEP20 native tokens starting <br /> with
          Pancake Swap. Pancake Swap offers <br /> an easy to use and accessible
          ecosystem <br /> and will provide the yield farming platform <br />{" "}
          for Noluverse.
        </Text>
      </Flex>

      {/*   flex for tokenomics image  */}

      <Flex w="100%" mt="1rem" alignItems="center" justifyContent="center">
        <Image w="80%" src="smtokenomics.jpg" alt="termsman" alignSelf="center" />
      </Flex>

      {/*   flex for tokenomics buttons  */}

      <Flex alignItems="center" justifyContent="center">
        <Button
          w="90%"
          borderRadius="0.5rem"
          h="3.18rem"
          colorScheme="pink"
          variant="solid"
          bgGradient="linear-gradient(135deg, #FE6684 -3.52%, #FFBB8E 100.09%);"
        >
          Buy Now
        </Button>
      </Flex>
    </Flex>
    /* mother flex for all  end  */
  );
}
