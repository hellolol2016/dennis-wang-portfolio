

import Link from "next/link";
import { motion } from "framer-motion";
import { Center, VStack } from "@chakra-ui/react";
let easing = [0.6, -0.05, 0.01, 0.99];

export default function AnimatedSection({ title,children, ...rest}) {
  return (
  
      <motion.div
        animate={{ opacity: 1 , y:0, transition:{duration:0.6}}}
      initial={{ opacity: 0, y: 30 }}
      {...rest}
      className='title'>
       
      <Center>
        <VStack>
          {children} 
          </VStack>
        </Center>
        </motion.div>
        
  
    )
}