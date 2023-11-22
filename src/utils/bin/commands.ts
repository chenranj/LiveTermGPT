// List of commands that do not require API calls

import * as bin from './index';
import config from '../../../config.json';

// Help
export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort();
  let c = '';
  for (let i = 1; i <= commands.length; i++) {
    if (i % 5 === 0) {
      c += commands[i - 1] + '\n';
    } else {
      c += commands[i - 1] + (' '.repeat(10 - commands[i - 1].length));
    }
  }
  return `Welcome! Here are all the available commands:
\n${c}\n
[tab]: trigger completion.
[ctrl+l]/clear: clear terminal.
`;
};

export const resume = async (args: string[]): Promise<string> => {
  window.open(`${config.resume_url}`);
  return 'Opening resume...';
};

// Donate
export const donate = async (args: string[]): Promise<string> => {
  return `thank you for your interest. 
here are the ways you can support my work:
- <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.donate_urls.stripe}" target="_blank">Stripe</a></u>
`;
};

// Contact
export const email = async (args: string[]): Promise<string> => {
  window.open(`mailto:${config.email}`);
  return `Opening mailto:${config.email}...`;
};

export const github = async (args: string[]): Promise<string> => {
  window.open(`https://github.com/${config.social.github}/`);

  return 'Opening github...';
};

export const linkedin = async (args: string[]): Promise<string> => {
  window.open(`https://www.linkedin.com/in/${config.social.linkedin}/`);

  return 'Opening linkedin...';
};

// Typical linux commands
export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};

export const whoami = async (args: string[]): Promise<string> => {
  return `${config.ps1_username}`;
};

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};

export const sudo = async (args?: string[]): Promise<string> => {
  return `Permission denied: with little power comes... no responsibility? `;
};

// Banner
export const banner = (args?: string[]): string => {
  return `
   ██████╗██╗  ██╗███████╗███╗   ██╗██████╗  █████╗ ███╗   ██╗   
  ██╔════╝██║  ██║██╔════╝████╗  ██║██╔══██╗██╔══██╗████╗  ██║   
  ██║     ███████║█████╗  ██╔██╗ ██║██████╔╝███████║██╔██╗ ██║   
  ██║     ██╔══██║██╔══╝  ██║╚██╗██║██╔══██╗██╔══██║██║╚██╗██║   
  ╚██████╗██║  ██║███████╗██║ ╚████║██║  ██║██║  ██║██║ ╚████║   
   ╚═════╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═══╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝   

Type 'help' to see the list of available commands.
`;
};
