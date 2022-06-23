<template>
  <div class="about">
    <form @submit.prevent="avaliar">
      <div>
        <label for="trabalho">Trabalho</label>
        <select name="trabalho" id="trabalho" 
            v-model="trabalho">
          <option v-for="trabalho in trabalhos" 
            :key="trabalho.id" :value="trabalho.id">
            {{trabalho.titulo}}
          </option>
        </select>
      </div>
      <div>
        <label for="nota">Nota</label>
        <input type="number" id="nota" min="1" 
            max="10" step="1" v-model="nota">
      </div>
      <button type="submit">Salvar</button>
      <button type="submit">Atualizar</button>
      
    </form>
    <br>
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Título</th>
          <th>Nota</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="trab in trabalhos" :key="trab.id">
          <td>{{ trab.id }}</td>
          <td>{{ trab.titulo }}</td>
          <td>{{ trab.nota }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>


<script>
import axios from 'axios'

export default {
  name: 'avaliacao',
  data() {
    return {
      trabalho: '',
      nota: '',
      trabalhos: []
    }
  },
  methods: {
    atualizar() {
      axios.get('/avaliacao/trabalho')
        .then(res => {
          console.log(res);
          this.trabalhos = res.data;
        })
        .catch(error => console.log(error))
    },
    avaliar() {
      axios.post('/avaliacao/' + this.trabalho + '/' + this.nota)
        .then(res => {
          console.log(res);
          this.trabalho = '';
          this.nota = '';
          this.atualizar();
        })
        .catch(error => console.log(error))
    }
  },
  created() {
    this.atualizar();
  }
}
</script>
