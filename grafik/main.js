import decomp from "https://cdn.skypack.dev/poly-decomp@0.3.0";


const select = s => document.querySelector(s);
const selectAll = s => document.querySelectorAll(s);

const makeTwoArrays = (els, className) => {
	els.forEach(el => {
		el.parentElement.appendChild(el.cloneNode(true));
	});
	const elsTotal = selectAll(className);
	const elsArray = gsap.utils.toArray(elsTotal);
  const num = elsArray.length / 2;
	const els1 = elsArray.splice(0, num);
	const els2 = elsArray;
	return [els1, els2];
}

// gears animation

gsap.to('.gear', {
  rotation: 360,
  duration: 10,
  transformOrigin: 'center',
  repeat: -1,
  ease: 'none'
})

// entrance bubbles bottom left animation

gsap.to('.bubble__entrance', {
  duration: 7.0, 
  motionPath: {
    path: '#entrance-path',
    align: '#entrance-path',
    alignOrigin: [0.5, 1.0],
    autoRotate: true
  },
  stagger: {
    each: 1.0,
    repeat: -1,
  },
  ease: 'none'
});

// red and yellow balls animation

const largeBalls = selectAll('.ball-large');
const [ballsL1, ballsL2] = makeTwoArrays(largeBalls, '.ball-large')
ballsL2[ballsL2.length - 1].style.display = 'none';

const animateLargeBalls = (balls) => {
  balls.forEach(ball => {
    const color = gsap.utils.random(['st3', 'st4'], true);
    ball.setAttribute('class', `ball-large ${color()}`);
  })
  return gsap.to(balls, {
    duration: 13,
    motionPath: {
      path: '#ball-large-path',
      align: '#ball-large-path',
      alignOrigin: [0.5, 1.0],
      autoRotate: true,
      start: 1,
      end: 0
    },
    stagger: {
      each: 1.6,
    },
    ease: 'none',
    onComplete: () => animateLargeBalls(balls)
  })
}

const ballLTL = gsap.timeline();
ballLTL.add(animateLargeBalls(ballsL1), -13)
  .add(animateLargeBalls(ballsL2), '<13')


// bubbles in the tube animation

const bubblesInTube = selectAll('.bubble__tube');

bubblesInTube.forEach((bubble, index) => {
  const tubePath = select(`#tube-path${index}`);
  const randomSpeed = gsap.utils.random(5, 10, 1, true);
  const randomDelay = gsap.utils.random(-0.5, 1.5, 0.1, true);
  const animateBubble = (bubble) => {
    return gsap.to(bubble, {
      duration: randomSpeed(),
      motionPath: {
        path: tubePath,
        align: tubePath,
        alignOrigin: [0.5, 0.5],
      },
      ease: 'none',
      yoyo: true,
      onComplete: () => animateBubble(bubble)
    })
  }
  const colorBubble = (bubble) => {
    return gsap.to(bubble, {
      duration: 0.5,
      strokeWidth: 3,
      attr: {
        r: 5
      },
      ease: 'power2.in',
      repeat: 1,
      yoyo: true,
      delay: randomDelay(),
      onComplete: () => colorBubble(bubble)
    })
  }
  animateBubble(bubble);
  colorBubble(bubble);
})


// jelly animation

const jellyHidden = select('.jelly__hidden');
const jellyPop1 = select('#jelly__fluid1');
const jellyPop2 = select('#jelly__fluid2');
const jelly1 = select('.jelly__line');

for (let i = 0; i < 3; i++) {
  jelly1.parentElement.appendChild(jelly1.cloneNode(true));
}
const jellyOnLine = selectAll('.jelly__line');

jellyOnLine.forEach(jelly => {
	jelly.style.display = 'none';
})

