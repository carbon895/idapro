<template>
    <div class="card">
        <div class="card-delete">
            <img src="@/assets/delete.svg" @click="removeCard" alt="img-delete" />
        </div>
        <div class="card-image">
            <img :src=" require('@/assets/' + card_data.imageLink) " alt="image"/>
        </div>
        <div class="card-title">{{ card_data.title }}</div>
        <div class="card-descrip">{{ card_data.descrip }}</div>
        <div class="card-cost">{{ card_data.cost }} руб.</div>
    </div>
</template>

<script>
export default {
  name: 'cardGoods',
  props: {
      card_data: {
        type: Object,
        default() {
            return []
        }
      }
  },
  data() {
    return {
    
    }
  },
  methods: {
    removeCard() {
        this.$emit('remove', this.card_data.id);
    }
  }
}
</script>

<style lang="scss" scoped>
    .card {
        width: 332px;
        height: 432px;
        position: relative;
        background: #FFFEFB;
        box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04), 0px 6px 10px rgba(0, 0, 0, 0.02);
        border-radius: 4px;
        margin: 0 16px 16px;
        font-family: 'Source Sans Pro', sans-serif;
        &:hover {
            & .card-delete {
                opacity: 1;
            }
        }
        &-delete {
            position: absolute;
            width: 32px;
            height: 32px;
            text-align: center;
            background: #FF8484;
            box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
            border-radius: 10px;
            padding: 8px 0;
            box-sizing: border-box;
            right: -15px;
            top: -15px;
            cursor: pointer;
            opacity: 0;
            transition: 1s;
        }
        &-image {
            width: 100%;
            height: 200px;
        }
        &-title {
            font-style: normal;
            font-weight: 600;
            font-size: 20px;
            line-height: 25px;
            color: #3F3F3F;
            padding: 16px 16px 8px;
            box-sizing: border-box;
        }
        &-descrip {
            font-style: normal;
            font-weight: normal;
            font-size: 16px;
            line-height: 20px;
            color: #3F3F3F;
            padding: 8px 16px 25px;
            height: 80px;
            overflow: auto;
        }
        &-cost {
            font-style: normal;
            font-weight: 600;
            font-size: 24px;
            line-height: 30px;
            color: #3F3F3F;
            padding: 7px 16px 16px;
            box-sizing: border-box;
        }
    }
</style>