<template>
  <div class="partition">
    <h2>{{partition.title}}</h2>
    <div class="partition-title">
      <div class="line"/>
      <span>{{partition.titleTranslate}}</span>
      <div class="line"/>
    </div>
    <p>{{partition.slogan}}</p>
  </div>
</template>

<script>
  export default {
    name: "partitionTitle",
    props: {
      partition: {
        title: {
          required: true,
          type: String
        },
        titleTranslate: {
          required: true,
          type: String
        },
        slogan: {
          required: true,
          type: String
        }
      }
    },
    data() {
      return {}
    },
    methods: {}
  }
</script>

<style scoped>
  .partition {
    display: flex;
    flex-direction: column;
    padding: 50px 0;
  }

  .partition h2 {
    margin: 0;
    font-size: 30px;
    font-weight: normal;
  }

  .partition-title {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .partition-title .line {
    width: 50%;
  }

  .partition-title span {
    width: 70%;
    color: #cccccc;
    font-size: 18px;
    text-transform: uppercase;
    font-weight: normal;
    margin: 10px 0;
  }

  .partition p {
    color: #666;
    font-size: 16px;
  }
</style>