const jellyTL = (jelly) => 
  gsap.timeline({
		onComplete: () => jellyTL(jelly)
	})
		.set(jelly, {
			display: 'none',
			transformOrigin: '50% 50%',
		})
		.to(jellyHidden, {
			duration: 0.3, 
			morphSVG: {
				shape: jellyPop1,
			}
		})
		.to(jellyHidden, {
			duration: 0.3, 
			morphSVG: {
				shape: jellyPop2,
				origin: '50% 50%, 53% 86%',
			}
		}, '>-0.1')
		.addLabel('jellyBack')
		.to(jelly, {display: 'block'})
		.to(jelly, {
			duration: 0.5,
			motionPath: {
				path: '#jelly-path',
				align: '#jelly-path',
				transformOrigin: '50% 50%',
				alignOrigin: [0.5, 0.5],
				autoRotate: 38,
			},
			ease: 'none'
		}, '>-0.5')
		.to(jelly, {
			x: 580,
			duration: 9,
			ease: 'none'
		})
		.to(jellyHidden, {
			duration: 0,
			morphSVG: {
				shape: jellyPop1,
				origin: '50% 50%, 53% 86%',
			}
		}, 'jellyBack')
		.to(jellyHidden, {
			duration: 0.2,
			morphSVG: {
				shape: jellyHidden
			}
		}, 'jellyBack+=0.06')
		
const jellyMainTL = gsap.timeline();
jellyMainTL.add(jellyTL(jellyOnLine[0]), 0.5)
  .add(jellyTL(jellyOnLine[1]), 3)
  .add(jellyTL(jellyOnLine[2]), 5.5)
  .add(jellyTL(jellyOnLine[3]), 8)

const jellyInFlask = select('.jelly__inside');

gsap.timeline({repeat: -1})
  .to(jellyInFlask, {
		duration: 0.62, 
		morphSVG: {
			shape: '#jelly__inside2',
		}
	})
	.to(jellyInFlask, {
		duration: 0.63,
		morphSVG: {
			shape: jellyInFlask
		}
	})
	.to(jellyInFlask, {
		duration: 0.63,
		morphSVG: {
			shape: '#jelly__inside3'
		}
	})
	.to(jellyInFlask, {
		duration: 0.63,
		morphSVG: {
			shape: jellyInFlask
		}
	})

// red and green soft objects animation

const softObjects = selectAll('.soft-object');
const [softObjects1, softObjects2] = makeTwoArrays(softObjects, '.soft-object');

const softObjectsPath = [
	"M470.996,321.5H463.5c-1.657,0-3-1.343-3-3s1.343-3,3-3h7v-8c0-1.657,1.343-3,3-3s3,1.343,3,3v8.496C476.5,319.031,474.031,321.5,470.996,321.5z",
	"M471.5,321.5h-7.496c-3.035,0-5.504-2.469-5.504-5.504V307.5c0-1.657,1.343-3,3-3s3,1.343,3,3v8h7c1.657,0,3,1.343,3,3S473.157,321.5,471.5,321.5z",
	"M470.996,321.5H463.5c-1.657,0-3-1.343-3-3s1.343-3,3-3h7v-8c0-1.657,1.343-3,3-3s3,1.343,3,3v8.496C476.5,319.031,474.031,321.5,470.996,321.5z",
	"M471.5,321.5h-7.496c-3.035,0-5.504-2.469-5.504-5.504V307.5c0-1.657,1.343-3,3-3s3,1.343,3,3v8h7c1.657,0,3,1.343,3,3S473.157,321.5,471.5,321.5z",
	"M466.959,321.5h-4.918c-1.403,0-2.541-1.138-2.541-2.541v-7.918c0-1.403,1.138-2.541,2.541-2.541h4.918c1.403,0,2.541,1.138,2.541,2.541v7.918C469.5,320.362,468.362,321.5,466.959,321.5z",
	"M459.5,318.801v-4.602c0-1.491,1.208-2.699,2.699-2.699h9.602c1.491,0,2.699,1.208,2.699,2.699v4.602c0,1.491-1.208,2.699-2.699,2.699h-9.602C460.708,321.5,459.5,320.292,459.5,318.801z"
];

