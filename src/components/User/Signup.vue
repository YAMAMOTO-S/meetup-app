<template>
<v-container>
      <v-row>

         <v-col class="mx-auto" cols="12" md="9" sm="9">
            <form @submit.prevent="onSignup">
               <h2 class="title">Create your Account!!</h2>
               <br>

               <v-text-field label="Email" name="email" id="email" required v-model="email" type="email">
               </v-text-field>

               <v-text-field label="Password" name="password" id="password" required v-model="password" type="password">
               </v-text-field>

<!-- 固有のルールを設定してPASSWORDの確認を行う -->
               <v-text-field label="Confirm Password" name="confirmPassword" id="confirmPassword" v-model="confirmPassword" type="password"
                  :rules="[comparePassword]">
               </v-text-field>

               <br>
               <div  class="subbtn">
<!-- 全て入れないとボタンが浮き出ないようにしている。 -->
                  <v-btn type="submit">Create</v-btn>
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
         password: '',
         confirmPassword: ''
      }
   },
   computed: {
// PASSWORD確認
      comparePassword(){
         return this.password !== this.confirmPassword ? 'Psswords do not match' : ''
      }
   },
   methods: {
      onSignup(){
         console.log({email: this.email, password: this.password, confirmPassword: this.confirmPassword})
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