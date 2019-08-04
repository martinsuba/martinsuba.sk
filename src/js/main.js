import './_particles.js';

const particlesConf = {
  "particles": {
    "number": {
      "value": 80,
      "density": {
        "enable": true,
        "value_area": 1262.6362266116362
      }
    },
    "color": {
      "value": "random"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.60764368405685,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 1,
        "opacity_min": 0,
        "sync": false
      }
    },
    "size": {
      "value": 4,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 4,
        "size_min": 0.5,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 1,
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 600
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "bubble"
      },
      "onclick": {
        "enable": true,
        "mode": "repulse"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 250,
        "size": 0,
        "duration": 2,
        "opacity": 0.13805312609122866,
        "speed": 3
      },
      "repulse": {
        "distance": 400,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
};

document.addEventListener('DOMContentLoaded', () => {

	const heading = document.querySelector('.intro__heading');
	const text = JSON.parse(heading.dataset.text);

	const writeWord = (text, i, fnCallback) => {
		if (i<=text.length) {
			heading.innerHTML = `${text.substring(0, i)}<span aria-hidden="true"></span>`;
			setTimeout(() => writeWord(text, i + 1, fnCallback), 100);
		}
		else {
			setTimeout(fnCallback, 1000);
		}
	};

	const newWord = (i) => {
		if (i >= text.length) {
			setTimeout(() => newWord(0), 20000);
		}
		else {
			let textNode = text[i];
			writeWord(textNode, 0, () => newWord(i + 1));
		}
	};

	newWord(0);

	particlesJS('particles-js', particlesConf);

});