const animateSoftObjects = (objects) => {
	objects.forEach(obj => {
		 const path = gsap.utils.random(softObjectsPath, true);
		 const color = gsap.utils.random(['st17', 'st18', 'st18'], true);
		 obj.setAttribute('d', path());
     obj.setAttribute('class', `soft-object ${color()}`);
	})
	return gsap.to(objects, {
		duration: 13,
		motionPath: {
			path: '#soft-objects-path',
			align: '#soft-objects-path',
			alignOrigin: [0.5, 1.0],
			autoRotate: true,
			start: 1,
			end: 0
		},
		stagger: {
			each: 1.2
		},
		ease: 'none',
		onComplete: () => animateSoftObjects(objects)
	})
}

const softObjectsTL = gsap.timeline();
softObjectsTL.add(animateSoftObjects(softObjects1), -13)
  	.add(animateSoftObjects(softObjects2), '<12')


// pink and yellow balls animation

const smallBalls = select('.balls-small1');
const ballsArray = gsap.utils.toArray(smallBalls.children);
const [smallBalls1, smallBalls2] = makeTwoArrays(ballsArray, '.balls-small1 g');

const animateSmallBalls = (balls) => {
	return gsap.to(balls, {
		duration: 30.8,
		motionPath: {
			path: '#small-balls-path1',
			align: '#small-balls-path1',
			alignOrigin: [0.5, 1.0],
			autoRotate: 180,
		},
		stagger: {
			each: 1.1,
			from: 'random'
		},
		ease: 'none',
		onComplete: () => animateSmallBalls(balls)
	})
}

const ballSTL = gsap.timeline();
ballSTL.add(animateSmallBalls(smallBalls1), -30)
       .add(animateSmallBalls(smallBalls2), '<30.8')


// polygon elements animation

const polygonBox = selectAll('.polygon-box');

const polygonTL = gsap.timeline({delay: -12})
polygonTL
.set(polygonBox, {
	autoAlpha: 0,
	x: -100.667
})
  .to(polygonBox, {
		duration: 12,
		ease: CustomEase.create('custom', 'M0,0C0.084, 0.61 0.2,1 0.2,1 0.2,1 0.374,1 1,1'),
		autoAlpha: 1,
		stagger: {
			each: 2,
			repeat: -1
		}
	})
	.to(polygonBox, {
    duration: 12,
    x: 503.335,
		ease: 'none',
		stagger: {
			each: 2,
			repeat: -1
		}
	}, '<')

	const polygonElement = selectAll('.polygon-element');
	
	gsap.to(polygonElement, {
		autoAlpha: 0,
		ease: 'none',
		ease: 'expo.in',
		
		duration: 2,
		stagger: {
			from: 'random',
			each: 0.2,
			yoyo: true,
			repeat: -1,
			repeatDelay: 0.5
		}
	})

// orange signals animation

gsap.timeline({repeat: -1, repeatDelay: 0.66})
	.set('.signal1', {
		autoAlpha: 0
	})
	.set('.signal2', {
		autoAlpha: 0
	})
	.to('.signal1', {
		duration: 0,
		autoAlpha: 1,
		ease: 'none'
	}, 0.66)
	.to('.signal2', {
		duration: 0,
		autoAlpha: 1,
		ease: 'none'
	}, '<0.66')


//red round lights animation

const LightsTL = gsap.timeline({
	onComplete: () => gsap.delayedCall(Math.random() * 2, () => LightsTL.restart())
})
  .set('.yellow-light1', {
		display: 'none'
	})
  .set('.red-light1', {
		display: 'none',
	})
	.to('.yellow-light1', {
		display: 'block'
	}, 2)
	.to('.red-light1', {
		display: 'block',
		stagger: {
			each: 0.1
		}
	}, '<0.6')
	.to('.yellow-light1', {
		display: 'none'
	}, '>-0.5')
	.to('.red-light1', {
		display: 'none'
	}, '<')

gsap.timeline({repeat: -1, repeatDelay: 0.5})
  .to('.red-light2', {
		duration: 0.5,
		autoAlpha: 0,
		stagger: {
			each: 1
		}
	})
	.to('.red-light2', {
		duration: 0.5,
		autoAlpha: 1,
		stagger: {
			each: 1
		}
	}, '<1')

