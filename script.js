new Vue({
  el: '#app',
  data: {
    size: 250,
    shake: false,
    shaker: null,
  },
  created() {
    this.start();
  },
  methods: {
    start() {
      setInterval(() => this.shrink(), 1000);
    },
    grow() {
      this.coins();
      this.size += 10;
      this.shake = true;
      clearTimeout(this.shaker);
      this.shaker = setTimeout(() => (this.shake = false), 800);
    },
    shrink() {
      this.size -= 10;
    },
    coins() {
      const main = document.querySelector('main');
      const div = document.createElement('div');
      const uuid = Date.now().toString();
      div.className = `coin-${uuid}`;
      // div.style.width = `${this.size - 200}px`;
      div.style.width = `50px`;
      // div.style.height = `${this.size - 200}px`;
      div.style.height = `50px`;
      div.innerHTML = `
      <svg viewBox="0 0 89 89" xmlns="http://www.w3.org/2000/svg">
        <style>
        .coin-${uuid} {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          margin: 0;
          z-index: 0;
          animation: fly_${uuid} 1s infinite;
        }
        @keyframes fly_${uuid} {
            100% {
              top: ${Math.random() * 1000}%;
              right: ${Math.random() * 1000}%;
              bottom: ${Math.random() * 1000}%;
              left: ${Math.random() * 1000}%;
            }
          }
        </style>
        <g fill="none" fill-rule="evenodd">
          <circle fill="#FFDC64" cx="39.5" cy="39.5" r="39.5" />
          <circle fill="#FFC850" cx="39.5" cy="39.5" r="22.5" />
        </g>
      </svg>
      `;
      main.appendChild(div);
      // setTimeout(() => main.removeChild(div), 800);
    },
  },
});
