import React from 'react';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
    return (
        <section className="relative bg-gradient-to-br from-gray-50 to-gray-100 py-20 overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-5xl md:text-6xl font-bold text-uic-blue mb-6 tracking-tight"
                    >
                        Open Source Fund
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-xl md:text-2xl text-gray-700 font-light leading-relaxed"
                    >
                        Support technology projects that work toward measurable public benefit.
                    </motion.p>
                </div>
            </div>

            {/* Decorative background elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-uic-red/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-uic-blue/5 rounded-full blur-3xl"></div>
            </div>
        </section>
    );
};
