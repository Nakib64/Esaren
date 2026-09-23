import gsap from 'gsap';
import SplitType from 'split-type';

export function setupTextReveal(instances: SplitType[]): void {
  instances.forEach((inst) => inst.revert());
  instances.length = 0;

  document.querySelectorAll('.text-reveal').forEach((text) => {
    text.querySelectorAll('.line-wrapper').forEach((wrapper) => {
      const parent = wrapper.parentElement;
      if (parent) {
        while (wrapper.firstChild) {
          parent.insertBefore(wrapper.firstChild, wrapper);
        }
        parent.removeChild(wrapper);
      }
    });
  });

  document.querySelectorAll('.text-reveal').forEach((textElement) => {
    const text = textElement as HTMLElement;
    const splitText = new SplitType(text, { types: 'lines' });
    instances.push(splitText);

    if (splitText.lines && splitText.lines.length > 0) {
      splitText.lines.forEach((line) => {
        const lineWrapper = document.createElement('div');
        lineWrapper.classList.add('line-wrapper');
        line.insertAdjacentElement('beforebegin', lineWrapper);
        lineWrapper.appendChild(line);
      });

      gsap.set(splitText.lines, { y: '100%' });
      gsap.to(splitText.lines, {
        y: '0%',
        ease: 'power1.inOut',
        stagger: 0.15,
        scrollTrigger: {
          trigger: text,
          start: 'top bottom',
          toggleActions: 'play reset play reset',
        },
      });
    }
  });
}
