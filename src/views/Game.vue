<template>
  <div class="game">
    game: {{ gameId }}
    <div class="sample">
      <div class="field">
        <div class="row" v-for="(row, rowIndex) in sample" :key="rowIndex">
          <div
            class="col"
            :class="cellClass(col)"
            :style="{ width: 100 / fieldWidth + '%' }"
            v-for="(col, colIndex) in row"
            :key="colIndex"
          ></div>
        </div>
      </div>
    </div>
    <div class="answer">
      <div class="field">
        <div class="row" v-for="(row, rowIndex) in field" :key="rowIndex">
          <div
            class="col"
            :class="[
              cellClass(col),
              'cell' + String(rowIndex) + String(colIndex),
            ]"
            :style="{ width: 100 / fieldWidth + '%' }"
            :ref="'cell' + rowIndex + colIndex"
            v-for="(col, colIndex) in row"
            :key="colIndex"
            @click="turnOver([rowIndex, colIndex], col, 12)"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["gameId"],
  data() {
    return {
      sample: [[]],
      field: [[]],
      fieldWidth: "",
      fieldHeight: "",
      isAbleTouch: true,
    };
  },
  methods: {
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
    turnOver(cell, num, sec) {
      if (num == 0 || !this.isAbleTouch) return;
      this.isAbleTouch = false;
      this.turnOverAnimaitionCall(cell, 0, sec);
      setTimeout(() => {
        for (let i = -1; i < 2; i++) {
          for (let j = -1; j < 2; j++) {
            if (i != 0 || j != 0) {
              let targetCell = [cell[0] + i, cell[1] + j];
              if (this.isInclude(targetCell)) {
                if (this.field[targetCell[0]][targetCell[1]] != 0) {
                  this.turnOverAnimaitionCall(targetCell, 0, sec);
                }
              }
            }
          }
        }
      }, sec * 9);
      setTimeout(() => {
        if (this.judge()) {
          console.log("success");
        } else {
          this.isAbleTouch = true;
          console.log(this.field);
        }
      }, sec * 45);
    },
    turnOverAnimaitionCall(cell, deg, sec) {
      if (deg <= 180) {
        this.turnOverAnimaition(cell, deg);
        setTimeout(() => {
          this.turnOverAnimaitionCall(cell, (deg += 5), sec);
        }, sec);
      }
    },
    turnOverAnimaition(cell, deg) {
      if (deg == 90) {
        this.field[cell[0]].splice(
          cell[1],
          1,
          this.field[cell[0]][cell[1]] * -1
        );
      }
      if (deg > 90) deg = 180 - deg;
      document.getElementsByClassName(
        "cell" + String(cell[0]) + String(cell[1])
      )[0].style.webkitTransform = "rotateY(" + deg + "deg)";
    },
    isInclude(cell) {
      if (
        cell[0] >= 0 &&
        cell[0] < this.fieldHeight &&
        cell[1] >= 0 &&
        cell[1] < this.fieldWidth
      )
        return true;
      return false;
    },
    judge() {
      for (let i = 0; i < this.fieldHeight; i++) {
        for (let j = 0; j < this.fieldWidth; j++) {
          if (this.field[i][j] != this.sample[i][j]) return false;
        }
      }
      return true;
    },
  },
  beforeMount() {
    const defaultArr = this.$store.state.fields[this.gameId].sample;
    const touch = this.$store.state.fields[this.gameId].touch;
    this.field = JSON.parse(JSON.stringify(defaultArr));
    this.sample = defaultArr;
    this.fieldWidth = defaultArr.length;
    this.fieldHeight = defaultArr[0].length;
    for (let p = 0; p < touch.length; p++) {
      for (let i = -1; i < 2; i++) {
        for (let j = -1; j < 2; j++) {
          let targetCell = [touch[p][0] + i, touch[p][1] + j];
          if (this.isInclude(targetCell)) {
            this.field[targetCell[0]].splice(
              targetCell[1],
              1,
              this.field[targetCell[0]][targetCell[1]] * -1
            );
          }
        }
      }
    }
  },
};
</script>
<style scoped>
.game {
  height: calc(100vh - 112px);
}
.sample {
  width: 50%;
  height: 30vh;
  margin: 0 auto;
  margin-bottom: 10px;
}
.answer {
  width: 90%;
  height: 50vh;
  margin: 0 auto;
}
.field {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  background-color: rgb(165, 156, 156);
  width: 100%;
  height: 100%;
  margin: 0 auto;
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
