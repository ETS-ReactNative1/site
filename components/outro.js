import { Box, Heading } from "@chakra-ui/react";

export const Outro = () => {
  return (
    <>
      <Box
        w='full'
        maxW='container.lg'
        mx='auto'
        textAlign='center'
        overflow='hidden'
        pb={36}
      >
        <Heading
          color='transparent'
          fontSize={["5xl", "6xl",  "8xl", "8xl"]}
          textAlign='left'
          textShadow='rgba(8,99,117, 0.4) 1px 1px 3px'
          lineHeight={1.3}
          letterSpacing='6px'
          ml={[24, null, null, 32]}
          opacity={0.8}
        >
          Why put off <br />
          for tomorrow <br /> what you can do <br /> today?
        </Heading>
      </Box>
    </>
  );
};
