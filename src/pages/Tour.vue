<template>
  <Layout>
    <h1>Upcoming Tour Dates</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error doloremque omnis animi, eligendi magni a voluptatum, vitae, consequuntur rerum illum odit fugit assumenda rem dolores inventore iste reprehenderit maxime! Iusto.</p>
    <div class="flex justify-between items-center border-t last:border-b max-w-6xl mx-auto leading-none" v-for="tourdate in tourDates" :key="tourdate.id">
      <div class="w-56 bg-gray-100 py-3 text-center">{{ tourdate.datetime | moment }}</div>
      <div class="flex-1 pl-8">
        {{ tourdate.venue.name }} - {{ tourdate.venue.location }}
      </div>
      <div>More Info</div>
    </div>
  </Layout>
</template>

<script>
import axios from 'axios'
import moment from 'moment'
export default {
  metaInfo: {
    title: 'Tour Dates'
  },
  data () {
    return {
      tourDates: []
    }
  },
  mounted () {
    axios.get('https://rest.bandsintown.com/artists/Chris%20Canterbury/events?app_id=c9df10e690b7717a0cc66da0d48cf70c&date=upcoming')
      .then(res => (this.tourDates = res.data))
      .catch((err) => console.log(err))
  },
  filters: {
    moment (date) {
      return moment(date).format('MMM DD, YYYY')
    }
  }
}
</script>
