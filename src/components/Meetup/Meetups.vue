<template>
  <v-container>

     <v-row>
        <v-col>
            <v-card
               class="mx-auto"
               max-width="400"
            >
               <v-img
                  class="white--text align-end"
                  height="200px"
                  src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
               >
                  <v-card-title>Top 10 Australian beaches</v-card-title>
               </v-img>

               <v-card-subtitle class="pb-0">Number 10</v-card-subtitle>

               <v-card-text class="text--primary">
                  <div>Whitehaven Beach</div>

                  <div>Whitsunday Island, Whitsunday Islands</div>
               </v-card-text>

               <v-card-actions>
                  <v-btn depressed to="">
                     <v-icon left>mdi-charity</v-icon>
                     View Meetup</v-btn>
               </v-card-actions>
            </v-card>
         </v-col>
      </v-row>

  </v-container>
</template>