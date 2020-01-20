<template>
    <div>        
        <b-container>
            <b-row>
                <b-col md="6" class="p-2">
                    <router-link to="/PortfolioOne">
                    <b-img fluid src="https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg"></b-img>
                    </router-link>
                </b-col>
                <b-col md="6" class="p-2">
                    <router-link to="/PortfolioTwo">
                   <b-img fluid src="https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg"></b-img> 
                   </router-link>
                </b-col>
                <b-col md="6" class="p-2">
                    <router-link to="/PortfolioThree">
                    <b-img fluid src="https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg"></b-img>
                    </router-link>
                </b-col>
            </b-row>
        </b-container>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'Portfolio'
}
</script>

<style lang="stylus" scoped>

</style>