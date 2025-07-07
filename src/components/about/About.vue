<template>
    <section class="about-search">
        <h2 class="about-search_heading">
            Diamond Finder
        </h2>
        <div class="text-container">
            <p 
                class="about-search_paragraph"
                :class="{ 'expanded': isExpanded }"
                ref="textParagraph"
            >
                Use our diamond search feature to find IGI and GIA-graded, 
                conflict-free loose diamonds of the highest quality. 
                Browse thousands of options and use the filters to 
                narrow down the selection by carat, cut, color, clarity, shape and price. 
                Still not sure which diamond to invest in? 
                Our diamond buying guide will help you choose the best match.
            </p>
            <button 
                v-if="showToggleButton"
                class="toggle-button"
                @click="toggleText"
            >
                {{ isExpanded ? 'Show less' : 'Show more' }}
            </button>
        </div>
    </section>
</template>

<script>
export default {
    name: 'AboutSearch',
    data() {
        return {
            isExpanded: false,
            showToggleButton: false
        }
    },
    mounted() {
        this.checkTextOverflow();
        window.addEventListener('resize', this.checkTextOverflow);
    },
    beforeUnmount() {
        window.removeEventListener('resize', this.checkTextOverflow);
    },
    methods: {
        toggleText() {
            this.isExpanded = !this.isExpanded;
        },
        checkTextOverflow() {
            this.$nextTick(() => {
                const element = this.$refs.textParagraph;
                if (element) {
                    // Проверяем, нужно ли показывать кнопку
                    this.showToggleButton = element.scrollHeight > element.clientHeight;
                }
            });
        }
    }
}
</script>

<style scoped>
.about-search {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
}

.about-search_heading {
    align-items: center;
    color: var(--color-primary);
    display: flex;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    justify-content: center;
    line-height: normal;
    margin: 0 0 16px;
    text-align: center;
}

.text-container {
    position: relative;
    max-width: 600px;
    margin: 0 auto;
}

.about-search_paragraph {
    color: var(--color-primary);
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
    text-align: center;
    text-transform: none;
    
    /* Ключевые стили для ограничения текста */
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    margin: 0 auto;
    max-width: 100%;
}

.about-search_paragraph.expanded {
    -webkit-line-clamp: unset;
    display: block;
}

.toggle-button {
    background: linear-gradient(270deg, #fff 67.35%, #fff0 98.98%, hsla(0, 0%, 100%, 0.477) 0);
    color: #151542;
    font-family: Gantari;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 16px;
    padding-left: 32px;
    position: absolute;
    right: 0;
    bottom: 0;
    text-decoration-line: underline;
    background-color: white;
    border: none;
    cursor: pointer;
}

.toggle-button:hover {
    text-decoration: none;
}
</style>