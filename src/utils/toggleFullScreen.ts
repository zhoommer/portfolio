export const toggleFullScreen = (): { innerWidth: number; innerHeight: number } => {
  const innerWidth = window.innerWidth;
  const innerHeight = window.innerHeight;

  return {
    innerWidth,
    innerHeight,
  }
}

