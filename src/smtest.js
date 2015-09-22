import * as ScrollMagic from 'scrollmagic';

export class ScrollMagicTest {
  constructor(){
    this.controller = new ScrollMagic.Controller();
  }

  activate() {
    // create a scene
    new ScrollMagic.Scene({
            duration: 100,  // the scene should last for a scroll distance of 100px
            offset: 50      // start this scene after scrolling for 50px
        })
        .setPin("#my-sticky-element") // pins the element for the the scene's duration
        .addTo(this.controller); // assign the scene to the controller
  }
}
