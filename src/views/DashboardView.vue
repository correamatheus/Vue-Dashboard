<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-2 sidebar">
        <h1 class="sidbar_title">Dashboard</h1>
        <div class="d-flex flex-column sidebar_items">
          <div class="sidebar_item d-flex">
            <router-link to="/"><i class="bi bi-grid-3x3-gap sidebar_icon"></i>Overview</router-link>
          </div>
          <div class="sidebar_item d-flex">
            <router-link to="/licitacoes"><i class="bi bi-hammer sidebar_icon"></i>Licitações</router-link>
          </div>
          <div class="sidebar_item d-flex">
            <i class="bi bi-person sidebar_icon"></i>Configurações
          </div>
          <div class="sidebar_item d-flex" @click="$store.dispatch('logout')">
            <i class="bi bi-box-arrow-right sidebar_icon"></i>Sair
          </div>
        </div>
      </div>
      <div class="col-md-10 container" style="background: #F7F8FC;">
        <div class="d-flex">
          <h1 class="overview_title">Overview</h1>
        </div>
        <div class="row justify-content-between container">
          <div class="col-md-4 overview_infocards">
            <span class="overview_infocards__title">Total</span>
            <span class="overview_infocards__number">10</span>
          </div>
          <div class="col-md-4 overview_infocards">
            <span class="overview_infocards__title">Recentes</span>
            <span class="overview_infocards__number">0</span>
          </div>
          <div class="col-md-4 overview_infocards">
            <span class="overview_infocards__title">Favoritas</span>
            <span class="overview_infocards__number">8</span>
          </div>
        </div>

        <div class="container licitacoes_table">
            <h2 class="licitacoes_table__title">Licitações</h2>
          <table class="table">
            <thead>
              <tr>
                <th scope="col" class="licitacoes_table__coltitle">Perfil</th>
                <th scope="col" class="licitacoes_table__coltitle">Orgão</th>
                <th scope="col" class="licitacoes_table__coltitle">Favorito</th>
                <th scope="col" class="licitacoes_table__coltitle">Ações</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" class="licitacoes_table_coltext">Perfil Padrão</th>
                <td class="licitacoes_table_coltext">BB TECNOLOGIA E SERVICOS S.A.</td>
                <td class="licitacoes_table_coltext"><i class="bi bi-check-circle licitacao_table__icon"></i></td>
                <td class="licitacoes_table_coltext"><button class="btn btn_vermais">Ver mais</button></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="container row licitacoes_favoritos_recentes">
           <div class="container col-md-6 licitacoes_favoritos__card">
            <h2 class="licitacoes_favoritos_title">Favoritos</h2>
            <table class="table">
            <thead>
              <tr>
                <th></th>
                <th scope="col" class="licitacoes_favoritos__table__coltitle">Perfil</th>
                <th scope="col" class="licitacoes_favoritos__table__coltitle">Orgão</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th><i class="bi bi-check-circle licitacao_table__icon"></i></th>
                <th scope="row" class="licitacoes_favoritos__table_coltext">Perfil Padrão</th>
                <td class="licitacoes_favoritos__table_coltext">BB TECNOLOGIA E SERVICOS S.A.</td>
              </tr>
            </tbody>
          </table>
           </div>
           <div class="container col-md-6 licitacoes_recentes__card">
            <h2 class="licitacoes_favoritos_title">Recentes</h2>
           </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  import { onBeforeMount } from 'vue';
  import {useStore} from 'vuex'

  export default {
    setup(){
      const store = useStore();

    onBeforeMount(() => {
      store.dispatch('fetchUser');
    })

}

  }

</script>

<style  scoped>
.sidbar_title {
  margin-bottom: 4rem;
  margin-top: 2.5rem;
  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;
  color: #a4a6b3;
}
.sidebar {
  background: #363740;
  color: #9fa2b4;
  height: auto;
}
.sidebar_item {
  height: 3.5rem;
  font-size: 1rem;
  cursor: pointer;
}
.sidebar_icon {
  margin-right: 1.5rem;
}

.overview_title {
  font-size: 1.5rem;
  color: #252733;
  font-weight: bold;
  text-align: left;
  margin-bottom: 4rem;
  margin-top: 2.5rem;
}

.overview_infocards {
  height: 8.3rem;
  width: 258px;
  padding: 24px 32px;
  border: 1px solid #dfe0eb;
  border-radius: 8px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background: #ffffff;
}

.overview_infocards > span {
  display: block;
}

.overview_infocards__title {
  color: #9fa2b4;
  font-size: 19px;
  font-weight: bold;
}

.overview_infocards__number {
  font-size: 40px;
  font-weight: bold;
}

.licitacoes_table {
    margin-top: 30px;
    background-color: #FFFFFF;
    border-radius: 8px;
    padding-bottom: 3rem;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.licitacoes_table__title {
    color: #252733;
    font-size: 19px;
    text-align: left;
    font-weight: bold;
    padding-top: 2rem;
    padding-bottom: 3rem;
}

.licitacoes_table__coltitle, .licitacoes_favoritos__table__coltitle {
    font-weight: bold;
    font-size: 14px;
    color: #9FA2B4;
}

table {
    background-color: #FFFFFF;
}

tbody {
    border-color: #DFE0EB;
}

th, td {
    padding: 26px 0;
}

.licitacoes_table_coltext, .licitacoes_favoritos__table_coltext {
    font-size: 14px;
    font-weight: 600;
}

.btn_vermais {
    background: #252733;
    border: #252733;
    color: #fff;
    font-weight: 600;
    font-size: 14px;
}

.licitacao_table__icon {
    cursor: pointer;
    font-size: 18px;
}

.licitacoes_favoritos_recentes {
    background: #FFFFFF;
    padding-top: 2rem;
    border-radius: 8px;
    margin: 30px auto;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.licitacoes_favoritos_title{
    font-size: 19px;
    font-weight: bold;
    text-align: left;
    color: #252733;
}

.licitacoes_favoritos__card, .licitacoes_recentes__card {
    height: 336px;
    width: 536px;
    border: 1px solid #DFE0EB;
    border-radius: 8px;
    padding-top: 32px;
    padding-left: 32px;
    margin-bottom: 32px;
    /* box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);     */
}

a {
    text-decoration: none;
    color: inherit;
}

</style>