import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, rgb(183, 248, 219), rgb(80, 167, 194));
  flex-direction: row;
`;

const Box = styled(motion.div)`
  width: 300px;
  height: 300px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.01);
`;

const Circle = styled(motion.div)`
  width: 50px;
  height: 50px;
  background-color: tomato;
  border-radius: 25px;
`;

function App() {
  const [click, setClick] = useState(false);
  const toggle = () => setClick((prev) => !prev);

  return (
    <Wrapper onClick={toggle}>
      <Box> {!click ? <Circle layoutId='circle' /> : null}</Box>
      <Box> {click ? <Circle layoutId='circle' /> : null}</Box>
    </Wrapper>
  );
}

export default App;
