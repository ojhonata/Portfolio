<template>
  <nav class="bg-gray-900 text-gray-100 py-6 p-30 shadow ">
    <div class="flex items-center justify-between w-full ">
      <h1 class="font-bold text-2xl">Jhonata Canevare</h1>

    <ul class="flex gap-8 justify-items-end">
      <li class="text-xl transition-colors duration-300 hover:text-cyan-600">
        <router-link  to="/">
          Inicio
        </router-link>
      </li>

      <li class="text-xl transition-colors duration-300 hover:text-cyan-600">
        <router-link to="/sobreMim">
          Sobre Mim
        </router-link>
      </li>

      <li class="text-xl transition-colors duration-300 hover:text-cyan-600">
        <router-link to="/projeto">
          Projetos
        </router-link>
      </li>

      <li class="text-xl transition-colors duration-300 hover:text-cyan-600">
        <router-link to="/contato">
          Contato
        </router-link>
      </li>
    </ul>


    </div>
  </nav>
</template>
