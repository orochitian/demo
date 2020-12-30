<template>
  <div>
    <div class="toolbar">
      <span style="margin-right: 20px;">施工数据筛选</span>
      <el-date-picker
        class="date-picker"
        v-model="date"
        type="date"
        placeholder="选择日期"
        :picker-options="pickerOptions"
      ></el-date-picker>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      date: '',
      allowDate: [
        {time: "2020-12-26"},
        {time: "2020-12-25"},
        {time: "2020-12-24"},
        {time: "2020-12-23"},
        {time: "2020-12-20"},
        {time: "2020-12-16"},
        {time: "2020-12-11"},
        {time: "2020-12-7"},
        {time: "2020-12-6"},
        {time: "2020-12-5"},
        {time: "2020-12-4"},
        {time: "2020-12-3"},
        {time: "2020-12-2"},
        {time: "2020-12-1"},
        {time: "2020-11-30"},
        {time: "2020-11-29"},
        {time: "2020-11-28"},
        {time: "2020-11-27"},
        {time: "2020-11-23"},
        {time: "2020-11-22"},
        {time: "2020-11-21"},
        {time: "2020-11-20"},
        {time: "2020-11-19"},
        {time: "2020-11-18"},
        {time: "2020-11-17"},
        {time: "2020-11-16"},
        {time: "2020-11-15"},
        {time: "2020-11-14"},
        {time: "2020-11-13"},
        {time: "2020-11-12"},
        {time: "2020-11-11"},
        {time: "2020-11-10"},
        {time: "2020-11-8"},
        {time: "2020-11-6"},
        {time: "2020-11-4"},
        {time: "2020-11-3"},
        {time: "2020-11-2"},
        {time: "2020-11-1"},
        {time: "2020-10-31"},
        {time: "2020-10-30"},
        {time: "2020-10-29"},
        {time: "2020-10-28"},
        {time: "2020-10-27"},
        {time: "2020-10-26"},
        {time: "2020-10-25"},
        {time: "2020-10-24"},
        {time: "2020-10-18"},
        {time: "2020-10-17"},
        {time: "2020-10-16"},
        {time: "2020-10-9"}
      ],
      pickerOptions: {
        disabledDate: date => {
          let dateStr = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`
          return !this.allowDate.some(item => item.time === dateStr)
        }
      }
    }
  },
  mounted() {
    let date = new Date('2020-12-26 00:00:00')
    console.log(date);
  }
};
</script>

<style lang="scss">
  .el-date-table td.available > div > span {
    background-color: lightgreen !important;
    border-radius: 50%;
  }
</style>