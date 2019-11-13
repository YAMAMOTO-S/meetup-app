<template>
   <v-container>
      <v-row>

         <v-col class="mx-auto" cols="12" md="4" sm="6">
               <h2 class="title">Create your meetup!!</h2>
               <br>
               <v-text-field label="Title" name="title" id="title" required v-model="title">

               </v-text-field>
               <v-text-field label="Location" name="location" id="location" required v-model="location">

               </v-text-field>
               <v-text-field label="Image URL" name="imageUrl" id="imageUrl" required v-model="imageurl">

               </v-text-field>
               <v-textarea label="Description" name="description" id="description" required multi-line v-model="description">

               </v-textarea>

               <img :src=imageUrl alt="">
               <div class="subbtn">
                  <v-btn>Create</v-btn>
               </div>
         </v-col>

      </v-row>
   </v-container>
</template>

<script>
export default {
   data(){
      return{
         title: '',
         location: '',
         description: '',
         imageUrl: ''
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
}
</style>