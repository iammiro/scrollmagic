var controller = new ScrollMagic.Controller();

var setScene = function(element, triggerHook, duration, tween){
    new ScrollMagic.Scene({
        element: element,
        triggerHook: triggerHook,
        duration: duration,
    })
        .addIndicators()
        .setTween(tween)
        .addTo(controller);
};


var sceneATween = TweenMax.to('#toggleme', 100, {y: 400});
setScene('.section.a', 0, 100, sceneATween);


var sceneBTween = new TimelineMax()
    .to('.section.b', 3, {backgroundColor: 'green'})
    .fromTo('#pin', 1, {autoAlpha: 0}, {autoAlpha: 1}, 0)
    .to('#pin', 1, {x: 400, ease: Bounce.easeOut}, 1)
    .to('#pin', 1, {rotation: '900deg', ease: Power2.easeInOut}, 2);
setScene('.section.b', 1, '200%', sceneBTween);

new ScrollMagic.Scene({triggerElement: ".section.c", duration: 300})
    .setPin("#animateme")
    .addIndicators({name: "1 (duration: 300)"}) // add indicators (requires plugin)
    .addTo(controller);

// new ScrollMagic.Scene({
//     element: '.section.c',
//     triggerHook: 0,
//     duration: '100%'
// })
//     .addIndicators()
//     .setPin('#animateme')
//     .addTo(controller);