<script>
import { createEventDispatcher } from "svelte";
import { BuscaReps, BuscaUsuario } from "../requisicoes/requisicoes";
import MontaUsuario from "../utils/montaUsuario";
import Botao from "./Botao.svelte";

    let errorStatus = null

    let buscaValue = ''

    const dispatch = createEventDispatcher()

    async function AoEnviar(){

        const userRes = await BuscaUsuario(buscaValue)
        const repoRes = await BuscaReps(buscaValue)

        const dadosUsuario = await userRes.json()
        const dadosRepositorios = await repoRes.json()

        if(userRes.ok && repoRes.ok){
            errorStatus = userRes.status
            dispatch('AlteraUsuario',MontaUsuario(dadosUsuario,dadosRepositorios))
        }
        else{
            dispatch('AlteraUsuario',null)
            errorStatus = userRes.status
        }

    }

</script>

<form on:submit|preventDefault={AoEnviar}>
    <input type="text" class="input" class:erro-input={errorStatus===404} bind:value={buscaValue} placeholder="Busque um usuário do Github..."/>
    {#if errorStatus === 404}
    <span class="erro">Usuário não encontrado</span>
    {/if}
    <div class="botao-container">
      <Botao>
        Buscar     
        <img src="/assets/lupa.svg" alt="Ícone de Lupa" />
      </Botao>
    </div>
</form>

  <style>
    .input::placeholder {
    font-family: "Roboto";
    font-style: italic;
    font-weight: 300;
    font-size: 19.5px;
    line-height: 26px;
    color: #6e8cba;
  }

  .botao-container {
    position: absolute;
    width: 9.625rem;
    right: 0;
    top: 0;
    bottom: 0;
    display: flex;
  }



  .input {
    padding: 15px 25px;
    width: calc(100% - 8.75rem);
    font-size: 1rem;
    border-radius: 8px;
    border: 1px solid #2e80fa;
    box-shadow: 0px 17px 52px rgba(222, 231, 247, 0.4);
    outline: 0;
  }
  
  .erro {
    position: absolute;
    bottom: -25px;
    left: 0;
    font-style: italic;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    z-index: -1;
    color: #ff003e;
  }
  .erro-input{
    border: 1px solid #ff003e;
  }
  </style>