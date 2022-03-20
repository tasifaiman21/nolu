import { Flex, Image,  Text } from "@chakra-ui/react";

export default function ProjectMonetization() {
  return (
    /*mother flex for all */

    <flex flexDir="column" w="100vw" my="3rem">
      {/*   flex for project heading  */}
      <Flex
        alignItems="center"
        justifyContent="center"
        flexDir="column"
        w="100%"
      >
        <Text fontSize="3xl" fontWeight="bold" color="#151855">
          Project Monetization
        </Text>
      </Flex>

      {/*   flex for project sub heading  */}

      <Flex
        alignItems="center"
        justifyContent="center"
        px="2.2rem"
        flexDir="column"
        w="100%"
      >
        <Text fontSize="xl" my="1rem" fontWeight="bold" color="#4169E1">
          How Noluverse Makes Money
        </Text>
      </Flex>

      {/* 1 */}

      <Flex w="100%" pl="1.5rem" mt="1rem">
        <Flex w="10%" fontSize="xl" color="#2A408E" fontWeight="bold">
          <Text>01</Text>
        </Flex>

        <Flex w="90%" flexDir="column">
          <Text color="#2A408E" fontSize="xl" fontWeight="bold">
            NoluPay
          </Text>
          <Text color="#000000" fontSize="lg" mt="0.5rem">
            
            Users pay a small transaction fee to send money.
          </Text>
        </Flex>
      </Flex>

       {/* 2 */}

       <Flex w="100%" pl="1.5rem" mt="1.5rem">
       <Flex w="10%" fontSize="xl" color="#2A408E" fontWeight="bold">
         <Text>02</Text>
       </Flex>

       <Flex w="90%" flexDir="column">
         <Text color="#2A408E" fontSize="xl" fontWeight="bold">
           Nolu+
         </Text>
         <Text color="#000000" fontSize="lg" mt="0.5rem">Subscribers pay monthly fees. 
         </Text>
       </Flex>
     </Flex>


      {/* 3 */}

      
      <Flex w="100%" pl="1.5rem" mt="1.5rem">
      <Flex w="10%" fontSize="xl" color="#2A408E" fontWeight="bold">
        <Text>03</Text>
      </Flex>

      <Flex w="90%" flexDir="column">
        <Text color="#2A408E" fontSize="xl" fontWeight="bold">
        Pixel
        </Text>
        <Text color="#000000" fontSize="lg" mt="0.5rem">We earn transaction fees through the facilitation of Pixels. 
        </Text>
      </Flex>
    </Flex>


    {/* 4 */}

    
      
    <Flex w="100%" pl="1.5rem" mt="1.5rem">
    <Flex w="10%" fontSize="xl" color="#2A408E" fontWeight="bold">
      <Text>04</Text>
    </Flex>

    <Flex w="90%" flexDir="column">
      <Text color="#2A408E" fontSize="xl" fontWeight="bold">
      Ad revenue
      </Text>
      <Text color="#000000" fontSize="lg" mt="0.5rem">Brands pay to advertise on our site to gain exposure.  
      </Text>
    </Flex>
  </Flex>

      {/* 5 */}

        
    <Flex w="100%" pl="1.5rem" mt="1.5rem">
    <Flex w="10%" fontSize="xl" color="#2A408E" fontWeight="bold">
      <Text>05</Text>
    </Flex>

    <Flex w="90%" flexDir="column">
      <Text color="#2A408E" fontSize="xl" fontWeight="bold">
      Nolu Merchandise
      </Text>
      <Text color="#000000" fontSize="lg" mt="0.5rem">We sell in-game digital assets and physical merchandise. 
      </Text>
    </Flex>
  </Flex>


     {/* 6 */}

     <Flex w="100%" pl="1.5rem" mt="1.5rem" mb="1rem">
     <Flex w="10%" fontSize="xl" color="#2A408E" fontWeight="bold">
       <Text>06</Text>
     </Flex>
 
     <Flex w="90%" flexDir="column">
       <Text color="#2A408E" fontSize="xl" fontWeight="bold">
       Nolu Blockchain
       </Text>
       <Text color="#000000" fontSize="lg" mt="0.5rem">Our blockchain earns through fees, partnerships, and selling services.  
       </Text>
     </Flex>
   </Flex>

     {/*   flex for terms image  */}

     <Flex w="100%" my="2.5rem" alignItems="center" justifyContent="center">
     <Image w="90%" src="monetization.png" alt="monetization" />
   </Flex>


      

    </flex>
        /*  mother flex for all end  */
  );
}
