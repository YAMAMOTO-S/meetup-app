<template>
  <div class="text-center dialog">
    <v-dialog
      v-model="dialog"
      width="500"
    >
      <template v-slot:activator="{ on }">
        <v-btn
          depressed
          v-on="on"
        >
        <v-icon>mdi-account-edit</v-icon>
          Click Me
        </v-btn>
      </template>

      <v-card>
        <v-card-title
          class="headline grey lighten-2"
          primary-title
        >
          Edit Meetup
        </v-card-title>
         <br>

        <v-card-text>
          <v-text-field label="Title" name="title" id="title" required >
          </v-text-field>

          <v-textarea label="Description" name="description" id="description" required multi-line>
          </v-textarea>

        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            depressed
            @click="dialog = false"
          >
            OK
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>


<script>
  export default {
    data () {
      return {
        dialog: false,
      }
    },
  }
</script>

<style scoped>
.dialog{
   margin-left: 20px;
}
</style>

