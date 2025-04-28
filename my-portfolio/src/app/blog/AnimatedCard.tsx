'use client';

import { motion } from 'framer-motion';

type AnimatedCardProps = {
  title: string;
  description: string;
  subsub: string;
};

export default function AnimatedCard({ title, description, subsub }: AnimatedCardProps) {
  return (
<motion.div
  className="mb-10 border-l-4 border-[#5B4FFF] pl-4"
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.4 }}
>
  <h2 className="text-xl font-bold text-white mb-1">{title}</h2>
  {/* leading-relaxed whitespace-pre-line helps identify a newline \n */}
  <p className="text-slate-400 text-base leading-relaxed whitespace-pre-line">{description}</p>
    <p className="text-slate-400 text-base leading-relaxed whitespace-pre-line">{subsub}</p>
</motion.div>

  );
}
