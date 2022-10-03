<template>
  <!-- ****************** TEMPLATE ******************  -->

  <div id="app">

    <my-header></my-header>

    <div id="page-container">
      <router-view></router-view>
    </div>

  </div>
</template>



<script>

</script>



<style>
/* ********************* STYLE ********************* */
body {
  margin: 0 auto;
}

#app {
  font-family: Poppins, sans-serif;
  color: #424040;
}

#page-container {
  margin: 2rem auto;
  display: flex;
  justify-self: center;
  width: fit-content;
  padding: 2rem 2rem;
  background-color: whitesmoke;
  border-radius: 8px;
  justify-content: center;
}
</style>