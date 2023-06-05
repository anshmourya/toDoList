import { gsap } from "gsap";

//animate the sidenav bar
export const leftToRight = (elm1, index) => {
  gsap.from(elm1, {
    x: -500,
    duration: 2,
    delay: index * 0.5,
    ease: "circ.out",
    onComplete: () => {
      gsap.set(elm1, { x: 0 }); // Reset the x position to 0 after the animation
    },
  });
};
