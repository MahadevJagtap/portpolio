import React from 'react';
import { FileText, Download, ExternalLink, Eye } from 'lucide-react';
import { motion } from 'framer-motion';

const Resume = () => {
  return (
    <section id="resume" className="py-20 bg-white dark:bg-black relative overflow-hidden transition-colors duration-300">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-100/50 dark:from-white/5 via-transparent to-gray-100/50 dark:to-white/5"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          My <span className="text-gray-600 dark:text-white/70">Resume</span>
        </motion.h2>

        <motion.p
          className="text-center text-gray-600 dark:text-white/60 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Download my resume to learn more about my experience, skills, and achievements.
        </motion.p>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* PDF Preview - Takes 2 columns on large screens */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="relative bg-white/80 dark:bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-200/20 dark:border-white/5 shadow-xl h-full">
              {/* PDF Viewer */}
              <div className="w-full h-[600px] md:h-[700px] lg:h-[800px]">
                <iframe
                  src="/resume/ENG22AM0031_NEW_F.pdf"
                  title="Resume Preview"
                  className="w-full h-full border-0"
                />
              </div>
            </div>
          </motion.div>

          {/* Action Cards - Takes 1 column on large screens */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {/* Download Card */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 dark:from-white dark:to-gray-100 rounded-2xl p-6 shadow-xl">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-white/10 dark:bg-black/10 rounded-xl">
                  <FileText className="w-6 h-6 text-white dark:text-black" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white dark:text-black mb-1">Download Resume</h3>
                  <p className="text-sm text-white/70 dark:text-black/70">Get the PDF version</p>
                </div>
              </div>

              <a
                href="/resume/ENG22AM0031_NEW_F.pdf"
                download="Mahadev_Resume.pdf"
                className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-white dark:bg-black text-gray-900 dark:text-white rounded-xl font-medium hover:bg-gray-100 dark:hover:bg-gray-900 transition-all duration-300 hover:scale-105"
              >
                <Download size={20} />
                Download PDF
              </a>
            </div>

            {/* View Full Screen Card */}
            <div className="bg-white/80 dark:bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/20 dark:border-white/5 shadow-lg">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-gray-100 dark:bg-white/10 rounded-xl">
                  <Eye className="w-6 h-6 text-gray-900 dark:text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">View Full Screen</h3>
                  <p className="text-sm text-gray-600 dark:text-white/60">Open in new tab</p>
                </div>
              </div>

              <a
                href="/resume/ENG22AM0031_NEW_F.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-gray-900 dark:bg-white text-white dark:text-black rounded-xl font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition-all duration-300 hover:scale-105"
              >
                <ExternalLink size={20} />
                View Full Screen
              </a>
            </div>

            {/* Quick Info Card */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-white/5 dark:to-white/10 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/20 dark:border-white/5">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Quick Info</h3>
              <div className="space-y-3">
                <InfoItem label="Education" value="B.Tech AI & ML" />
                <InfoItem label="University" value="Dayananda Sagar" />
                <InfoItem label="Graduation" value="2026" />
                <InfoItem label="CGPA" value="7.62/10" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const InfoItem = ({ label, value }: { label: string; value: string }) => (
  <div className="flex justify-between items-center">
    <span className="text-sm text-gray-600 dark:text-white/60">{label}</span>
    <span className="text-sm font-medium text-gray-900 dark:text-white">{value}</span>
  </div>
);

export default Resume;