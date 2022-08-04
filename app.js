const app = Vue.createApp({
    data() {
        return {
            url: 'http://www.kulotsystems.tech',
            showBooks: true,
            books: [
                { title: 'name of the wind', author: 'patrick rothfuss' , img: 'assets/1.jpg', isFav: true  },
                { title: 'the way of kings', author: 'brandon sanderson', img: 'assets/2.jpg', isFav: false },
                { title: 'the final empire', author: 'brandon sanderson', img: 'assets/3.jpg', isFav: true  },
            ]
        }
    },
    computed: {
        filteredBooks() {
            return this.books.filter(book => book.isFav);
        }
    },
    methods: {
        toggleShowBooks() {
            this.showBooks = !this.showBooks;
        },
        toggleFav(book) {
            book.isFav = !book.isFav;
        }
    }
});

app.mount('#app');
