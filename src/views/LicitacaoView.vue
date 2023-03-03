<template>
    <div class="row container-fluid">
        <div class="col-md-8">
            <div class="container licitacoes_table">
          <h2 class="licitacoes_table__title">Licitações : {{ licitacoes.length }}</h2>
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
              <tr v-for="(licitacao, i) in licitacoes" :key="i">
                <th scope="row" class="licitacoes_table_coltext">
                  {{ licitacao.perfilNome }}
                </th>
                <td class="licitacoes_table_coltext">
                  {{ licitacao.orgao }}
                </td>
                <td class="licitacoes_table_coltext">
                  <i class="bi bi-check-circle licitacao_table__icon " :class="{'text-success': licitacao.favorito}" ></i>
                </td>
                <td class="licitacoes_table_coltext">
                  <button class="btn btn_vermais" @click="verMais(i)">
                    Detalhar
                  </button>                  
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        </div>
        <div class="col-md-4 licitacao_info" style="position: fixed; right: 0;">
            <h2 class="licitacoes_favoritos_title">Informação da Licitação</h2>
            <ul>
              <li><span class="licitacao_info__label">Id Licitação:</span> <span>{{ licitacaoEscolhida.idLicitacao ? licitacaoEscolhida.idLicitacao : 'Nenhuma licitação detalhada' }}</span></li>
              <li><span class="licitacao_info__label">Perfil Nome:</span> <span>{{ licitacaoEscolhida.perfilNome ? licitacaoEscolhida.perfilNome: 'Nenhuma licitação detalhada' }}</span></li>
              <li><span class="licitacao_info__label">Modalidade:</span> <span>{{ licitacaoEscolhida.modalidade ? licitacaoEscolhida.modalidade : 'Nenhuma licitação detalhada' }}</span></li>
              <li><span class="licitacao_info__label">Data Publicação:</span> <span>{{ licitacaoEscolhida.dataPublicacao ? licitacaoEscolhida.dataPublicacao : 'Nenhuma licitação detalhada'}}</span></li>
              <li><span class="licitacao_info__label">Data Inicial Proposta:</span> <span>{{ licitacaoEscolhida.dataInicialProposta ? licitacaoEscolhida.dataInicialProposta : 'Nenhuma licitação detalhada'}}</span></li>
              <li><span class="licitacao_info__label">Data Final Proposta:</span> <span>{{ licitacaoEscolhida.dataFinalProposta? licitacaoEscolhida.dataFinalProposta : 'Nenhuma licitação detalhada' }}</span></li>
            </ul>

            <router-link to="/" class="btn btn_vermais mt-4">
                   Voltar Dashboard
                </router-link>    
        </div>
    </div>
    
</template>

<script>
import { onBeforeMount, onMounted, ref} from "vue";
import { useStore } from "vuex";
import api from "@/services/api";

export default {
  setup() {
    const store = useStore();
    const licitacoes = ref([]);    
    const licitacaoEscolhida = ref({});
   


    const fetchLicitacoes = () =>
      api
        .get("/licitacoes")
        .then((resp) => (licitacoes.value = resp.data));
   
      const verMais = (indice) => {               
        licitacaoEscolhida.value = licitacoes.value[indice]

      } 

    onMounted(() => {
      fetchLicitacoes(); 
    });



    onBeforeMount(() => {
      store.dispatch("fetchUser");
    });

    return { licitacoes,verMais, licitacaoEscolhida};
  },
};
</script>

<style>
.licitacoes_table {
  margin-top: 30px;
  background-color: #ffffff;
  border-radius: 8px;
  padding-bottom: 3rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  text-align: center;
}

.licitacoes_table__title {
  color: #252733;
  font-size: 19px;
  text-align: left;
  font-weight: bold;
  padding-top: 2rem;
  padding-bottom: 3rem;
}

.licitacoes_table__coltitle {
  font-weight: bold;
  font-size: 14px;
  color: #9fa2b4;
}

.licitacoes_table_coltext {
  font-size: 14px;
  font-weight: 600;
}

.licitacao_table__icon {
  cursor: pointer;
  font-size: 18px;
}

.btn_vermais {
  background: #252733;
  border: #252733;
  color: #fff;
  font-weight: 600;
  font-size: 14px;
}

.licitacoes_favoritos_title {
  font-size: 19px;
  font-weight: bold;
  text-align: left;
  color: #252733;
}

.licitacao_info__label {
  font-weight: bold;
    font-size: 16px;
    color: #9fa2b4;
  }

li {
  list-style: none;
  padding: 6px 0;
}

.licitacao_info {
    padding-top: 4rem;
}

</style>
