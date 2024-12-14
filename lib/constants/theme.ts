export const PERSIAN_GREEN = {
  50: 'hsl(171, 100%, 96%)',
  100: 'hsl(172, 94%, 94%)',
  200: 'hsl(172, 92%, 88%)',
  300: 'hsl(172, 86%, 78%)',
  400: 'hsl(172, 76%, 65%)',
  500: 'hsl(171, 70%, 40%)',
  600: 'hsl(172, 66%, 36%)',
  700: 'hsl(173, 60%, 26%)',
  800: 'hsl(173, 60%, 21%)',
  900: 'hsl(174, 62%, 18%)',
  950: 'hsl(175, 71%, 10%)',
};

export const THEME = {
  colors: {
    primary: PERSIAN_GREEN[500],
    primaryLight: PERSIAN_GREEN[400],
    primaryDark: PERSIAN_GREEN[600],
    secondary: PERSIAN_GREEN[100],
    secondaryDark: PERSIAN_GREEN[200],
    accent: PERSIAN_GREEN[700],
  },
  fonts: {
    heading: 'var(--font-heading)',
    body: 'var(--font-body)',
  },
  spacing: {
    section: '6rem',
    container: '2rem',
  },
} as const;