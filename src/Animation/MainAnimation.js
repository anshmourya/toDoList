import { gsap } from "gsap";

//animate the sidenav bar listItem
export const leftToRight = (elm1, index) => {
  gsap.from(elm1, {
    x: -500,
    duration: 1,
    delay: index * 0.5,
    ease: "circ.out",
    onComplete: () => {
      gsap.set(elm1, { x: 0 }); // Reset the x position to 0 after the animation
    },
  });
};

export const rotate360 = (elem) => {
  gsap.fromTo(
    elem,
    { rotate: 0 },
    {
      duration: 1,
      rotate: 180,
    }
  );
};

export const comeFromUp = (elem, delay) => {
  gsap.from(elem, {
    y: -500,
    duration: 1,
    delay: delay || 0,
    ease: "circ.out",
    onComplete: () => {
      gsap.set(elem, { y: 0 }); // Reset the y position to 0 after the animation
    },
  });
};
