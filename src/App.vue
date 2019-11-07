<template>
  <div class="app">

    <!-- サイドバーの中身 -->
    <v-navigation-drawer v-model="sideNav" absolute left temporary>
      <v-list-item>
        <v-icon class="face">mdi-face</v-icon>
        <v-list-item-content>
          <v-list-item-title class="title">
            UserName
          </v-list-item-title>
          <v-list-item-subtitle>
            subtext
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>


    </v-navigation-drawer>
    

    <!-- ここからメインのバー -->
    <v-toolbar>
      <v-app-bar-nav-icon @click.native.stop="sideNav = !sideNav"></v-app-bar-nav-icon>
      <v-toolbar-title>Title</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-items>
        <v-btn text>Link 1</v-btn>
        <v-btn text>Link 2</v-btn>
        <v-btn text>Link 3</v-btn>
      </v-toolbar-items>
      
    </v-toolbar>
    
  </div>
</template>

<script>


export default {
  name: 'App',

  components: {
    
  },

  data(){
    return{
      sideNav: false,
    }
  }
};
</script>

<style>
.face{
  margin-right: 10px
}
</style>