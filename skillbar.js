const skillbar = () => {
  const skillBars = document.querySelectorAll(".skill");
  skillBars.forEach((skillBar) => {
    const fill = skillBar.querySelector(".skill-bar__fill");
    const percentage = fill.querySelector(".skill-bar__percent");
    const progress = parseInt(fill.getAttribute("data-progress"), 10);
    fill.style.width = `${progress}%`;

    let counter = 0;
    const interval = setInterval(() => {
      if (counter <= progress) {
        percentage.textContent = `${counter}%`;
        counter++;
      } else {
        clearInterval(interval);
      }
    }, 1500 / progress);

    const lineFill = skillBar.querySelector(".skill-bar__line-fill");
    if (lineFill) {
      const lineProgress = parseInt(lineFill.getAttribute("data-progress"), 10);
      lineFill.style.width = `${lineProgress}%`;
    }

    const line = skillBar.querySelector(".skill-bar__line");
    if (line) {
      const progress = parseInt(line.getAttribute("data-progress"), 10);
      line.style.width = `${progress}%`;
    }
  });
};
export default skillbar;
