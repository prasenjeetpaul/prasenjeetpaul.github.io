gsap.registerPlugin(ScrollTrigger);

const showAnim = gsap.from('header', {
    yPercent: -100,
    paused: true,
    duration: 0.2
}).progress(1);

ScrollTrigger.create({
    start: 'top top',
    end: () => `bottom+=${document.body.scrollHeight}px top`,
    onUpdate: self => {
        if (self.direction === -1) {
            showAnim.play();
        } else {
            showAnim.reverse();
        }
    }
});

setTimeout(() => {
    document.querySelector('header').classList.remove('hidden');
    document.querySelector('section.intro-section.hidden').classList.remove('hidden');
});

const introSectionTL = gsap.timeline({ delay: 0.5 });

introSectionTL
    .from("header", { duration: 0.4, opacity: 0, y: -150 })
    .from('#intro-message', { duration: 0.5, opacity: 0, y: -150, ease: 'bounce' })
    .from('#intro-name', { duration: 0.5, opacity: 0, x: -200 })
    .from('#intro-designation', { duration: 0.4, opacity: 0, x: -200 }, '-=0.5')
    .from('#intro-link-1', { duration: 0.4, opacity: 0, x: -200 }, '-=0.5')
    .from('#intro-link-2', { duration: 0.5, opacity: 0, x: -200 }, '-=0.5')
    .from('#intro-link-3', { duration: 0.6, opacity: 0, x: -200 }, '-=0.5')
    .from('#intro-main-image', { duration: 0.4, opacity: 0, y: 100 })
    .from('#border-inner', { duration: 0.4, opacity: 0 })
    .from('#border-outer', { duration: 0.5, opacity: 0 }, '=-0.2')
    .from('#social-link-1', { duration: 0.4, opacity: 0, y: 100 }, '-=0.4')
    .from('#social-link-2', { duration: 0.4, opacity: 0, y: 100 }, '-=0.3')
    .from('#social-link-3', { duration: 0.4, opacity: 0, y: 100 }, '-=0.3')
    .from('#social-link-4', { duration: 0.4, opacity: 0, y: 100 }, '-=0.3')
    .from('#social-link-5', { duration: 0.4, opacity: 0, y: 100 }, '-=0.3');


const aboutMeTL = gsap.timeline({
    scrollTrigger: {
        trigger: '.about-me-detail',
        start: '20px 70%'
    }
});

aboutMeTL.from('#about-me-img', { duration: '0.5', opacity: 0, y: 100 });
aboutMeTL.from('#about-me-intro', { duration: '0.5', opacity: 0, y: 100 }, '-=0.2');


const whatIDoTL = gsap.timeline({
    scrollTrigger: {
        trigger: '.what-i-do',
        start: '20px 70%'
    }
});

whatIDoTL.from('#card-2', { duration: '0.5', opacity: 0, y: 100 });
whatIDoTL.from('#card-1', { duration: '0.5', opacity: 0, y: 100 }, '-=0.2');
whatIDoTL.from('#card-3', { duration: '0.5', opacity: 0, y: 100 }, '-=0.3');


const techDomainCount = document.getElementsByClassName('tech-domain').length;
for (let i = 1; i <= techDomainCount; i++) {
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: `#tech-domain-${i}`,
            start: 'top bottom-=30%'
        }
    });
    tl.from(`#tech-domain-${i}`, { duration: 0.5, opacity: 0, x: -100 })
    tl.from(`#tech-domain-${i} progress`, { duration: 0.5, value: 0, ease: 'in' }, '-=0.1')
}


gsap.timeline({
    scrollTrigger: {
        trigger: '.work-history',
        start: 'top bottom-=40%'
    }
}).fromTo('.work-history-list', { duration: 0.5, height: 0 }, { height: 'auto' });
const workItemArray = document.getElementsByClassName('work-item');
for (let i = 0; i < workItemArray.length; i++) {
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: workItemArray[i],
            start: 'top bottom-=30%'
        }
    });
    tl.from(
        workItemArray[i],
        {
            duration: 0.5,
            opacity: 0,
            y: 100,
            onComplete: () => {
                if (i == workItemArray.length - 1) {
                    initializeEducationTimeLine();
                    initializeProjectTimeLine();
                    initializeFooterTimeLine();
                    ScrollTrigger.refresh();
                }
            }
        }
    );
}


function initializeEducationTimeLine() {
    const educationTL = gsap.timeline({
        scrollTrigger: {
            trigger: '.education-item',
            start: 'top bottom-=35%',
        }
    });
    educationTL.from('.education-item', { duration: 0.5, opacity: 0, y: 100 });
    educationTL.from('.education-detail', { duration: 0.5, opacity: 0, x: -100 }, '-=0.3');
    educationTL.from('.education-line', { duration: 0.5, flexGrow: 0 }, '-=0.2');
}

