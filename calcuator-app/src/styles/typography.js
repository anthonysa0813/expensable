export const fonts = {
  primary: `'Montserrat', monospace;`,
  secondary: `"Poppins", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
  Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif`
};

export const typography = {
  content: {
    default: `
    font-size: 1rem;
    line-height: 1.5rem;
    weight: 400;
    `,
    sm: `
    font-size: 0.87rem;
    line-height: 1.25rem;
    weight: 400;
    `,
    md: `
    font-size: 1rem;
    line-height: 1.5rem;
    weight: 400;
    `
  },
  head: {
    xs: `
    font-size: 1.25rem;
    line-height: 1.75rem;
    weight: 600;
    `,
    sm: `
    font-size: 1.5rem;
    line-height: 2rem;
    weight: 600;
    `
  },
  text: {
    sm:`
    font-size: 0.87rem;
    line-height: 1.25rem;
    weight: 500;
    `,
    lg:`
    font-size: 1.25rem;
    line-height: 1.75rem;
    weight: 500;
    `,
  },
  heading: {
    sm: `
    font-size: 1.5rem;
    line-height: 2rem;
    weight: 600;
    `,
    md: `
    font-size: 1.87rem;
    line-height: 2.25rem;
    weight: 600;
    `
  }
};


for (const size in typography.content) {
  typography.content[size] += `
  font-family: ${fonts.primary};
  `;
}

for (const size in typography.heading) {
  typography.heading[size] += `
  font-family: ${fonts.secondary};
  font-weight: 600;
  `;
}