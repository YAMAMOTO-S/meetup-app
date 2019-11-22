<template>
   <v-container>
         <v-row>

            <v-col class="mx-auto" cols="12" md="9" sm="9">
               <form @submit.prevent="onSignin">
                  <h2 class="title">Sign in</h2>
                  <br>
                  <v-text-field label="Email" name="email" id="email" required v-model="email" type="email">
                  </v-text-field>

                  <v-text-field label="Password" name="password" id="password" required v-model="password" type="password">
                  </v-text-field>

                  <br>
                  <div  class="subbtn">
                     <v-btn type="submit">Log in</v-btn>
                  </div>
               </form>
            </v-col>

         </v-row>
      </v-container>
</template>

<script>
export default {
   data(){
      return{
         email: '',
         password: ''
      }
   },
   computed: {
      user(){
         return this.$store.getters.user
      }
   },
   watch:{
// 登録できたらメインページに戻る
      user(value){
         if (value !== null && value !== undefined) {
            this.$router.push('/')
         }
      }
   },
   methods: {
      onSignin(){
         this.$store.dispatch('signUserIn', {email: this.email, password: this.password})
      }
   }
}
</script>


<style scoped>
.title{
   color: black;
   text-align: center;
   margin: 50px;
}
.subbtn{
   text-align: center;
   margin: 20px;
}
</style>