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
           <v-carousel height="400"  show-arrows-on-hover class="cards">
               <v-carousel-item
                  v-for="meetup in meetups"
                  :key="meetup.id"
                  :src="meetup.imageURL"
                  reverse-transition="fade-transition"
                  transition="fade-transition"
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
   data(){
      return{
         meetups: [
            { imageURL: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg', 
              id: '111', title: 'Meetup in New York' },
            { imageURL: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg', 
            id: '222', title: 'Meetup in New Paris' }
         ]
      }
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