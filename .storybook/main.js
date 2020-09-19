module.exports = {
  stories: ['../src/**/*.stories.js'],
  addons: [
      '@storybook/addon-actions', 
      '@storybook/addon-links',
      {
        name: '@storybook/addon-essentials',
        options: {
          backgrounds: false,
        }
      }
  ],
};