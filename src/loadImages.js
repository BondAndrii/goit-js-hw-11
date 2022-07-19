import axios from 'axios'
const loader = {
    world: "",
    page: 1,
    async fetchImages() {       
        const answer = await axios.get(`https://pixabay.com/api/?key=28720978-48527d1c9d73f1bfd555e68c2`,
            {
                params: {
                    q: this.world,
                    per_page: 40,
                    page: this.page,
                    image_type: "photo",
                    orientation: "horizontal",
                    safesearch: true,
                }
            });
        this.page += 1;
        return answer.data;
    }
};

export default loader