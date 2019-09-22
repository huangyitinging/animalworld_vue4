<template>
    <div>
        <div class="container">
            <div class="catbanner"> </div>
            <div class="d-md-flex justify-content-sm-around my-4 text-muted">
                <h6>填選汪喵 Q&A，即可獲得汪喵星球優惠折扣碼。</h6>
                <h6>小提醒：答案幾乎都在圖示裡</h6>
            </div>    
            <div class="mt-6">
                <h2 class="text-center text-primary">
                    <i class="fas fa-paw"></i>
                    購物流程
                    <i class="fas fa-paw"></i>
                </h2>
            </div>
            <div class="row my-5 d-flex justify-content-center">
                <div class="col-md-3 my-3">
                    <div class="bg-circle"><i class="fas fa-cart-plus fa-4x text-white progress-icon"></i></div>
                    <div class="d-inline-flex flex-column ml-3">
                        <span class="text-danger">STEP 1</span>
                        <span class="text-muted">確認購物清單</span>
                   </div>
                     <!--collapse-->
                     <div class="mt-3" id="addcart">
                        <div class="card card-body">
                        我們的罐罐食材來自各個地方，應有盡有，絕對不會挑不到主子喜歡的口味。
                        將罐罐成功加入購物車
                        </div>
                    </div>
                </div>
                <div class="col-md-3 my-3">
                    <div class="bg-circle"><i class="far fa-credit-card fa-4x text-white progress-icon"></i></div>
                    <div class="d-inline-flex flex-column ml-3">
                        <span class="text-danger">STEP 2</span>
                        <span class="text-muted">填寫付款資訊</span>
                    </div>
                     <!--collapse-->
                    <div class="mt-3" id="payinformation">
                        <div class="card card-body">
                        記得這個階段加入汪貓星球的優惠折扣碼，讓主子吃得開心，奴才花得開心。
                        </div>
                    </div>
                </div>
                <div class="col-md-3 my-3">
                    <div class="bg-circle"><i class="fas fa-list-alt fa-4x text-white progress-icon"></i></div>
                    <div class="d-inline-flex flex-column ml-3">
                        <span class="text-danger">STEP 3</span>
                        <span class="text-muted">送出奴才訂單</span>
                    </div>
                     <!--collapse-->
                    <div class="mt-3" id="orderlist">
                        <div class="card card-body">
                        訂單送出後想要更改，請來電告知我們服務人員。
                        </div>
                    </div>
                </div>
                <div class="col-md-3 my-3">
                    <div class="bg-circle"><i class="fas fa-truck fa-4x text-white progress-icon"></i></div>
                    <div class="d-inline-flex flex-column ml-3">
                        <span class="text-danger">STEP 4</span>
                        <span class="text-muted">完成最後付款</span>
                    </div>
                     <!--collapse-->
                    <div class="mt-3" id="complete">
                        <div class="card card-body">
                        訂單完成後需要2-3日的配送，建議早點下單，早點讓主子有最好的享受。
                        </div>
                    </div>
                </div>
            </div>
           <section class="my-8">
                 <hr class="hr0" />
                <h4 class="text-center text-primary my-5">
                     <i class="fas fa-paw"></i>
                     Q&A 開始
                    <i class="fas fa-paw"></i>
                </h4>
                <div class="row d-flex justify-content-center border border-secondary">
                    <div class="col-sm-6 col-none question-img"></div>
                        <div class="col-sm-6">
                        <form class="needs-validation" novalidate>
                        <div class="form-group row">
                            <legend class="col-form-label col-12 pt-2">
                            1. 貓咪捉到獵物後會獻給自己的主人，因為它們認為主人是最笨的獵手，擔心主人會餓死。
                            </legend>
                            <div class="col-12">
                                <div class="custom-control custom-radio">
                                    <input class="custom-control-input" type="radio" name="question1" id="question1-1" value="option1" required>
                                    <label class="custom-control-label" for="question1-1">真的假的</label>
                                    </div>
                                    <div class="custom-control custom-radio">
                                    <input class="custom-control-input" type="radio" name="question1" id="question1-2" value="option2" required>
                                    <label class="custom-control-label" for="question1-2">主子做什麼都是對的</label>
                                </div>
                            </div>
                            <legend class="col-form-label col-12 pt-2">
                            2. 在汪貓星球送出訂單後想修改，可以打電話給客服人員。
                            </legend>
                            <div class="col-12">
                                <div class="custom-control custom-radio">
                                <input class="custom-control-input" type="radio" name="question2" id="question2-1" value="option1" required>
                                <label class="custom-control-label" for="question2-1">
                                    沒錯，這題太簡單了
                                </label>
                                </div>
                                <div class="custom-control custom-radio">
                                <input class="custom-control-input" type="radio" name="question2" id="question2-2" value="option2" required>
                                <label class="custom-control-label" for="question2-2">
                                    什麼，我竟然不知道，改快回去找答案
                                </label>
                                </div>
                            </div>
                            <legend class="col-form-label col-12 pt-2">
                            3. 貓咪跟狗狗，他們鼻子上的紋路都是獨一無二的。
                            </legend>
                            <div class="col-12">
                                <div class="custom-control custom-radio">
                                <input class="custom-control-input" type="radio" name="question3" id="question3-1" value="option1" required>
                                <label class="custom-control-label" for="question3-1">
                                    天阿！這也太冷知識
                                </label>
                                </div>
                                <div class="custom-control custom-radio">
                                <input class="custom-control-input" type="radio" name="question3" id="3-2" value="option2" required>
                                <label class="custom-control-label" for="3-2">
                                    回去檢查貓主子跟狗主子的鼻子看看
                                </label>
                                </div>
                            </div>
                             <legend class="col-form-label col-12 pt-2">
                            4. 世界上最貴的狗是捷克狼犬，由混合喀爾巴阡狼與純種德國牧羊犬而培育成的。
                            </legend>
                            <div class="col-12 pb-2">
                                <div class="custom-control custom-radio">
                                <input class="custom-control-input" type="radio" name="question4" id="question4-1" value="option1" required>
                                <label class="custom-control-label" for="question4-1">
                                    還是我家狗兒最好了
                                </label>
                                </div>
                                <div class="custom-control custom-radio">
                                <input class="custom-control-input" type="radio" name="question4" id="question4-2" value="option2" required>
                                <label class="custom-control-label" for="question4-2">
                                    幸好我都領養米克斯，領樣代替購買
                                </label>
                                </div>
                            </div>
                             <legend class="col-form-label col-12 pt-2">
                            5. 在汪貓星球 STEP 2，要記得加入優惠碼享用折扣。
                            </legend>
                            <div class="col-12">
                                <div class="custom-control custom-radio">
                                <input class="custom-control-input" type="radio" name="question5" id="question5-1" value="option1" required>
                                <label class="custom-control-label" for="question5-1">
                                    筆記筆記，趕快記下來
                                </label>
                                </div>
                                <div class="custom-control custom-radio">
                                <input class="custom-control-input" type="radio" name="question5" id="question5-2" value="option2" required>
                                <label class="custom-control-label" for="question5-2">
                                    太好了，能買很多罐罐給主子
                                </label>
                                </div>
                            </div>
                        <div class="form-group mt-3 mr-3 ml-auto">
                            <button type="submit" class="btn btn-primary text-white"
                             @click.prevent="getCouponModal()"
                             >送出</button>
                        </div>
                    </div>
                   </form>
                 </div>
                </div>  
           </section>
        </div>
        <!-- Modal -->
        <div class="modal fade" id="couponModal" tabindex="-1" role="dialog">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">恭喜獲得汪貓星球 85 折扣碼</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <p>折扣碼：dogcat</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-lemon" data-dismiss="modal">太棒了</button>
                     <router-link class="btn btn-primary text-white" to="/petproduct" data-dismiss="modal">趕緊購物去</router-link>
                </div>
                </div>
            </div>
        </div>
        
        
    </div>
</template>


<script>
import $ from 'jquery';
export default {
    data(){
        return{
        };
    },
    methods:{
        getCouponModal(){
            $('#couponModal').modal('show');
        },
    },
}
</script>


<style lang="">
.catbanner{
    background-image: url(https://i.imgur.com/CUUzjan.png);
    width: 100%;
    height:200px;
    background-position:center;
    background-size:contain;
    margin-top:1.5rem;
}
.question-img{
    background-image: url(https://i.imgur.com/WGjqSJw.png);
    width: 100%;
    height:auto;
    background-position:left center;
    background-size:contain;
}
@media (min-width: 992px) { 
 .question-img{
    background-size:cover;
}
}
a:hover{
    text-decoration: none;
}
.hr0{ 
    height:1px;
    border:none;
    border-top:1px dashed #ff9999;
}
.bg-circle{
    display: inline-block;
    width: 100px;
    height: 100px;
    background: #ff9999;
    border-radius: 50px;
    border:3px solid #ffcccc;
}
.progress-icon{
    position: relative;
    top:20px;
    left: 15px;
}
.flex-column > .text-muted{
    font-size: 18px;
}
</style>