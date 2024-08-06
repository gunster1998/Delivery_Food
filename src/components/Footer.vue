<template>
      <footer class="footer">
        <div class="container">
            <div class="footer-box">
                <router-link to="/" class="logo">
                    <img src="../assets/img/logo.png" class="logo_img">
                    <p class="logo_text">Delivery <br/> Food</p>
                </router-link>
                <div class="footer-nav">
                    <ul>
                        <li>Ресторанам</li>
                        <li>Курьерам</li>
                        <li>Пресс-центр</li>
                        <li>Контакты</li>
                    </ul>
                </div>
                    <div class="footer-social">
                        <img src="../assets/img/social/inst.png" alt="insta">
                        <img src="../assets/img/social/facebook.png" alt="facebook">
                        <img src="../assets/img/social/vk.png" alt="vk">
                    </div>
            </div>
            </div>
    </footer>
</template>

<script>
export default {

}
</script>

<style scoped>
.footer{
    min-height:156px;
    display: flex;
    align-items: center;
    padding: 30px 0;
}

.footer-box{
    height: 100%;
    display:flex;
    align-items: center;
    justify-content: space-between;
    gap: 36px;
    flex-wrap: wrap;
}

.footer-nav{
    flex-grow: 1;
}
.footer-nav ul{
    display: flex;
    flex-grow: 1;
    align-items: center;
    list-style-type: none;
    padding: 0;
    margin: 0;
    gap: 15px;
    flex-wrap: wrap;
}

.footer-nav ul li {
    color:#595959;
    font-size: 18px;
    font-weight: 400;
}
.footer-social{
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap:20px;
}
</style>