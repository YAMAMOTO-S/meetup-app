<template>
   <v-container>
      <v-row>
         <v-col>
            <v-card class="mx-auto" max-width="600px">
               <v-card-text>

                  <v-img
                  class="white--text align-end"
                  height="300px"
                  :src="meetup.imageUrl"
                  >
                  </v-img>

                  <br> 
                  <p class="display-1 text--primary">
                     {{ meetup.title}}
                  </p>

                 <p class='info--text'>{{ meetup.date | date }}</p>
             
                  

                  <div class="text--primary">
                  {{ meetup.description}}
                  </div>

               </v-card-text>
               <v-card-actions>
                  <v-btn depressed>
                  <v-icon left>mdi-cards-heart</v-icon>   
                  Register
                  </v-btn>
                  
                  <!-- <div v-if="userIsCreator" depressed> -->
                     <edit-meetup></edit-meetup>
                  
                     
                  
                  
               </v-card-actions>

            </v-card>
         </v-col>
      </v-row>
   </v-container>
</template>


<script>
export default {
   props: ['id'],

   computed: {
      // ここで情報を持ってきている。
      meetup(){
         return this.$store.getters.loadedMeetup(this.id)
      },
      userIsAuthenticated () {
        return this.$store.getters.user !== null && this.$store.getters.user !== undefined
      },
      userIsCreator () {
        if (!this.userIsAuthenticated) {
          return false
        }
        return this.$store.getters.user.id === this.meetup.creatorId
      },
   }
}
</script>

<style scoped>

</style>>

