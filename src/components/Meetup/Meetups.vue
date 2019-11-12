<template>
  <v-container>

     <v-row>
        <v-col>
            <v-card
               class="mx-auto mb-7"
               max-width="800"
               v-for="meetup in meetups" :key="meetup.id"
            >
               <v-img
                  class="white--text align-end"
                  height="300px"
                  :src="meetup.imageUrl"
               >
                  <v-card-title>{{ meetup.title }}</v-card-title>
               </v-img>

               <v-card-subtitle class="pb-0">{{ meetup.data }}</v-card-subtitle>

               <v-card-text class="text--primary">
                  <div>{{ meetup.description }}</div>
               </v-card-text>

               <v-card-actions>
                  <v-btn depressed :to="'/meetups/' + meetup.id">
                     <v-icon left>mdi-charity</v-icon>
                     View Meetup</v-btn>
               </v-card-actions>
            </v-card>
         </v-col>
      </v-row>

  </v-container>
</template>

<script>
export default {
   computed: {
      meetups(){
         return this.$store.getters.loadedMeetups
      }
   }
}
</script>

<style>

</style>