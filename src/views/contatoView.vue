<template>
  <main class="flex justify-between text-gray-1000 ">


    <section class="justif-center p-20 w-[1000px]">
      <h1 class="font-bold text-6xl">Atuo na criação de projetos front-end e back-end.</h1>

      <h2 class="font-semibold text-3xl pt-10 pb-10">Também estou aberto a colaborar em projetos, participar de hackathons, contribuir com ideias e trocar experiências com outros desenvolvedores. Se você tem uma ideia ou precisa de ajuda em algo, é só chamar!</h2>

      <div class="bg-gray-200 p-6 rounded-xl shadow-md">
        <form class="grid grid-cols-1 gap-3">
          <div>
            <label class="block font-semibold ">Nome</label>
            <input class="bg-white w-full border border-gray-300 p-2 rounded" type="text">
          </div>

          <div>
            <label class="block font-semibold">Email</label>
            <input class="bg-white w-full border border-gray-300 p-2 rounded" type="email">
          </div>

          <div>
            <label class="block font-semibold">Mensagem</label>
            <textarea class="bg-white w-full border border-gray-300 p-2 rounded" rows="4" placeholder="Digite sua mensagem..." ></textarea>
          </div>

          <div>
            <button type="submit" class="bg-gray-600 text-white font-semibold px-6 py-2 rounded hover:bg-gray-700 transition cursor-pointer">
              Enviar
            </button>
          </div>
        </form>
      </div>
    </section>

    <section class="w-[560px] py-20">
      <img src="../assets/image/personagem.png" alt="">
    </section>
  </main>
</template>
