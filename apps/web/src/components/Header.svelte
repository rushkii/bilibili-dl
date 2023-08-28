<script lang="ts">
  const toggleTheme = () => {
    if(document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark")
    } else {
      document.documentElement.classList.add("dark")
    }
  }
</script>


<header class="p-4 border-b border-b-gray-200 dark:border-b-[#2C2E33] transition-all duration-200 ease-in-out">
  <div class="flex items-center justify-between">
    <a href="/" draggable="false">
      <img
        src="/OpenBstation.svg" alt="Logo Apps"
        width="160" height="68"
        loading="lazy" decoding="async"
        draggable="false"
      >
    </a>
    <div class="relative w-[30%] box-border grow-0">
      <input
        class="h-[2.25rem] appearance-none resize-none box-border w-full transition-all duration-200 ease-in-out text-gray-400 bg-white dark:bg-[#25262b] block text-sm text-left border border-[#ced4da] dark:border-[#373A40] min-h-[2.25rem] pr-[2.25rem] rounded-xl focus:outline-none focus:border-blue-500 dark:focus:outline-none dark:focus:border-blue-500"
        style="line-height: calc(2.25rem - 0.125rem); padding-left: calc(2.25rem / 3);"
        placeholder="Search" aria-haspopup="dialog" aria-expanded="false" aria-invalid="false"
      >
      <button class="absolute top-0 right-0 flex items-center justify-center w-[2.25rem] h-full dark:text-gray-400">
        <svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-search" style="display:block;opacity:0.5"><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path><path d="M21 21l-6 -6"></path></svg>
      </button>
    </div>
    <div class="box-border flex items-center flex-wrap justify-start gap-[1rem]">
      <button
        class="p-0 appearance-none bg-transparent text-left no-underline box-border h-[2.25rem] pr-[1.125rem] inline-block w-auto rounded font-semibold relative leading-none text-sm select-none border border-blue-500 text-blue-500"
        style="padding-left: calc(1.125rem / 1.5);"
        type="button"
      >
        <div class="flex items-center justify-center h-full overflow-visible">
          <span class="flex items-center mr-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-video-plus"><path d="M15 10l4.553 -2.276a1 1 0 0 1 1.447 .894v6.764a1 1 0 0 1 -1.447 .894l-4.553 -2.276v-4z"></path><path d="M3 6m0 2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z"></path><path d="M7 12l4 0"></path><path d="M9 10l0 4"></path></svg>
          </span>
          <span class="flex whitespace-nowrap h-full overflow-hidden items-center">Create</span>
        </div>
      </button>
      <button class="btn-toggle-header" on:click={toggleTheme}>
        <svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-moon-stars"><path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z"></path><path d="M17 4a2 2 0 0 0 2 2a2 2 0 0 0 -2 2a2 2 0 0 0 -2 -2a2 2 0 0 0 2 -2"></path><path d="M19 11h2m-1 -1v2"></path></svg>
      </button>
      <button class="btn-toggle-header">
        <svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-history"><path d="M12 8l0 4l2 2"></path><path d="M3.05 11a9 9 0 1 1 .5 4m-.5 5v-5h5"></path></svg>
      </button>
      <button class="btn-toggle-header">
        <svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-bookmark-plus"><path d="M12.357 17.214l-.357 -.214l-5 3v-14a2 2 0 0 1 2 -2h6a2 2 0 0 1 2 2v6.5"></path><path d="M16 19h6"></path><path d="M19 16v6"></path></svg>
      </button>
      <button class="btn-toggle-header">
        <svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-dots-vertical"><path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path><path d="M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path><path d="M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path></svg>
      </button>
    </div>
  </div>
</header>


<style>
  .btn-toggle-header {
    @apply cursor-pointer appearance-none text-left no-underline box-border relative rounded p-0 leading-none flex items-center justify-center h-7 min-h-[1.75rem] w-7 min-w-[1.75rem] border border-transparent bg-transparent text-[#868e96];
  }
</style>