function initializeProjectTimeLine() {
    Array.from(document.getElementsByClassName('project-item')).forEach(ele => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ele,
                start: 'top bottom-=30%'
            }
        });
        tl.from(ele, { duration: 0.5, opacity: 0, y: 100 })
    });
}

function initializeFooterTimeLine() {
    const resumeTL = gsap.timeline({
        scrollTrigger: {
            trigger: '.resume-info',
            start: 'top bottom-=30%',
        }
    });
    resumeTL.from('.resume-info', { duration: 0.5, opacity: 0, y: 100 });


    const profileLinkTL = gsap.timeline({
        scrollTrigger: {
            trigger: '.profile-links',
            start: 'top bottom-=30%',
        }
    });
    Array.from(document.querySelectorAll('.profile-links div')).forEach(ele => {
        profileLinkTL.from(ele, { duration: 0.5, opacity: 0, y: 100 }, '-=0.3')
    });
}





const NAV_LINKS = ['home-nav-link', 'about-nav-link', 'skill-nav-link', 'project-nav-link', 'contact-nav-link'];

function initializeNavLinks() {
    ScrollTrigger.create({
        trigger: '.about-me-section',
        start: 'top 50%',
        onEnter: () => setActiveNavLink('about-nav-link'),
        onLeaveBack: () => setActiveNavLink('home-nav-link'),
    });


    ScrollTrigger.create({
        trigger: '.skill-section',
        start: 'top 50%',
        onEnter: () => setActiveNavLink('skill-nav-link'),
        onLeaveBack: () => setActiveNavLink('about-nav-link'),
    });


    ScrollTrigger.create({
        trigger: '.project-section',
        start: 'top 50%',
        onEnter: () => setActiveNavLink('project-nav-link'),
        onLeaveBack: () => setActiveNavLink('skill-nav-link'),
    });


    ScrollTrigger.create({
        trigger: '.contact-section',
        start: 'top bottom-=10%',
        onEnter: () => setActiveNavLink('contact-nav-link'),
        onLeaveBack: () => setActiveNavLink('project-nav-link'),
    });
}

function setActiveNavLink(id) {
    resetNavLink();
    getNavLink(id).classList.add('active');
}

function resetNavLink() {
    NAV_LINKS.forEach(link => getNavLink(link).classList.remove('active'));
}

function getNavLink(id) {
    return document.getElementById(id);
}

function setNavLinkClickListeners() {
    getNavLink('home-nav-link').addEventListener('click', () => {
        document.querySelector('.intro-section').scrollIntoView({ behavior: 'smooth' });
    });

    getNavLink('about-nav-link').addEventListener('click', () => {
        document.querySelector('.about-me-section').scrollIntoView({ behavior: 'smooth' });
    });

    getNavLink('skill-nav-link').addEventListener('click', () => {
        document.querySelector('.skill-section').scrollIntoView({ behavior: 'smooth' });
    });

    getNavLink('project-nav-link').addEventListener('click', () => {
        document.querySelector('.project-section').scrollIntoView({ behavior: 'smooth' });
    });

    getNavLink('contact-nav-link').addEventListener('click', () => {
        document.querySelector('.contact-section').scrollIntoView({ behavior: 'smooth' });
    });
}

function initHeaderAnimation() {

    // The debounce function receives our function as a parameter
    const debounce = (fn) => {
        // This holds the requestAnimationFrame reference, so we can cancel it if we wish
        let frame;

        // The debounce function returns a new function that can receive a variable number of arguments
        return (...params) => {
            // If the frame variable has been defined, clear it now, and queue for next frame
            if (frame) {
                cancelAnimationFrame(frame);
            }

            // Queue our function call for the next frame
            frame = requestAnimationFrame(() => {
                // Call our function and pass any params we received
                fn(...params);
            });
        };
    };

    // Reads out the scroll position and stores it in the data attribute
    // so we can use it in our stylesheets
    const storeScroll = () => {
        document.documentElement.dataset.scroll = window.scrollY;
    };

    // Listen for new scroll events, here we debounce our `storeScroll` function
    document.addEventListener("scroll", debounce(storeScroll));

    // Update scroll position for first time
    storeScroll();
}

function init() {
    initializeNavLinks();
    setNavLinkClickListeners();
    setActiveNavLink('home-nav-link');
    initHeaderAnimation();
}

document.onload = init();