gsap.timeline({repeat: -1, repeatDelay: 0.5})
  .to('.red-light3', {
		duration: 0.5,
		autoAlpha: 0
	})
	.to('.red-light3', {
		duration: 0.5,
		autoAlpha: 1
	}, '<1')

gsap.timeline({repeat: -1, repeatDelay: 0.5})
	.to('.red-light4', {
		duration: 0.5,
		autoAlpha: 0,
		stagger: {
			each: 1
		}
	})
	.to('.red-light4', {
		duration: 0.5,
		autoAlpha: 1,
		stagger: {
			each: 1
		}
	}, '<1')


// moving bubbles animation

const bubbleMove = select('.bubble__move');
for (let i = 0; i < 23; i++) {
	bubbleMove.parentElement.appendChild(bubbleMove.cloneNode(true));
}
const bubbleMoveAll = selectAll('.bubble__move')

gsap.timeline()
  .set(bubbleMoveAll, {
		fill: '#FFDEFE',
		stroke: '#F286E6'
	})
	.to(bubbleMoveAll, {
		duration: 120,
		ease: 'none',
		motionPath: {
			path: '#flask-inside-path',
			align: '#flask-inside-path',
			alignOrigin: [0.5, 0.5]
		},
		stagger: {
			each: 5,
			repeat: -1
		}
	}, -110)
	.to(bubbleMoveAll, {
		duration: 120,
		ease: 'none',
		fill: '#F9EBDC',
		stroke: '#F4AA62',
		stagger: {
			each: 5, 
			repeat: -1
		}
	}, '<')


// clickable signal animation

const redSignal = select('.signal-click');

const redSignalTL = gsap.timeline({repeat: -1, repeatDelay: 0.5}) 
	.to(redSignal, {
		duration: 0.6, 
		autoAlpha: 0.4,
	})
	.to(redSignal, {
		duration: 0.6,
		autoAlpha: 1
	})

// orange balls animation

gsap.to('.ball-middle', {
	duration: 0.5,
	autoAlpha: 0.5,
	stagger: {
		amount: 5,
		repeat: -1,
		yoyo: true
	}
})


// matter.js  
// bubbles in the flask and balls pop out from the circle

const {Engine, Render, Runner, World, Bodies, Body, Composite, Svg, Common, Vertices, Resolver, Events} = Matter;
	
