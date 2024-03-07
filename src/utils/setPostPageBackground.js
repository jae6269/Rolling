function setPostPageBackground(color, imgUrl = 'none') {
  const background = {};

  if (imgUrl !== null) {
    background.backgroundImage = `url(${imgUrl})`;
  } else if (color === 'beige') {
    background.backgroundColor = `var(--orange200)`;
  } else if (color === 'purple') {
    background.backgroundColor = `var(--purple200)`;
  } else if (color === 'blue') {
    background.backgroundColor = `var(--blue200)`;
  } else if (color === 'green') {
    background.backgroundColor = `var(--green200)`;
  }

  return background;
}

export default setPostPageBackground;
