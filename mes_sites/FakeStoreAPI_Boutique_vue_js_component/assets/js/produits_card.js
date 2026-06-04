export default {
    props: {
        item: {
            type: Object,
        }
    },
    template: `
        <article class="bs-card card h-100 bg-blur shadow-sm rounded-4 p-3 border-0">
            <div class="card-img-top">
                <img class="bg-blur p-3 rounded-4 w-100" :src="item.image" :alt="item.title">
            </div>
            <div class="card-body p-3 text-white">
                <h5 class="card-title fw-bold mb-3 text-truncate">{{ item.title }}</h5>
                <p class="card-text mb-4">{{ item.category }}</p>
                <div class="card-actions d-flex justify-content-between align-items-center">
                    <span class="fw-bold bg-blur rounded-5 btn text-white">{{ item.price }} EUR</span>
                    <button class="btn text-white rounded-5 btn-modif" @click="$emit('details', item)">Plus de details</button>
                </div>
            </div>
        </article>
    `
}
