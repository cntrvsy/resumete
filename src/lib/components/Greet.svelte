<script>
    import { invoke } from '@tauri-apps/api/tauri'
  
    let name = ''
    let greetMsg = ''
  
    async function greet() {
      greetMsg = await invoke('greet', { name })
    }

</script>
  
  <div class=" p-4">
    <input placeholder="Enter a name..." class="input" bind:value="{name}" />
    <div class="py-4">
        <button on:click="{greet}" class="btn variant-outline-primary">Greet</button>
    </div>
    <p>{greetMsg}</p>
  </div>