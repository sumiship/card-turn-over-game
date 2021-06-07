<template>
  <div class="home">
    <div class="stages">
      <div class="stage ex" @click="$router.push({ name: 'Endless30' })">
        <p class="title">Endless30s</p>
        <p>3×3〜4×4</p>
        <p>moves: 1~3</p>
        <p class="best">best: {{ $store.state.endless30best }}</p>
      </div>
      <div
        class="stage"
        :class="{ completed: stage.completed }"
        v-for="(stage, index) in stages"
        :key="index"
        @click="goto(index)"
      >
        <p>{{ "Stage" + (index + 1) }}</p>
        <p>{{ "moves: " + stage.touch.length }}</p>
        <div class="thumbnail">
          <div
            class="row"
            v-for="(row, rowIndex) in stage.sample"
            :key="rowIndex"
          >
            <div
              class="col"
              :class="cellClass(col)"
              :style="{ width: 100 / row.length + '%' }"
              v-for="(col, colIndex) in row"
              :key="colIndex"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  data() {
    return {
      stages: [[]],
    };
  },
  methods: {
    saveTest() {
      this.$store.dispatch("saveComplete");
    },
    intoTest() {
      this.$store.dispatch("complete", 1);
    },
    roadTest() {
      this.$store.dispatch("roadComplete");
    },
    goto(id) {
      this.$router.push({ name: "Game", params: { gameId: id } });
    },
    cellClass(num) {
      switch (num) {
        case 0:
          return "cell0";
        case 1:
          return "cell1";
        case -1:
          return "cell-1";
      }
    },
  },
  beforeMount() {
    this.stages = this.$store.state.fields;
    this.$store.dispatch("roadComplete");
    this.$store.dispatch("loadEnd30best");
  },
};
</script>
<style scoped>
.home {
  height: calc(100vh - 72px);
}
.stages {
  width: 95%;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  height: 100%;
  overflow: scroll;
}
.stage {
  background-color: lightblue;
  border: 5px solid rgb(104, 104, 197);
  margin: 8px 1px;
  width: 150px;
  height: 230px;
  border-radius: 12px;
  cursor: pointer;
}
.stage.ex {
  border-color: yellow;
  background-color: rgb(248, 239, 160);
}
.stage.ex .title {
  font-size: 23px;
}
.stage.ex .best{
  font-size: 30px;
}
.stage.completed {
  border-color: deeppink;
  background-color: rgb(224, 169, 224);
}
.thumbnail {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  background-color: rgb(165, 156, 156);
  width: 90%;
  height: calc(100% - 60px);
  margin: 0 auto;
  border: lightcoral solid 3px;
}
.row {
  display: flex;
  justify-content: space-around;
  width: 100%;
}
.col {
  text-align: center;
  border: 1px solid rgb(165, 156, 156);
}
.cell0 {
  background-color: black;
}
.cell1 {
  background-image: url("~@/assets/flower.png");
  background-size: cover;
  background-position: center;
}
.cell-1 {
  background-image: url("~@/assets/logo.png");
  background-size: cover;
  background-position: center;
}
</style>
