import React from 'react';
import { ExternalLink } from 'lucide-react';

export const WhatIsOpenSource: React.FC = () => {
    return (
        <section className="py-16 bg-white border-t border-gray-100">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto bg-gray-50 rounded-2xl p-8 md:p-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">What is Open Source?</h2>

                    <div className="space-y-6 text-gray-700">
                        <p className="text-lg">
                            Open source software is software with source code that anyone can inspect, modify, and enhance.
                            It is built on the principles of collaboration, transparency, and community-oriented development.
                        </p>

                        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                            <h3 className="font-bold text-lg mb-3 text-uic-blue">The Four Freedoms</h3>
                            <p className="italic text-gray-600 mb-4">
                                "The freedom to run the program, to study how it works, to redistribute copies, and to improve the program."
                            </p>
                            <a
                                href="https://ma.tt/2014/01/four-freedoms/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center text-uic-red hover:underline font-medium"
                            >
                                Read Matt Mullenweg on The Four Freedoms
                                <ExternalLink className="ml-2 w-4 h-4" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
