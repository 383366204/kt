<template>
    <main class="main">
        <el-row type="flex" justify="space-around">
           <el-col class="title">
                <h1 class="text-center">公司介绍</h1>
            </el-col>
        </el-row>
        <el-row type="flex" justify="space-around">
            <el-col class="information">
                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    开田股份有限公司自1992年创立至今，专注厨电领域26年，始终以产品创新为企业战略重心，从中国知名上市企业，稳步成长为具有国际影响力的全球化品牌。如今，开田集团的营销服务已经进入全球126个国家和地区，拥有341个海外合作伙伴。拥有优质的全球供应链、世界顶尖的研发团队，助力开田成为屹立世界的中国品牌。
                </p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    目前，开田产品集群已涵盖灶具、抽油烟机、热水器、洗碗机、蒸箱、烤箱、消毒柜、橱柜、净水器、后厨房电器等多款产品。为适应不同消费群体对厨卫产品的需求，开田集团已实现开田、百得双品牌运营，从都市到乡镇，双品牌运营全面服务更大范围的家庭用户。
                    开田坚持创新，已获授权专利750多项，数量居行业前列，是行业唯一获国家级工业设计中心、国家认定企业技术中心双认证的企业。
                </p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    其中，开田烟机语音控制、蒸水洗（专利号：ZL201520272421.X），灶具聚能燃烧、飞碟式翻转炉头（专利号：ZL201520969796.1），热水器温控舱为核心创新科技，引领行业发展趋势。其中应用飞碟式翻转炉头的魔碟灶更是获得了IDEA奖、红点奖、IF奖世界三大设计奖大满贯。
                    凭借行业领先的燃气具研发优势，开田承担了包括北京奥运会、新加坡青奥会、墨西哥泛美运动会在内的24个国际、国内大型体育运动会的火炬研发和制造任务，成为名副其实的“火炬专业户”。
                </p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    家电智能化时代，开田围绕“高端智能厨电”战略定位全面进阶。在“互联网+”思想推动下，开田以“人工智能”为方向，掀起里程碑式的厨电智能革命。凭借时尚美观的工业设计、更加优质的服务体验，开田赋予产品更人性化的解决方案，开启全新的“厨房后工业时代”。
                    基于消费市场的转型升级，消费者价值观和消费行为也在不断转变。开田与时尚集团展开战略合作，将专业创新的智慧科技，转化成在家就能体验的、更加时尚有品质的“智尚生活”。
                </p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    同时，开田品牌口号升级为“智慧+ 时尚家”，并聘请赵丽颖为开田智尚生活·首席品鉴官，林更新为开田产品形象代言人，共同创领“智尚生活新标准”。
                    在发展企业的同时，开田积极投身公益事业。从创立“1+2红领巾助学工程”资助近3000名失学儿童，到捐建3所希望小学、1所爱心食堂、1个希望医院、1个小学图书室，再到资助150名新疆贫困大学生、捐建13所希望厨房，开田每年都会不遗余力，为社会贡献自己的一分力量。
                    作为中国高端智能厨电的企业代表，开田以“用户至上、锐意进取、共担共赢、高效协作、工匠精神”作为企业文化核心价值观，不断完善智能产业布局，并致力于成为全球高端品质厨房空间的引领者。
                </p>
            </el-col>
        </el-row>
        <el-row>
            <el-col>
                <img src="../assets/img/company.jpg" alt="公司大楼">
            </el-col>
        </el-row>
    </main>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {},
  methods: {}
};
</script>
<style scoped>
.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 32px;
}
.main .el-row {
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
/* 标题 */
.main .title {
  font-size: 20px;
  color: #555;
  position: relative;
  width: 160px;
}
/* 标题的装饰（左小） */
.main .title::before {
  position: absolute;
  top: 10px;
  left: -52px;
  width: 9px;
  height: 9px;
  content: "";
  display: block;
  background-color: #2eb4e9;
  border-radius: 50%;
}
/* 标题的装饰（右小） */
.main .title::after {
  position: absolute;
  top: 10px;
  right: -52px;
  width: 9px;
  height: 9px;
  content: "";
  display: block;
  background-color: #2eb4e9;
  border-radius: 50%;
}
/* 标题的装饰（左大） */
.main .title h1::before {
  position: absolute;
  top: 8px;
  left: -38px;
  width: 13px;
  height: 13px;
  content: "";
  display: block;
  background-color: #2eb4e9;
  border-radius: 50%;
}
/* 标题的装饰（右大） */
.main .title h1::after {
  position: absolute;
  top: 8px;
  right: -38px;
  width: 13px;
  height: 13px;
  content: "";
  display: block;
  background-color: #2eb4e9;
  border-radius: 50%;
}

.main .information {
  width: 810px;
  margin-bottom: 10px;
}
</style>
