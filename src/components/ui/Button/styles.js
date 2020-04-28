import styled from 'styled-components';
import tw from 'tailwind.macro';
import { motion } from 'framer-motion';

export const Button = motion.custom(styled.button`
  outline: none !important;
  ${tw`py-2 px-8 rounded-full border border-pink-500 text-white`};

  ${({ primary }) => (primary ? tw`bg-pink-500` : tw`text-pink-500`)};

  ${({ block }) => block && tw`w-full`};
`);
