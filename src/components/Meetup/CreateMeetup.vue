<template>
   <v-container>
      <v-row>

         <v-col class="mx-auto" cols="12" md="8" sm="6">
            <form @submit.prevent="submitMeetup">
               <h2 class="title">Create your meetup!!</h2>
               <br>

               <v-text-field label="Title" name="title" id="title" required v-model="title">
               </v-text-field>

               <v-text-field label="Location" name="location" id="location" required v-model="location">
               </v-text-field>

               <v-text-field label="Image URL" name="imageUrl" id="imageUrl" required v-model="imageUrl">
               </v-text-field>

               <v-textarea label="Description" name="description" id="description" required multi-line v-model="description">
               </v-textarea>

               <div class="subbtn">
                  <img :src="imageUrl" height="200">
               </div>
               <div class="subbtn">
                  <!-- 全て入れないとボタンが浮き出ないようにしている。 -->
                  <v-btn :disabled="!formIsValid" type="submit">Create</v-btn>
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
         title: '',
         location: '',
         description: '',
         imageUrl: ''
      }
   },
   computed: {
      formIsValid(){
         return this.title !== '' && this.location !== '' 
         && this.imageUrl !== '' && this.description !== ''
      }
   },
   methods: {
      submitMeetup(){
         if(!this.formIsValid){
            return
         }

         const meetupData = {
            title: this.title,
            location: this.location,
            imageUrl: this.imageUrl,
            description: this.description,
            data: new Date()
         }
         this.$store.dispatch('createMeetup', meetupData)
         this.$router.push('/meetups');
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
   margin: 50px;
}
.imagepre{
   width: auto;
}
</style>