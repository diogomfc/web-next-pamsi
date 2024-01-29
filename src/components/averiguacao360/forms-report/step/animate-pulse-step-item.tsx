import { motion } from 'framer-motion';

export interface FormsStepsProps {
  status: string;
  step: string;
  formName: string;
}

export const AnimatePulseStepItem = ({
  n = 4,
  duration = 3.4,
  delay = 0.8
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 1, 0], scale: 1.1 }}
      transition={{
        duration: duration,
        repeat: Infinity,
        delay: delay,
        repeatDelay: n * delay,
        ease: 'easeOut'
      }}
      className={`rounded-full relative bottom-3 h-[40px] w-[40px] bg-gradient-to-t from-blue-200 via-blue-50 to-blue-200 border border-blue-400`}
    />
  );
};
