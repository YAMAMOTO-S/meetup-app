<template>
  <v-app>
  <div class="app">

    <!-- サイドバーの中身 -->
    <v-navigation-drawer v-model="sideNav" absolute left temporary>
      <v-list-item v-for="item in menuItems" :key="item.title">
        <v-icon class="face">{{ item.icon }}</v-icon>
        <v-list-item-content>
          <v-list-item-title class="title name">
            {{ item.title }}
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
      <v-toolbar-title>
        <router-link to='/' tag="span" style="cursor: pointer">
          <v-icon>mdi-emoticon-neutral-outline</v-icon>
        </router-link>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-items v-for="item in menuItems" :key="item.title">
        <v-btn text>{{ item.title }}</v-btn>
      </v-toolbar-items>
    </v-toolbar>


    
    <!-- 本文部分 -->
    <main>
      <router-view></router-view>
    </main>


  </div>
  </v-app>
</template>

<script>


export default {
  name: 'App',

  components: {
    
  },

  data(){
    return{
      sideNav: false,
      menuItems: [
        { icon: 'mdi-face', title: 'Meetup', link: '/meetups'},
        { icon: 'mdi-account-box-multiple', title: 'Organize Meetup', link: 'meetup/new'},
        { icon: 'mdi-account-badge-horizontal-outline', title: 'Profile', link: '/profile'},
        { icon: 'mdi-emoticon-neutral-outline', title: 'Sign up', link: '/signup'},
        { icon: 'mdi-account-card-details-outline', title: 'Sign in', link: '/signin'}
      ]
    }
  }
};
</script>

<style>
.face{
  margin-right: 20px
}

</style>