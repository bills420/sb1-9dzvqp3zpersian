interface MenuLink {
  title: string;
  description: string;
  href: string;
}

interface MenuContent {
  links: MenuLink[];
}

const menuContent: Record<string, MenuContent> = {
  '/services/labour': {
    links: [
      {
        title: 'Skilled Workforce',
        description: 'Access to experienced professionals',
        href: '/skilled-workforce',
      },
      {
        title: 'Project Management',
        description: 'Comprehensive project oversight',
        href: '/project-management',
      },
      {
        title: 'Safety Standards',
        description: 'Industry-leading safety protocols',
        href: '/safety',
      },
    ],
  },
  '/services/beautification': {
    links: [
      {
        title: 'Landscape Design',
        description: 'Custom landscape solutions',
        href: '/landscape',
      },
      {
        title: 'Garden Maintenance',
        description: 'Regular upkeep services',
        href: '/maintenance',
      },
      {
        title: 'Commercial Projects',
        description: 'Large-scale beautification',
        href: '/commercial',
      },
    ],
  },
  '/services/web-development': {
    links: [
      {
        title: 'Custom Development',
        description: 'Tailored web solutions',
        href: '/custom',
      },
      {
        title: 'E-commerce',
        description: 'Online store development',
        href: '/ecommerce',
      },
      {
        title: 'Web Applications',
        description: 'Complex web app solutions',
        href: '/applications',
      },
    ],
  },
};

export function getMenuContent(path: string): MenuContent {
  return (
    menuContent[path] || {
      links: [],
    }
  );
}