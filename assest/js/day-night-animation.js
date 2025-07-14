var select = function(s) {
        return document.querySelector(s);
    },
    selectAll = function(s) {
        return document.querySelectorAll(s);
    },
    hit = select('.hit_day_night_animation'),
    allStars = selectAll('.starGroup_day_night_animation *'),
    allClouds = selectAll('.cloud_day_night_animation'),
    allCloudPuffs = selectAll('.cloud_day_night_animation circle');

// Initial setup
TweenMax.set('svg', {
    visibility: 'visible'
});

TweenMax.set(allStars, {
    transformOrigin: '50% 50%'
});

TweenLite.defaultEase = Elastic.easeOut.config(0.58, 0.8);

var tl = new TimelineMax({
    paused: true
});

// Day → Night transition
tl.staggerTo(['.sun_day_night_animation', '.moonMask_day_night_animation', '.moon_day_night_animation'], 1, {
        cycle: {
            attr: [{
                cx: '-=140',
                cy: '-=20'
            }, {
                cx: '-=140',
                cy: '-=20'
            }, {
                cx: '-=90',
                cy: '-=0'
            }]
        }
    }, 0)

    .staggerTo(['.moon_day_night_animation', '.sun_day_night_animation'], 1, {
        cycle: {
            alpha: [1, 0]
        }
    }, 0, '-=1')
    .to('day_night_animation', 1, {
        // backgroundColor: '#2C3E7B'
    }, '-=1')
    .to('.outline_day_night_animation', 1, {
        stroke: '#6172AD',
        fill: '#45568D'
    }, '-=1')

    .staggerFrom(allStars, 0.9, {
        cycle: {
            x: [-20, 30, 40, -30, 60, -40, 80, 90, 100, 110, 120]
        },
        alpha: 0
    }, 0.005, '-=1')

    .staggerTo(allClouds, 1, {
        cycle: {
            x: [40, 20]
        },
        alpha: 0
    }, 0, '-=1')

    .addPause()

    // Night → Day transition
    .staggerTo(['.sun_day_night_animation', '.moonMask_day_night_animation', '.moon_day_night_animation'], 1, {
        cycle: {
            attr: [{
                cx: '+=140',
                cy: '+=20'
            }, {
                cx: '+=140',
                cy: '+=20'
            }, {
                cx: '+=90',
                cy: '+=0'
            }]
        }
    }, 0)
    .staggerTo(['.moon_day_night_animation', '.sun_day_night_animation'], 1, {
        cycle: {
            alpha: [0, 1]
        }
    }, 0, '-=1')
    .to('day_night_animation', 1, {
        backgroundColor: '#26D6FE',
        ease: Linear.easeNone
    }, '-=1')
    .to('.outline_day_night_animation', 1, {
        stroke: '#FCFDFE',
        fill: '#85E8FE'
    }, '-=1')
    .staggerTo(allStars, 1, {
        alpha: 0
    }, 0, '-=1')
    .staggerFromTo(allClouds, 0.6, {
        cycle: {
            y: [120, 160],
            x: [0]
        }
    }, {
        cycle: {
            y: [0],
            x: [0]
        },
        alpha: 1,
        immediateRender: false
    }, 0.06, '-=1')

    .from(['.plane_day_night_animation', '.contrail_day_night_animation'], 0.7, {
        x: -400,
        ease: Linear.easeNone
    }, '-=1')

    .to('.contrail_day_night_animation', 0.5, {
        alpha: 0,
        ease: Sine.easeOut
    });



tl.timeScale(1);
TweenMax.globalTimeScale(1.3);

function clickToggleButton(isNowDay) {
     if (isNowDay) {
        tl.reverse(); 
    } else {
        tl.play();

    }
}

