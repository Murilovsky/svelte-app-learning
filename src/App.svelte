<script>
import Formulario from "./components/Formulario.svelte";
import Titulo from "./components/Titulo.svelte";
import Usuario from "./components/Usuario.svelte";
import {scale} from 'svelte/transition'

let usuario = null

function BindUser(customEvent,){

  usuario=customEvent.detail

}


</script>

<main  class="app">
  <header>
    <Titulo/>
    <div class="busca-usuario">
      <Formulario on:AlteraUsuario={BindUser}/>
    </div>
  </header>
  {#if usuario}
  {#key usuario}
  <div in:scale>
    <Usuario usuario={usuario}/>
  </div>
  {/key}
  {/if}
</main>

<style>
      .app {
    max-height: 100vh;
  }

  header {    
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .busca-usuario {
    position: relative;
    width: 70%;
  }



  
</style>
