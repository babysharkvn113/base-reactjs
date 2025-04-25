const appConfigs = {
    name: 'Admin Dashboard',
    description: 'A powerful admin dashboard application built with React and TypeScript.',
    version: '1.0.0',
    author: 'Your Name',
    company: 'Your Company',
    copyright: `© ${new Date().getFullYear()} Your Company. All rights reserved.`,
    defaultLanguage: 'en',
    supportedLanguages: ['en', 'vi'],
    apiBaseUrl: import.meta.env.VITE_ENDPOINT, // backend endpoint
    authorUrl: 'https://agency.io.vn',
};

export default appConfigs;
