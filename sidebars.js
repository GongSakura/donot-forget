/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  FRENTEND: [
    {
      type: 'category',
      label: 'Abstract Syntax Tree',
      items: ['esast/introduction','esast/expression'],
    },
  ],
  DEVOPS:[
    {
      type: 'category',
      label: 'Git',
      items: ['git/hooks'],
    },
    {
      type: 'category',
      label: 'Shell Scripting',
      items: ['shell/introduction','shell/variable'],
    },
    {
      type: 'category',
      label: 'Docker',
      items: ['docker/introduction','docker/image','docker/container'],
    },
  ]
};

module.exports = sidebars;
