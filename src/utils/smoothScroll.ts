export const smoothScrollTo = (elementId: string) => {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
};

export const handleNavClick = (e: React.MouseEvent<HTMLElement>, elementId: string) => {
  e.preventDefault();
  smoothScrollTo(elementId);
};
