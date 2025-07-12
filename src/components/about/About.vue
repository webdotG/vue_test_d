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
                    this.showToggleButton = element.scrollHeight > element.clientHeight;
                }
            });
        }
    }
}
</script>

<style scoped>
/* мобилка */
.about-search {
    max-width: 800px;
    margin: 0 auto;
    
}

.about-search_heading {
    color: var(--color-primary);
    
    font-weight: 600;
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
    
    text-align: center;
    
    
    display: -webkit-box;
    
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
    background: linear-gradient(to right, rgba(255, 255, 255, 0), white 30%, white);
    color: #151542;
    font-size: 12px;
    font-weight: 500;
    line-height: 1.5;
    padding-left: 32px;
    position: absolute;
    right: 0;
    bottom: 0;
    text-decoration: underline;
    border: none;
    cursor: pointer;
}

.toggle-button:hover {
    text-decoration: none;
}

/* планшет */
@media (min-width: 640px) {
    .about-search {
        padding: 20px;
    }
    .about-search_heading {
        font-size: 24px;
    }
    .about-search_paragraph {
        font-size: 15px;
        
    }
    .toggle-button {
        font-size: 14px;
    }
}

/* десктоп */
@media (min-width: 1100px) {
    .about-search_heading {
        font-size: 26px;
    }
    .about-search_paragraph {
        font-size: 16px;
    }
}
</style>