<template>
   <div>
      <v-container>
         <v-row class="center_btn">
            <v-col>
               <v-btn large router to='/meetup/new'>CREATE</v-btn>
            </v-col>
            <v-col>
               <v-btn large router to='/meetup/new'>CREATE</v-btn>
            </v-col>
            <v-col>
               <v-btn large router to='/meetup/new'>CREATE</v-btn>
            </v-col>
         </v-row>

         <!-- 中央のスライド -->
         <v-row>
           <v-carousel height="400"  show-arrows-on-hover class="cards" style="cursor: pointer;">
               <v-carousel-item
                  v-for="meetup in meetups"
                  :key="meetup.id"
                  :src="meetup.imageUrl"
                  reverse-transition="fade-transition"
                  transition="fade-transition"
                  @click="onLoadMeetup(meetup.id)"
               >
                <div class="card_title">{{meetup.title}}</div>
               </v-carousel-item>
            </v-carousel>
         </v-row>   





      </v-container>

   </div>
</template>

<script>
export default {
   computed: {
      meetups () {
         return this.$store.getters.featuredMeetups
      }
   },
   methods: {
      onLoadMeetup(id){
         this.$router.push('/meetups/' + id);
      },

   }
}
</script>


<style scoped>
.center_btn{
   text-align:center;
   margin-top: 50px;
   margin-bottom: 50px;
}
.cards{
   max-width: 800px;
   text-align: center;
   margin: auto;
}
.card_title{
   position: absolute;
   bottom: 50px;
   background-color: rgba(0,0,0,0.5);
   color: azure;
   font-size: 25px;

}
</style>