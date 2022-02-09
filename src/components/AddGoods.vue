<template>
  <div class="AddGoods">
    <h1>{{ title }}</h1>
    <div class="AddGoods-box">
      <div class="AddGoods-box_item">
        <div class="required">Наименование товара: </div>
        <input type="text" :class="{ error: isErrorInput}" required  placeholder="Введите наименование товара" v-model="nameGoods" />
      </div>
      <div class="AddGoods-box_item">
        <div>Описание товара</div>
        <textarea v-model="descGoods" placeholder="Введите описание товара"></textarea>
      </div>
      <div class="AddGoods-box_item">
        <div class="required">Ссылка на изображение товара</div>
        <input type="text" :class="{ error: isErrorInput}" required v-model="linkImage" placeholder="Введите ссылку / photo.svg "/>
      </div>
      <div class="AddGoods-box_item">
        <div class="required">Цена товара</div>
        <input type="text"  :class="{ error: isErrorInput}" required v-model="costGoods" placeholder="Введите цену"/>
      </div>
      <button class="AddGoods-box_btn" :class="{ active: isActiveBtn }" @click="validate">Добавить товар</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AddGoods',
  props: {
    title: String,
  },
  data() {
    return {
      nameGoods: '',
      descGoods: '',
      linkImage: 'photo.svg',
      costGoods: '',
      isActiveBtn: false,
      isErrorInput: false,
    }
  },
  methods:{
    validate() {
      if (this.nameGoods != '', this.linkImage != '', this.costGoods != '') {
       this.isErrorInput = false;
       this.isActiveBtn = true;
       this.addCardArr();
      } else {
        this.isErrorInput = true;
        this.isActiveBtn = false;
      }
      // this.getValues();
    }, 
    addCardArr() {
      let cardObj = {
        id: '',
        title: this.nameGoods,
        descrip: this.descGoods,
        imageLink: this.linkImage,
        cost: this.costGoods,
      };
      let newCard = []
      newCard.push(cardObj)
      this.$emit('addCard', newCard); 
    },
    // getValues(){
    //   if(this.isActiveBtn) {
    //     this.$store.commit('SET_ValueNameGoods', this.valueNameGoods);
    //     this.$store.commit('SET_ValueDescGoods', this.valueDescGoods);
    //     this.$store.commit('SET_ValueLinkImage', this.valueLinkImage);
    //     this.$store.commit('SET_ValueCostGoods', this.valueCostGoods);
    //   }
    // },
  },
}
</script>

<style scoped lang="scss">
  h1 {
    font-style: normal;
    font-weight: 600;
    font-size: 28px;
    line-height: 35px;
    color: #3F3F3F;
    padding-bottom: 16px
  }
  .AddGoods {
    &-box {
      width: 332px;
      height: 440px;
      background: #FFFEFB;
      box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04), 0px 6px 10px rgba(0, 0, 0, 0.02);
      border-radius: 4px;
      padding: 24px;
      box-sizing: border-box;
      &_item {
        margin-bottom: 16px;
        & .required:before {
          content: '';
          background-color: #FF8484;
          width: 4px;
          height: 4px;
          position: absolute;
          right: -5px;
          border-radius: 50%;
        }
        & div {
          display: inline-block;
          position: relative;
          font-style: normal;
          font-weight: normal;
          font-size: 10px;
          line-height: 13px;
          letter-spacing: -0.02em;
          color: #49485E;
          margin-bottom: 4px;
        }
        & input {
          width: 284px;
          height: 36px;
          padding: 10px 16px;
          box-sizing: border-box;
          background: #FFFEFB;
          font-family: 'Source Sans Pro', sans-serif;
          font-style: normal;
          font-weight: normal;
          font-size: 12px;
          line-height: 15px;
          box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
          border-radius: 4px;
        }
        & textarea {
          width: 284px;
          height: 108px;
          padding: 10px 16px;
          box-sizing: border-box;
          background: #FFFEFB;
          font-family: 'Source Sans Pro', sans-serif;
          font-style: normal;
          font-weight: normal;
          font-size: 12px;
          line-height: 15px;
          box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
          border-radius: 4px;
          resize: none;
        }
        & .error {
          border: 1px solid #FF8484;
        }
      }
      &_btn {
        width: 284px;
        height: 36px;
        color: #B4B4B4;
        background: #EEEEEE;
        border-radius: 10px;
        cursor: pointer;
      }
      & .active {
        color: #3F3F3F;
      }
    }
  }
</style>