const setupCanvas = () => {
	const canvas = select('#myCanvas');
	const engine = Engine.create();
	const world = engine.world;
	let cWidth = window.innerWidth;
	let cHeight = cWidth * 0.6546;
	
	Common.setDecomp(decomp);
	
	const percentX = (percent) => {
		return Math.round(percent / 100 * cWidth);
	}
	const percentY = (percent) => {
		return Math.round(percent / 100 * cHeight);
	}
	
	world.gravity.y = 0;
	Resolver._restingThresh = 0;
	
	const render = Render.create({
		canvas: canvas,
		engine: engine,
		options: {
			width: cWidth,
			height: cHeight,
			wireframes: false,
			background: 'transparent'
		},
	})
	
	Render.run(render);
	const runner = Runner.create();
	Runner.run(runner, engine);
	
	
	// flask L path above
	
	const flaskPath1 = '360.5,603.6,355.5,603.6,355.3,600.5,354.1,594.7,351.9,589.3,348.6,584.5,344.6,580.5,339.8,577.2,334.4,575,328.6,573.8,325.5,573.6,322.4,573.8,316.6,575,311.2,577.2,306.4,580.5,302.4,584.5,299.1,589.3,296.9,594.7,295.7,600.5,295.5,603.6,290.5,603.6,290.7,600,292.1,593.2,294.7,586.9,298.5,581.3,303.2,576.6,308.8,572.8,315.1,570.2,321.9,568.8,325.5,568.6,329.1,568.8,335.9,570.2,342.2,572.8,347.8,576.6,352.5,581.3,356.3,586.9,358.9,593.2,360.3,600,360.5,603.6,360.5,603.6'
	
	// flask L path below
	
	const flaskPath2 = '325.5,638.6,321.9,638.4,315.1,637,308.8,634.4,303.2,630.6,298.5,625.9,294.7,620.3,292.1,614,290.7,607.2,290.5,603.6,295.5,603.6,295.7,606.7,296.9,612.5,299.1,617.9,302.4,622.7,306.4,626.7,311.2,630,316.6,632.2,322.4,633.4,325.5,633.6,328.6,633.4,334.4,632.2,339.8,630,344.6,626.7,348.6,622.7,351.9,617.9,354.1,612.5,355.3,606.7,355.5,603.6,360.5,603.6,360.3,607.2,358.9,614,356.3,620.3,352.5,625.8,347.8,630.6,342.2,634.4,335.9,637,329.1,638.4,325.5,638.6,325.5,638.6';
	
	// flask M path above
	
	const flaskPath3 = '405.1,520,400.1,520,400,517.4,399,512.5,397.1,508,394.4,504,391,500.6,387,497.9,382.5,496,377.6,495,375,494.9,372.4,495,367.5,496,363,497.9,359,500.6,355.6,504,352.9,508,351,512.5,350,517.4,349.9,520,344.9,520,345,516.9,346.2,511,348.5,505.6,351.7,500.8,355.8,496.7,360.6,493.5,366,491.2,371.9,490,375,489.9,378.1,490,384,491.2,389.4,493.5,394.2,496.7,398.3,500.8,401.5,505.6,403.8,511,405,516.9,405.1,520,405.1,520'
	
	//flask M path below
	
	const flaskPath4 = '375,550.1,371.9,550,366,548.8,360.6,546.5,355.8,543.3,351.7,539.2,348.5,534.4,346.2,529,345,523.1,344.9,520,349.9,520,350,522.6,351,527.5,352.9,532,355.6,536,359,539.4,363,542.1,367.5,544,372.4,545,375,545.1,377.6,545,382.5,544,387,542.1,391,539.4,394.4,536,397.1,532,399,527.5,400,522.6,400.1,520,405.1,520,405,523.1,403.8,529,401.5,534.4,398.3,539.2,394.2,543.3,389.4,546.5,384,548.8,378.1,550,375,550.1,375,550.1'
	
	// flask S path above
	
	const flaskPath5 = '572,446,567,446,566.9,443.9,566.1,439.8,564.5,436,562.2,432.6,559.4,429.8,556,427.5,552.2,425.9,548.1,425.1,546,425,543.9,425.1,539.8,425.9,536,427.5,532.6,429.8,529.8,432.6,527.5,436,525.9,439.8,525.1,443.9,525,446,520,446,520.1,443.3,521.2,438.3,523.1,433.6,525.9,429.5,529.5,425.9,533.6,423.1,538.3,421.2,543.3,420.1,546,420,548.7,420.1,553.7,421.2,558.4,423.1,562.5,425.9,566.1,429.5,568.9,433.6,570.8,438.3,571.9,443.3,572,446,572,446'
	
	// flask S path above
	
	const flaskPath6 = '546,472,543.3,471.9,538.3,470.8,533.6,468.9,529.5,466.1,525.9,462.5,523.1,458.4,521.2,453.7,520.1,448.7,520,446,525,446,525.1,448.1,525.9,452.2,527.5,456,529.8,459.4,532.6,462.2,536,464.5,539.8,466.1,543.9,466.9,546,467,548.1,466.9,552.2,466.1,556,464.5,559.4,462.2,562.2,459.4,564.5,456,566.1,452.2,566.9,448.1,567,446,572,446,571.9,448.7,570.8,453.7,568.9,458.4,566.1,462.5,562.5,466.1,558.4,468.9,553.7,470.8,548.7,471.9,546,472,546,472'
	
	// flask SS path above
	
	const flaskPath7 = '614,488,609,488,608.6,484.4,605.9,477.9,601.1,473.1,594.6,470.4,591,470,587.4,470.4,580.9,473.1,576.1,477.9,573.4,484.4,573,488,568,488,568.1,485.7,569,481.2,570.8,477,573.3,473.4,576.4,470.3,580,467.8,584.2,466,588.7,465.1,591,465,593.3,465.1,597.8,466,602,467.8,605.6,470.3,608.7,473.4,611.2,477,613,481.2,613.9,485.7,614,488,614,488'
	
	// flask SS path below
	
	const flaskPath8 = '591,511,588.7,510.9,584.2,510,580,508.2,576.4,505.7,573.3,502.6,570.8,499,569,494.8,568.1,490.3,568,488,573,488,573.4,491.6,576.1,498.1,580.9,502.9,587.4,505.6,591,506,594.6,505.6,601.1,502.9,605.9,498.1,608.6,491.6,609,488,614,488,613.9,490.3,613,494.8,611.2,499,608.7,502.6,605.6,505.7,602,508.2,597.8,510,593.3,510.9,591,511,591,511'

	// flask orange path above
	
	const flaskPath9 = '544.3,348.3,540,350.8,538.3,348.2,534.4,343.8,529.7,340.3,524.5,337.8,518.9,336.4,513.1,336,507.3,336.8,501.7,338.7,499,340.1,496.4,341.8,492,345.8,488.5,350.5,486,355.7,484.5,361.3,484.2,367,484.9,372.8,486.9,378.5,488.3,381.2,484,383.7,482.3,380.5,480.1,373.9,479.2,367.2,479.6,360.5,481.3,354,484.2,347.9,488.3,342.4,493.5,337.8,496.4,335.8,499.6,334.2,506.2,331.9,513,331,519.7,331.4,526.2,333.1,532.3,336,537.7,340.1,542.4,345.3,544.3,348.3,544.3,348.3'

	// flask orange path below
	
	const flaskPath10 = '496.6,383.8,490.8,383.5,483.2,382.2,482.1,381.8,483.9,376.2,486.1,376.8,494.3,377.9,502,377.7,510.7,375.8,519.7,371.3,526.3,365.9,530.4,361,534.2,355.1,537.6,348,539.2,344,544.8,346,542.6,351.7,537.4,361.4,531.6,368.9,525.3,374.6,518.7,378.8,512,381.5,502.5,383.5,496.6,383.8,496.6,383.8'
	
	const linePath1 = '1045.5,240,1007.6,240,931.7,240,779.9,240,628.1,240.2,590.2,240.2,580.7,240.3,571.3,240.2,561.8,240.1,552.4,239.8,543,239.2,524.3,237.4,515.1,236.1,506.4,234.4,497.9,232.3,482.1,232.3,483.1,239.5,485.1,270,486.1,277.1,776.8,276.7,1067,276,1067,240,1045.5,240,1045.5,240'
	
	const vertices1 = Vertices.fromPath(flaskPath1);
	const vertices2 = Vertices.fromPath(flaskPath2);
	const vertices3 = Vertices.fromPath(flaskPath3);
	const vertices4 = Vertices.fromPath(flaskPath4);
	const vertices5 = Vertices.fromPath(flaskPath5);
	const vertices6 = Vertices.fromPath(flaskPath6);
	const vertices7 = Vertices.fromPath(flaskPath7);
	const vertices8 = Vertices.fromPath(flaskPath8);
	const vertices9 = Vertices.fromPath(flaskPath9);
	const vertices10 = Vertices.fromPath(flaskPath10);
	const vertices11 = Vertices.fromPath(linePath1);
	
	const flaskPos = [
		[30.97, 85.19],
		[30.97, 90.276],
		[42.15, 62.59],
		[42.15, 67.67],
		[28.64, 60.99],
		[28.64, 66.08],
		[23.60, 74.93],
		[23.60, 80.01],
		[8.66, 75.22],
		[8.66, 80.31],
		[10.75, 60.68],
		[10.75, 65.77],
		[10.56, 42.37],
		[10.56, 47.46],
		[3.71, 29.72],
		[3.71, 34.81],
		[12.46, 16.93],
		[12.46, 22.02],
		[35.68, 73.40],
		[35.68, 77.77],
		[19.22, 52.75],
		[19.22, 57.13],
		[27.59, 36.9],
		[27.59, 41.29],
		[51.95, 62.94],
		[51.95, 66.72],
		[12.27, 30.52],
		[12.27, 34.3],
		[6.18, 7.99],
		[6.18, 11.77],
		[56.23, 69.26],
		[56.23, 72.6],
		[24.36, 92.95],
		[24.36, 96.29],
		[4.09, 54.58],
		[4.09, 57.92],
		[47.89, 50.94],
		[48.85, 53.89]
	]
	
	const wallSet = {
		isStatic: true,
		render: {
			fillStyle: 'rgba(0, 0, 0, 0.5)',
			visible: false
		}
	}
	
	for (let i = 0; i < 19; i++) {
		const flaskAbove = Bodies.fromVertices(
			percentX(flaskPos[i * 2][0]), 
			percentY(flaskPos[i * 2][1]), 
			i < 9 ? vertices1 : (i < 12 ? vertices3 : (i < 15 ? vertices5 : (i < 18 ? vertices7 : vertices9))), 
			wallSet,
			true);
		
		const flaskBelow = Bodies.fromVertices(
			percentX(flaskPos[i * 2 + 1][0]), 
			percentY(flaskPos[i * 2 + 1][1]), 
			i < 9 ? vertices2 : (i < 12 ? vertices4 : (i < 15 ? vertices6 : (i < 18 ? vertices8 : vertices10))), 
			wallSet,
			true);
		
		Body.scale(flaskAbove, cWidth / 1051, cHeight / 688);
		Composite.add(world, flaskAbove)
		Body.scale(flaskBelow, cWidth / 1051, cHeight / 688);
		Composite.add(world, flaskBelow)
	}
	
	const circleWall = Bodies.circle(
		percentX(46.64),
		percentY(29.43),
		percentX(2.87),
		wallSet
	) 
	
	const lineWall = Bodies.fromVertices(
		percentX(51.3),
		percentY(35),
		vertices11,
		{
			label: 'line',
			isStatic: true,
			restitution: 0,
			friction: 0,
			render: {
			  fillStyle: 'rgba(0, 0, 0, 0.3)',
				visible: false
			}
		},
		true
	)
	
	const endWall = Bodies.rectangle(
		percentX(150),
		percentY(37),
		percentX(100),
		percentY(1.45),
		{
			label: 'end',
			isStatic: true
		}
	)
	
	Body.scale(lineWall, cWidth / 1051, cHeight / 688);
	Composite.add(world, circleWall);
	Composite.add(world, lineWall);
	Composite.add(world, endWall);
	
	const bubbleSet = {
		frictionAir: 0,
		friction: 0,
		restitution: 1,
		inertia: Infinity,
		frictionStatic: 0,
		render: {
			fillStyle: '#ffdefe',
			strokeStyle: '#f286e6',
			lineWidth: 2
		}
	}
	
	const bubblePos = [
		[30.64, 88.67],
		[42.20, 65.04],
		[28.78, 64.6],
		[23.83, 77.69],
		[8.8, 79],
		[10.32, 63],
		[11.5, 46.44],
		[4.5, 33.21],
		[13.3, 19.11],
		[34.3, 75.22],
		[19.74, 55.74],
		[27.97, 39.32],
		[51.14, 65.19],
		[11.37, 31.61],
		[5.95, 7.78],
		[57.14, 71.44],
		[24.36, 95.2],
		[4.9, 56.32],
		[48.57, 54.58]
	]
	
	const bubbles = [];
	for (let i = 0; i < 19; i++) {
		bubbles[i] = [];
		for (let j = 0; j < (i < 9 ? 6 : (i < 12 ? 5 : (i < 15 ? 4 : (i < 18 ? 3 : 2)))); j++) {
			const bubble = Bodies.circle(
				percentX(bubblePos[i][0]), 
				percentY(bubblePos[i][1]), 
				percentX(0.38), 
				bubbleSet)
			bubbles[i].push(bubble);
			Composite.add(world, bubble);
		}
	}
	
	bubbles[11].forEach(bubble => {
		bubble.render.fillStyle = '#f9ebdc';
		bubble.render.strokeStyle = '#f4aa62';
	})
	
	bubbles[18].forEach(bubble => {
		bubble.render.fillStyle = '#f9ebdc';
		bubble.render.strokeStyle = '#f4aa62';
	})
	
	bubbles.forEach(flask => {
		flask.forEach(bubble => {
			Body.setVelocity(bubble, {
				x: Common.random(-0.4, 0.4),
				y: Common.random(-0.4, 0.4)
			})
		})
	})
	
	let ballPos = [
		[50.11, 26.01],
		[50.42, 27.15],
		[50.69, 28.32],
		[49.9, 28.54],
		[49.81, 30.8]
	]
	
	const smallBalls = [];
	
	const addLabel = (ball) => {
		setTimeout(() => {
			ball.label = 'ball1';
		}, 1000)
	}
	
	const animateSmallBalls = () => {
		const balls = [];
		for (let i = 0; i < 5; i++) {
			const pink = ['#f1d7f7', '#f48ef4'];
			const yellow = ['#f9e9c2', '#f9d84e'];
			const color = gsap.utils.random([pink, yellow], true)
			const style = color();
			const ball = Bodies.circle(
				percentX(ballPos[i][0]),
				percentY(ballPos[i][1]),
				percentX(0.36),
				{
					friction: 0.08,
					restitution: 0,
					inertia: Infinity,
					render: {
						fillStyle: style[0],
						strokeStyle: style[1],
						lineWidth: 2
					}
				}
			)
			balls.push(ball);
			Composite.add(world, ball)
			addLabel(ball);
		}
		smallBalls.push(balls);
	}
	
	const clickSignal = select('#square');
	clickSignal.style.marginLeft = `${percentX(46.92)}px`;
	clickSignal.style.marginTop = `${percentY(27.26)}px`;
	clickSignal.style.width = `${percentX(1.59)}px`;
	clickSignal.style.height = `${percentY(4.14)}px`;
	
	const disableSignal = () => {
		redSignalTL.pause();
		redSignal.style.opacity = 0.5;
		clickSignal.disabled = true;
		clickSignal.style.cursor = 'default';
	}
	
	const enableSignal = () => {
		redSignalTL.restart();
		redSignal.style.opacity = 1;
		clickSignal.disabled = false;
		clickSignal.style.cursor = 'pointer';
	}
	
	let ballReady = true;
	clickSignal.addEventListener('click', () => {
		if (smallBalls.length < 8) {
			animateSmallBalls();
			ballReady = false;
			disableSignal();
			setTimeout(() => {
				ballReady = true;
				enableSignal();
			}, 3000)
		}
	})
	
	Events.on(engine, 'beforeUpdate', () => {
		smallBalls.forEach(balls => {
			balls.forEach(ball => {
				if (ball.label === 'ball1') {
					Body.applyForce(ball, {x: ball.position.x, y: ball.position.y}, {x: 0, y: 0.0001});
				}
				if (ball.isHit) {
						Body.applyForce(ball, {x: ball.position.x, y: ball.position.y}, {x: 0.00025, y: 0.0001})
				}
			})
		})
		if (smallBalls.length >= 8 && !clickSignal.disabled) {
			disableSignal();
		} 
		if (smallBalls.length < 8 && clickSignal.disabled && ballReady) {
			enableSignal();
		}
	})
	
	let removed = 0;
	Events.on(engine, 'collisionStart', (event) => {
		const pairs = event.pairs;
		pairs.forEach(pair => {
			if (pair.bodyB.label === 'ball1' && pair.bodyA.label === 'line') {
				pair.bodyB.isHit = true
			}
			if (pair.bodyB.label === 'ball1' && pair.bodyA.label === 'end') {
				Composite.remove(world, pair.bodyB);
				removed++;
				if (removed === 5) {
					smallBalls.shift()
					removed = 0;
				}
			}
		})
	})
	let lastInnerWidth = window.innerWidth;
	window.addEventListener('resize', () => {
		if (lastInnerWidth !== window.innerWidth) {
			lastInnerWidth = window.innerWidth;
			World.clear(world);
			Engine.clear(engine);
			Runner.stop(runner);
			Runner.stop(engine);
			Render.stop(render);
			setupCanvas();
		}
	})
}

setupCanvas();


