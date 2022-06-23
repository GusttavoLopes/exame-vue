<template>
  <div>
    <form @submit.prevent="cadastrar">
      <h2>Trabalho</h2>
      <div>
        <label for="titulo">Título</label>
        <input type="text" id="titulo"
            v-model="trabalho.titulo">
      </div>
      <div>
        <label for="dataHoraApresentacao">Data/Hora da Apresentação</label>
        <input type="datetime-local" id="dataHoraApresentacao"
            v-model="trabalho.dataHoraApresentacao">
      </div>
      <div>
        <label for="aluno">Aluno</label>
        <input type="text" id="aluno"
            v-model="trabalho.aluno">
      </div>
      <div>
        <label for="orientador">Orientador</label>
        <input type="text" id="orientador"
            v-model="trabalho.orientador">
      </div>
      <button
        type="submit">Salvar</button>
      <button
        type="submit">Atualizar</button>
    </form>
    <br>
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Título</th>
          <th>Entrega</th>
          <th>Aluno</th>
          <th>Orientador</th>
          <th>Nota</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="trab in trabalhos" :key="trab.id">
          <td>{{ trab.id }}</td>
          <td>{{ trab.titulo }}</td>
          <td>{{ trab.dataHoraApresentacao }}</td>
          <td>{{ trab.aluno }}</td>
          <td>{{ trab.orientador }}</td>
          <td>{{ trab.nota }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "trabalhos",
  data() {
    return {
      trabalho: { 
        titulo: '',
        dataHoraApresentacao: '',
        orientador: '',
        aluno: '',
        nota: ''
      },
      trabalhos: []
    };
  },
  methods: {
    cadastrar() {
      axios.post('avaliacao/trabalho', this.trabalho)
        .then(res => {
          console.log(res);
          this.trabalho.titulo = '';
          this.trabalho.dataHoraApresentacao = '';
          this.trabalho.aluno = '';
          this.trabalho.orientador = '';
          this.trabalho.nota = '';
          this.atualizar();
        })
        .catch(error => console.log(error))
    },
    atualizar() {
      axios.get('avaliacao/trabalho')
        .then(res => {
          console.log(res)
          this.trabalhos = res.data;
        })
        .catch(error => console.log(error))      
    }
  },
  created() {
    this.atualizar();
  }
};
</script>

<style>
  #titulo {
    max-width: 500px;
    margin: 0 auto;
    margin-left: 6px;
    margin-bottom: 10px;
    display: flex;
    margin: 0 auto;
  }

  #dataHoraApresentacao {
    max-width: 500px;
    margin: 0 auto;
    margin-left: 6px;
    margin-bottom: 10px;
    display: flex;
    margin: 0 auto;
  }

  #aluno {
    max-width: 500px;
    margin: 0 auto;
    margin-left: 6px;
    margin-bottom: 10px;
    display: flex;
    margin: 0 auto;
  }

  #orientador {
    max-width: 500px;
    margin: 0 auto;
    margin-left: 6px;
    margin-bottom: 10px;
    display: flex;
    margin: 0 auto;
  }


</style>