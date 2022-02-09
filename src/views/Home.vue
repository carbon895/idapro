<template>
  <div class="home">
    <div class="home-left">
      <AddGoods 
        @addCard="addCards"
        title="Добавление товара"
      />
    </div>
    <div class="home-right">
      <CardGoods
        v-for="(card, index) in cards"
        :key="index"
        :card_data="card"
        @remove="removeCards"
      />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import AddGoods from '@/components/AddGoods.vue'
import CardGoods from '@/components/CardGoods.vue'

export default {
  name: 'Home',
  components: {
    AddGoods,
    CardGoods
  },
  data() {
    return {
      cards: [
        { 
          id: '1',
          imageLink: 'photo.svg', 
          title: 'Наименование товара', 
          descrip: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
          cost: 10000,
        },
      ],
    }
  },
  methods: {
    addCards(data) {
      this.cards.push(data[0])
    },
    removeCards(id) {
      this.cards.pop(id)
    }
  }
}
</script>

<style lang="scss" scoped>
  .home {
    width: 100%;
    max-width: 1500px;
    padding: 32px;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    &-left {
      width: 332px;
    }
    &-right {
      width: 100%;
      padding: 59px 0 0;
      display: flex;
      flex-wrap: wrap;
    }
  }
</style>
