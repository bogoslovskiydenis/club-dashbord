export default {
    data: () => ({
        device: ''
      }),
    mounted() {
        window.addEventListener('resize', this.onResize);
        this.onResize();
    },
    destroyed() {
       window.removeEventListener('resize', this.onResize)
    },
    methods: {
        onResize() {
            if(window.innerWidth >= 768 && window.innerWidth <= 1200) this.device = 'TABLET'
            else if(window.innerWidth <= 768) this.device = 'MOB'
            else this.device = 'DC'
        }
    }
}
